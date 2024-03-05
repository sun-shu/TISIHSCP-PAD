const useSubmitAddForm = () => {

  //返回按钮需要的两个方法
  return {
    submitAddForm: (values: any) => {
      console.log('submitAddForm', values);
    },
    resetAddForm: () => {
      console.log('resetAddForm');
    },
  };
};

export default useSubmitAddForm;