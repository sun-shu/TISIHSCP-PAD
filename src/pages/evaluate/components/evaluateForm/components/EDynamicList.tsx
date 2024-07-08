// PS: 列表组件 用于表格题小于N个时使用

import React, { useEffect } from 'react';
import { Button, Form, Space } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import FormItemComponent from '@/pages/evaluate/components/evaluateForm/components/FormItemComponent';


const FormItemBaseContainer = ({ item, children, formItemProps = {} }) => {
	return (
		<div>
			<div className="bg-white  rounded-[4px]">
				<div className="w-full ">
					<Form.Item name={item?.index} {...formItemProps} className="mb-0">
						{children}
					</Form.Item>
				</div>
			</div>
		</div>
	);
};

const EDynamicList = (props) => {
	const { disabled = false } = props;
	const { id, value = {}, onChange, item: config } = props;

	const [listFormRef] = Form.useForm();
	const onValuesChange = async (changedFields, allFields) => {
		// 获取表格内容
		const listTableValue = await listFormRef.getFieldValue('list');

		const notEmptyData = listTableValue.filter(item => {
			return item?.some(value => value?.answer || value?.optionValues);
		});

		// 更新值
		onChange({
			...config,
			...value,
			bodyList: notEmptyData,
			headList: config.optionList,
		});
	};

	useEffect(() => {
		console.log('EDynamicList value', value);
	}, [value]);

	const elementList = config?.optionList.map((item, index) => {
		return {
			...item,
			id: item?.id.toString(),
			elementType: item?.optionControlType,
			elementDataType: item?.optionDataType,
			elementRequireFlg: item?.optionRequireFlg,
			elementName: item?.optionName,
			elementMaxLength: item?.optionMaxLength,
		};
	});

	return (
		<Form
			name="dynamic_form_nest_item"
			style={{ maxWidth: 600 }}
			form={listFormRef}
			autoComplete="off"
			disabled={disabled}
			onValuesChange={onValuesChange}
			initialValues={{ list: value?.bodyList || [] }}
		>
			<Form.List name="list">
				{(fields, { add, remove }) => (
					<>
						{fields.map(({ key, name, ...restField }, fieldIndex) => (
							<Space key={key} style={{ display: 'flex', marginTop: 0, marginBottom: 0 }} align="baseline">
								<>
									{elementList.map((item, index) => {
										return (
											<div key={item.id}>
												<FormItemComponent item={{
													...item, index: index,
												}} index={index} form={listFormRef}
																					 commonFormItemProps={{ initialValue: item, name: [name, index] }}
																					 FormItemBaseContainer={FormItemBaseContainer}
												/>
											</div>
										);
									})}
									{!disabled && <MinusCircleOutlined onClick={() => remove(name)} />}
								</>
							</Space>
						))}
						<Form.Item className="mt-[15px]">
							<Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}></Button>
						</Form.Item>
					</>
				)}
			</Form.List>
		</Form>
	);
};

export default EDynamicList;