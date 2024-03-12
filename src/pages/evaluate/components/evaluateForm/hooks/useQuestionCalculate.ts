import { TemplateResDTO } from '@/api/evaluateTemplate/seeTemplateData.interface';
import { ElementTypeEnum } from '@/enums/ElementTypeEnum';
import { ElementVisibleEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementVisibleEnum';
import { useEffect } from 'react';

const useQuestionCalculate = (elementList: TemplateResDTO[], setElementList) => {


  useEffect(() => {
    const newElementList = calculateTitleNum(elementList);
    setElementList(newElementList);

  }, []);

  //计算序号逻辑，遇到标题，序号就重新计算
  //更新显示的题目和进度
  const calculateTitleNum = (elementList: TemplateResDTO[]) => {
    const titleType = [ElementTypeEnum.ONE_SECTION, ElementTypeEnum.TWO_SECTION];
    let elementIndex = 0;

    return elementList.map((item) => {
      // 如果当前元素是标题类型，则重置索引
      if (titleType.includes(item.elementType)) {
        elementIndex = 0;
      }
      // 如果当前元素是显示状态且不是标题类型，则增加索引
      else if (item.elementIsShow === ElementVisibleEnum.SHOW) {
        elementIndex++;
      }

      const elementNum = titleType.includes(item.elementType) ? 0 : elementIndex;

      return {
        ...item,
        elementNum,
      };
    });
  };

  // 修改题目显示状态
  const changeElementVisible = (elementId: number, visible: boolean) => {
    console.log('changeElementVisible', elementId, visible);

    const visibleElementList =
      elementList.map((item) => ({
        ...item,
        elementIsShow: item.id === elementId ? visible : item.elementIsShow,
      }));
    const newElementList = calculateTitleNum(visibleElementList);

    // 使用解构赋值和条件判断来简化映射操作
    setElementList(newElementList);
  };


  return {
    calculateTitleNum,
    changeElementVisible,
  };
};

export default useQuestionCalculate;