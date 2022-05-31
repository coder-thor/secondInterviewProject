// types
import { TreeComponentProps} from "./types";

// comps
import TreeItem from "./TreeItem";

export default function Tree({ treeConf }: TreeComponentProps) {
    return (
        <div className="tree-container">
            {
                treeConf.map((conf) => {
                    return (
                        <TreeItem { ...conf } dataKey={ conf.key } />
                    )
                })
            }
        </div>
    )
}