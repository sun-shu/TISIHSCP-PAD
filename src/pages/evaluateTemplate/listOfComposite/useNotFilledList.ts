import { useEffect, useState } from 'react';
import { history } from 'umi';
type CompType = "write" | "view" | "finish"
const useListOfComposite = () => {
    const [data, setData] = useState({})
    /**
     * 表单组件通用按钮点击事件
     * @param compType 当前组件类型
     */
    const handleButtonClick = (compType: CompType, data?) => {
        setData({btnType: compType, data})
        switch (compType) {
            case "finish":
                // history.push("/evaluate/add", data)
                history.push("/evaluate/add", {btnType: compType})
                // history.push(`/evaluate/add?btnType=${compType}`)
                break;
            case "view":
                // history.push("/evaluate/add", data)
                history.push("/evaluate/add", {btnType: compType})
                // history.push(`/evaluate/add?btnType=${compType}`) 
                break;
            case "write":
                // history.push("/evaluate/add", data)
                history.push("/evaluate/add", {btnType: compType})
                // history.push(`/evaluate/add?btnType=${compType}`)
                break;
            default:
                // history.push("/evaluate/add", data)
                history.push("/evaluate/add", {btnType: "write"})
                // history.push(`/evaluate/add?btnType=${compType}`)
                break;
        }
    }
    return {
        handleButtonClick
    }
}

export default useListOfComposite