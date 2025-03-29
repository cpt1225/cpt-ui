import{j as g}from"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";const v=""+new URL("user-BDwAwwLt.png",import.meta.url).href,e={"storybook-avatar":"_storybook-avatar_oa9ws_1","storybook-avatar-circle":"_storybook-avatar-circle_oa9ws_7","storybook-avatar-square":"_storybook-avatar-square_oa9ws_10"},p=({src:l,shape:m,color:d,alt:u,...y})=>{const f=m=="square"?e["storybook-avatar-square"]:e["storybook-avatar-circle"];return g.jsx("img",{src:l||v,alt:u,className:[f,e["storybook-avatar"]].join(" "),style:{border:`1px solid ${d}`||"1px solid #ccc"}})};p.__docgenInfo={description:"头像组件",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"头像图片地址"},shape:{required:!1,tsType:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}]},description:"头像形状"},alt:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:"边框颜色"}}};const b={title:"通用/Avatar",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"color"}}},a={args:{shape:"circle",color:"green",src:"https://i.pinimg.com/736x/7c/00/4f/7c004f80186a1f32a19d645df0eefc94.jpg",alt:"avatar"}},r={args:{shape:"square",color:"blue",src:"https://i.pinimg.com/736x/7c/00/4f/7c004f80186a1f32a19d645df0eefc94.jpg",alt:"avatar"}};var s,o,t;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    color: 'green',
    src: 'https://i.pinimg.com/736x/7c/00/4f/7c004f80186a1f32a19d645df0eefc94.jpg',
    alt: 'avatar'
  }
}`,...(t=(o=a.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var c,n,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    shape: 'square',
    color: 'blue',
    src: 'https://i.pinimg.com/736x/7c/00/4f/7c004f80186a1f32a19d645df0eefc94.jpg',
    alt: 'avatar'
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const h=["Circle","Square"];export{a as Circle,r as Square,h as __namedExportsOrder,b as default};
