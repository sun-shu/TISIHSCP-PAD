import { Button, Card, ConfigProvider, Form, Input } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { useModel } from 'umi';
import styles from './index.less';

const Login = () => {
  const { login } = useModel('userModel');

  const onFinish = async (values: any) => {
    console.log('Received values of form: ', values);
    await login(values);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeShadow: 'none',
            activeBorderColor: 'none',
            paddingInline: 0,
          },
        },
      }}
    >
      <div
        className={classNames(
          styles.login_page,
          "flex-center w-screen h-screen bg-[url('@/assets/background/login-bg.png')] bg-no-repeat	bg-center",
        )}
      >
        <Card
          border={false}
          bodyStyle={{ padding: '60px 80px' }}
          className="rounded-[60px]"
        >
          <div className="mb-[100px]">LOGO区域</div>

          <p className="text-primary text-3xl font-bold	mb-[60px]">登录</p>

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div className="w-[300px]  mb-[70px]">
              <p className="text-primary text-base">账户</p>
              <Form.Item
                name="username"
                className='mb-[20px]'
                rules={[
                  { required: true, message: '请输入用户名' },
                ]}
              >
                <Input
                  bordered={false}
                  placeholder="账号"
                  className={styles.user_name}
                  classNames="text-lg rounded-none "
                />
              </Form.Item>
              <p className="text-primary text-base">密码</p>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: '请输入密码' },
                ]}
              >
                <Input.Password
                  placeholder="密码"
                  bordered={false}
                  className={styles.pass_word}
                  classNames="text-lg rounded-none"
                />
              </Form.Item>
            </div>
            <div>
              <Button
                type="primary"
                block
                htmlType="submit"
                className="px-[20px] py-[14px] h-auto text-sm"
              >
                <span className="text-sm">登录</span>
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </ConfigProvider>
  );
};

export default Login;
