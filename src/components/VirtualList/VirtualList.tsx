import React from "react";
import type { CSSProperties, ReactNode } from 'react';
import style from "./style/index.module.less";

export interface VirtualListProps {
  /* 
  * 虚拟列表类型
   */
  virtualListType?: 'uncertainHeight' | 'fixedHeight' | 'dynamicHeight';
  /**
	 * 列表项高度【定高使用】
	 */
	itemHeight?: number;
	/**
	 * 列表项总数
	 */
	itemSumCount?: number;
	/**
	 * 虚拟列表高度
	 */
	listHeight?: number;
	/**
	 * 虚拟列表宽度
	 */
	listWidth?: number;
	/**
	 * 缓冲区大小
	 */
	bufferNum?: number;
}

// 虚拟列表的类型,设计三种类型返回函数节点
interface GetRenderFunc {
	uncertainHeight: (options: VirtualListProps) => ReactNode;
	fixedHeight: (options: VirtualListProps) => ReactNode;
	dynamicHeight: (options: VirtualListProps) => ReactNode;
}

// 虚拟列表子项接口
interface ChildItemProps {
	childIndex: number;
	childHeight?: number;
	itemStyle?: CSSProperties;
}

// 子项
const ChildItem = (options: ChildItemProps) => {
	const {childHeight = 50, childIndex, itemStyle} = options;
	return (
		<div
			className={style.childContainer}
			style={
				itemStyle ?? {
					position: 'absolute',
					height: childHeight,
					top: childHeight * childIndex,
				}
			}
			key={`${childIndex}${itemStyle?.height}`}>
			{itemStyle ? (
				<span>
					序号{childIndex + 1} 高度：{itemStyle.height} top偏移：
					{itemStyle.top}
				</span>
			) : (
				<span>{childIndex + 1} </span>
			)}
		</div>
	);
};


const FixedHeightRender = (options : VirtualListProps) => {
  const {itemHeight = 50, itemSumCount = 1000, listWidth, listHeight} = options;
  // 记录滚动掉的高度
	const [scrollTop, setScrollTop] = React.useState<number>(0);
  // 自定义的列表高度
  const customContainerStyle: CSSProperties = {
		position: 'relative',
		width: listWidth ?? 400,
		height: listHeight ?? 600,
	};
  // 1000个元素撑起盒子的实际高度
	const contentStyle: CSSProperties = {
		height: itemHeight * itemSumCount,
		width: '100%',
	};
  const scrollHandle = (event: React.UIEvent<HTMLElement>) => {
		const {scrollTop} = event.currentTarget;
		setScrollTop(scrollTop);
	};

  const getCurShowChild = (options: VirtualListProps) => {
    const {itemHeight = 50, itemSumCount = 1000, listHeight = 600} = options;
    // 可视区起始索引
    const startIndex = Math.floor(scrollTop / itemHeight);
    // 上缓冲区起始索引
    const finialStartIndex = Math.max(0, startIndex - 2);
    // 可视区能展示的元素的最大个数
    const numVisible = Math.ceil(listHeight / itemHeight);
    // 下缓冲区结束索引
    const finialEndIndex = Math.min(itemSumCount, startIndex + numVisible + 2);
    const items = [];
    // 根据上面计算的索引值，不断添加元素给container
    for (let i = finialStartIndex; i < finialEndIndex; i++) {
            items.push(
                    ChildItem({
                            childHeight: itemHeight,
                            childIndex: i,
                    }),
            );
    }
    return items;
};
  return (
		<div
                className={style.fixedHeightContainer}
                style={customContainerStyle}
                onScroll={scrollHandle}>
                <div className={style.contentContainer} style={contentStyle}>
                        {getCurShowChild(options)}
                </div>
		</div>
	);


}


export const VirtualList = (props: VirtualListProps) => {
}
