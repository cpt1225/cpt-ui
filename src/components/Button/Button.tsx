import React from 'react';
import style from './style/index.module.less';

export interface ButtonProps {
	/**
	 * 主要按钮
	 */
	primary?: boolean;
	/**
	 * 背景颜色
	 */
	backgroundColor?: string;
	/**
	 * 按钮大小
	 */
	size?: 'small' | 'medium' | 'large';
	/**
	 * 按钮内部消息
	 */
	label: string;
	/**
	 * 触发点击事件
	 */
	onClick?: () => void;
}

/**
 * 一个简单的按钮组件
 */
export const Button = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	...props
}: ButtonProps) => {
	const mode = primary
		? style['storybook-button--primary']
		: style['storybook-button--secondary'];
	return (
		<button
			type='button'
			className={[
				style['storybook-button'],
				style[`storybook-button--${size}`],
				mode,
			].join(' ')}
			style={{backgroundColor}}
			{...props}>
			{label}
		</button>
	);
};

