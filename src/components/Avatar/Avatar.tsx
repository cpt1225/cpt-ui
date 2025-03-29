import React from  'react';
import img from './user.png'
import style from './style/index.module.less'

export interface AvatarProps {
  /**
   * 头像图片地址
  */
  src?: string;
  /**
   * 头像形状
  */
  shape?: 'circle' | 'square';
  /* 
    * 名字
  */
  alt?: string;
  /**
   * 边框颜色
  */
  color?: string;
}

/**
 * 头像组件
*/
export const Avatar = ({
  src,
  shape,
  color,
  alt,
  ...props
}: AvatarProps) => {
  const shapeClass = shape == 'square' ? style['storybook-avatar-square'] : style['storybook-avatar-circle'];
  return (
      <img
        src={src || img}
        alt={alt}
        className={[
          shapeClass,
          style['storybook-avatar']
        ].join(' ')}
        style={{border: `1px solid ${color}` || '1px solid #ccc'}}
      />
  );
};
