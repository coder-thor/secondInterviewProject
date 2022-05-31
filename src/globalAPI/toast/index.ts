// css
import "./index.css";

import successIcon from "../../assets/success.png";
import errorIcon from "../../assets/error.png";

const instanceCount: unique symbol = Symbol("ToastInstance");

interface NotifyParams {
    content: string,
    duration: number,
}

type NotifyResolver<P = {}> = (conf: P & NotifyParams) => void;


class Toast {
    // 下面这个属性也可以使用protected去修饰, 不过我习惯挂symbol了
    static [instanceCount]: number = 1;

    notify: NotifyResolver<{ type: "success" | "error" }> = ({
        content = "",
        duration = 1000,
        type = "success"
    }) => {
        const div = document.createElement("div");
        
        div.style.top = 0 + "px";
        div.className = type === "success" ?  "___notify_modal_global_api___ ___notify_modal_global_api___success" : "___notify_modal_global_api___ ___notify_modal_global_api___error";
       
        const iconDom = document.createElement("img");
        iconDom.src = type === "success" ? successIcon : errorIcon;
        div.appendChild(iconDom);

        const contentDom = document.createElement("div");
        contentDom.innerHTML = content;

        div.appendChild(contentDom);

        document.body.appendChild(div);

        requestAnimationFrame(() => {
            console.log("Toast[instanceCount]", Toast[instanceCount]);
            div.style.top = Toast[instanceCount] * 50 + "px";
            Toast[instanceCount] += 1;
        })

        setTimeout(() => {
            document.body.removeChild(div);
            Toast[instanceCount] -= 1;
        }, duration)
    }

    static success: NotifyResolver = (props) => {
        new Toast().notify({
            type: "success",
            ...props
        })
    }

    static error: NotifyResolver = (props) => {
        new Toast().notify({
            type: "error",
            ...props
        })
    }
}

export default Toast;