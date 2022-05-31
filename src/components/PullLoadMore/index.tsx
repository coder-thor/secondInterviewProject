import { useCallback, useLayoutEffect, ReactNode } from "react"


// Style
import PullLoadStyle from "./style"

/*
 * 导出一个滚动加载更多的插件
 * 接收的参数如下:
 * domElement: 监听谁的滚动事件, 默认监听window
 * isOver: 表示数据量已经全部加载出来了, 不需要再加载了, 就传递true, 否则就会一直加载
 * scrollCallback: 当滚动条到指定位置的时候要执行的回调
 * scrollTargetPosition: 滚动条距离底部的具体位置, 当匹配到这个位置的时候 会执行回调
 */
let prevScrollTop = 0 // 记录一下他之前的scrollTop, 主要作用是为了防止他向上滚动也去重新加载数据
interface ScrollLoadMoreToolProps {
    domElement: HTMLElement | null;
    children: ReactNode | null;
    scrollTargetPosition: number;
    scrollCallback: Function;
    isOver: boolean;
    isLoading: boolean;
    isShowTip: boolean;
    scrollDomClassName: string;
}
function ScrollLoadMoreTool ({ 
    domElement = null, 
    children = null, 
    scrollTargetPosition = 30, 
    scrollCallback = () => {}, 
    isOver = false, 
    isLoading = false, 
    isShowTip = true, 
    scrollDomClassName= "" }: ScrollLoadMoreToolProps) {
	/*
	 * 在这个插件里, 要做的事情无非就是监听整个浏览器的滚动事件, 当匹配到对应的位置的时候
	 * 就触发对应的callback,
	 */
	const scrollHandler = useCallback((e: any) => {
		const { scrollHeight, scrollTop, offsetHeight} = e.target
		if (scrollHeight - scrollTop - offsetHeight <= scrollTargetPosition && (scrollTop > prevScrollTop)) {

			if (!isOver) {
				scrollCallback()
			}

		}
		prevScrollTop = scrollTop

	}, [ isOver, scrollCallback, scrollTargetPosition ])
	useLayoutEffect(() => {
		// 监听滚动事件
		let matchElement = domElement
		if (!matchElement) {
			matchElement = (document.getElementsByClassName(scrollDomClassName)[0] || window) as HTMLElement
		}
		matchElement.addEventListener("scroll", scrollHandler)
		return () => (matchElement as HTMLElement).removeEventListener("scroll", scrollHandler)
	}, [ isOver, scrollDomClassName ]) // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<PullLoadStyle>
			<div className="load-more-wrapper">
				{ children || null }
				{
					(isLoading || isOver) && isShowTip ?
						<div className="load-status-description">
							{ isOver ? null : <div>加载更多</div> }
							<span className="load-text">{ isOver ? "所有数据加载完毕" : "数据加载中" }</span>
						</div> : null
				}
			</div>
		</PullLoadStyle>
	)

}

export default ScrollLoadMoreTool
