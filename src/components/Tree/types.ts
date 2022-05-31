export interface TreeConf {
    title: string;
    key: string | number;
    children?: Array<TreeConf>
}

export interface TreeComponentProps {
    treeConf: Array<TreeConf>
}