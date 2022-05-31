// comps
import { useMemo } from "react";
import Tree from "../../components/Tree";

// types
import { TreeConf } from "../../components/Tree/types";

export default function TreeTest() {

    const treeData = useMemo<Array<TreeConf>>(() => {
        return [
            {
                title: '我是1',
                key: '1',
                children: [
                    {
                        title: '我是1-1',
                        key: '1-1',
                        children: [
                            {
                                title: '我是1-1-1',
                                key: '1-1-1',
                            },
                            {
                                title: '我是1-1-2',
                                key: '1-1-2',
                            },
                        ],
                    },
                    {
                        title: '我是1-2',
                        key: '1-2',
                        children: [],
                    },
                ],
            },
            {
                title: '我是2',
                key: '2',
                children: []
            }
        ];
    }, []);

    return (
       <div className="wrapper">
           <div className="des">
               这个树形组件的话我考虑到尽量少的去造成dom的增加和删除, 就没有直接将他们的dom树移除掉, 而是通过
               使用overflow: hidden + 高度置为0的css规则去进行合并, 如果业务中连dom也不需要的话(针对于一些隐私信息)
               可以直接在children进行map的时候判断一下isExpand属性就好了
           </div>
            <Tree treeConf= { treeData } />
       </div>
    )
}