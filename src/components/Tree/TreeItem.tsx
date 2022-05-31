// deps
import { ReactElement, useCallback, useState } from "react";

// types
import { TreeConf } from "./types";

// comps
import Triangle from "../Triangle";

// utils
import {  } from "lodash";

// style
import { TreeItemStyle } from "./style";
import { CSSProperties } from "styled-components";

interface IProps extends TreeConf {
    dataKey: string | number;
    nestLevel?: number; // 嵌套等级
}

export default function TreeItem({ title, children, dataKey, nestLevel = 0 }:  IProps): ReactElement {
    const [presentStyle, setPresentStyle] = useState<CSSProperties>({
        height: 0,
        overflow: "hidden",
    })
    const onExpand = useCallback<(isExpand: boolean) => void>((isExpand) => {
        // 如果最新的状态是展开 那我就把高度变成auto 否则就0
        if (isExpand) {
            setPresentStyle({
                height: "auto",
                overflow: "visible",
            })
        } else {
            setPresentStyle({
                height: "0",
                overflow: "hidden",
            })
        }
    }, [])
    return (
        <TreeItemStyle>
            <div style={{ 
                marginLeft: nestLevel * 15 + "px",
             }} className="tree-item-container">
                <div className="current-content">
                    <Triangle disabled={ !children || children.length === 0 } onExpand={ onExpand }/>
                    <span>{ title  }</span>
                </div>
                <div style={presentStyle}>
                    { children && children.map(child => <TreeItem nestLevel={ nestLevel + 1 } { ...child } dataKey={ child.key } />) }
                </div>
            </div>
        </TreeItemStyle>
    )
}