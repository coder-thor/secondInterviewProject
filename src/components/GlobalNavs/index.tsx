// deps
import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

// style
import GlobalNavStyle from "./style";

interface GlobalNavConf {
    path: string;
    text: string;
}

const globalNavConf: Array<GlobalNavConf> = [
    {
        path: "/toast",
        text: "toast全局弹窗"
    },
    {
        path: "/tree",
        text: "树形组件"
    },
    {
        path: "/manager",
        text: "管理系统"
    }
]

export default function GlobalNavs(): ReactElement {
    return (
        <GlobalNavStyle>
            {
                globalNavConf.map(({ path, text }) => (
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "nav-active nav-item" : "nav-item"
                        }
                        key={path} 
                        to={ path }
                    >
                        { text }测试页面
                    </NavLink>
                ))
            }
        </GlobalNavStyle>
    )
}