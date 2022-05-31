// deps
import { ReactElement, useState, useCallback, useMemo } from "react";
import { CSSProperties } from "styled-components";

// style
import TriangleStyle from "./style";

interface IProps {
    onExpand?: (isExpand: boolean) => void;
    disabled?: boolean; // 是否不可选中
}

export default function Triangle({ onExpand, disabled = false }: IProps): ReactElement {
    const [isExpand, setExpand] = useState<boolean>(false); // 当前的这个三角形是否是展开状态的默认为不展开
    const triangleStyle = useMemo<CSSProperties>(() => {
        console.log("isExpand", isExpand);
        return {
            transform: `rotate(${ isExpand ? 0 : "-90deg" })`,
            transition: "transform 0.1s linear",
            cursor: "pointer",
        }
    }, [isExpand])
    const onTriangleClick = useCallback(() => {
        if (disabled) return;
        setExpand(prev => {
            const newState = !prev;
            typeof onExpand === "function" && onExpand(newState)
            return newState;
        });
    }, [ onExpand, disabled ])

    return (
       <TriangleStyle>
            <div
                onClick={ onTriangleClick }
                style={triangleStyle}
                className={ disabled ? "disabled" : "" }
            >
                <svg className="icon" 
                viewBox="0 0 1024 1024" version="1.1" 
                xmlns="http://www.w3.org/2000/svg" 
                p-id="2167" width="14" height="14"><path d="M535.466667 812.8l450.133333-563.2c14.933333-19.2 2.133333-49.066667-23.466667-49.066667H61.866667c-25.6 0-38.4 29.866667-23.466667 49.066667l450.133333 563.2c12.8 14.933333 34.133333 14.933333 46.933334 0z" p-id="2168" 
                fill="#333333"></path></svg>
            </div>
       </TriangleStyle>
    )
}