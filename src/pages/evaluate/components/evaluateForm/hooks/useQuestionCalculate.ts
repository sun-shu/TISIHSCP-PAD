import { TemplateResDTO } from '@/api/evaluateTemplate/seeTemplateData.interface';
import { ElementTypeEnum } from '@/enums/ElementTypeEnum';
import { ElementVisibleEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementVisibleEnum';

const useQuestionCalculate = (setElementList, form) => {
  //计算序号逻辑，遇到标题，序号就重新计算
  //更新显示的题目和进度
  const calculateTitleNum = (currentElementList: TemplateResDTO[]) => {
    const titleType = [ElementTypeEnum.ONE_SECTION, ElementTypeEnum.TWO_SECTION];
    let elementIndex = 0;

    return currentElementList.map((item) => {
      // 如果当前元素是标题类型，则重置索引
      if (titleType.includes(item.elementType)) {
        elementIndex = 0;
      }

      // 如果当前元素是显示状态且不是标题类型，则增加索引
      else if (item.elementIsShow !== ElementVisibleEnum.HIDE) {
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
  const changeElementVisible = async (elementId: number, elementIsShow: ElementVisibleEnum) => {
    // 这里采用了函数式更新，避免多次触发造成的state覆盖，序号更新错误问题
    setElementList(prevState => {
      const visibleElementList =
        prevState.map((item) => ({
          ...item,
          elementIsShow: item.id === elementId ? elementIsShow : item.elementIsShow,
        }));

      return calculateTitleNum(visibleElementList);
    });


    form?.validateFields({
      validateOnly: true,
    });
  };


  return {
    calculateTitleNum,
    changeElementVisible,
  };
};

export default useQuestionCalculate;