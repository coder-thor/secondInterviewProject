import { ReactElement, useCallback } from "react";

// globalAPI
import Toast from "../../globalAPI/toast/index";

export default function ToastTest(): ReactElement {

    const toast = useCallback((type: boolean = true) => {
        Toast[type ? "success" : "error"]({
            content: `我是${type ? "成功" : "失败"}的提示`,
            duration: 1000
        })
    }, [])

    const errorToast = useCallback(() => { 
        toast(false);
    }, [toast])

    const successToast = useCallback(() => {
        toast(true);
    }, [toast])

    return (
        <div className="wrapper">
            <div className="des">
                这个全局提示看了一下antd的源码他是用的rc-notification这个包实现的, 这个包等同于实现了一个自己的
                react portals, 我这边没有这么多时间和精力去单独写一个rc-notification的包, 就直接操作了真实dom
                具体的可以查看src/globalAPI/toast.ts文件
            </div>
            <div className="content" style={{ display: "flex", gap: 10 }}>
                <button className="success-btn"  onClick={ successToast }>成功提示</button>
                <button className="error-btn" onClick={errorToast}>失败提示</button>
            </div>
        </div>
    )
}