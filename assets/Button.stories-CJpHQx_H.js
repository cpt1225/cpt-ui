import{f as q}from"./index-CvAT5dNH.js";import{j as x}from"./jsx-runtime-BwZVo4Wn.js";import"./index-BBkUAzwr.js";const e={"storybook-button":"_storybook-button_1m9v8_2","storybook-button--primary":"_storybook-button--primary_1m9v8_11","storybook-button--secondary":"_storybook-button--secondary_1m9v8_15","storybook-button--small":"_storybook-button--small_1m9v8_20","storybook-button--medium":"_storybook-button--medium_1m9v8_24","storybook-button--large":"_storybook-button--large_1m9v8_28"},_=({primary:k=!1,size:f="medium",backgroundColor:v,label:B,...S})=>{const T=k?e["storybook-button--primary"]:e["storybook-button--secondary"];return x.jsx("button",{type:"button",className:[e["storybook-button"],e[`storybook-button--${f}`],T].join(" "),style:{backgroundColor:v},...S,children:B})};_.__docgenInfo={description:"一个简单的按钮组件",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"主要按钮",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"背景颜色"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"按钮大小",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"按钮内部消息"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"触发点击事件"}}};const h={title:"通用/Button",component:_,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:q()}},o={args:{primary:!0,label:"Button"}},r={args:{label:"Button"}},t={args:{size:"large",label:"Button"}},a={args:{size:"small",label:"Button"}};var s,n,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var u,m,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,y,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  }
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const w=["Primary","Secondary","Large","Small"];export{t as Large,o as Primary,r as Secondary,a as Small,w as __namedExportsOrder,h as default};
