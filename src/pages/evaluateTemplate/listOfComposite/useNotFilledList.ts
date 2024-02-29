import { useEffect } from 'react';
import { history } from '@@/core/history';
type CompType = "write" | "view" | "finish"
const useListOfComposite = () => {
    
    /**
     * 表单组件通用按钮点击事件
     * @param compType 当前组件类型
     */
    const handleButtonClick = (compType: CompType) => {
        switch (compType) {
            case "finish":
                history.replace("/evaluate/add")
                break;
            case "view":
                history.replace("/evaluate/add") 
                break;
            case "write":
                history.replace("/evaluate/add")
                break;
            default:
                history.replace("/evaluate/add")
                break;
        }
    }
    return {
        handleButtonClick
    }
}

export default useListOfComposite