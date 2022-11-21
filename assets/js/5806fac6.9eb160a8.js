"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[69522],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26116:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(93106),o=n(4706),a="tabItem_TXiJ";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c({children:e,hidden:t,className:n}){return r.createElement("div",l({role:"tabpanel",className:(0,o.Z)(a,n)},{hidden:t}),e)}},76038:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(93106),o=n(4706),a=n(85959),l=n(52546),c=n(25612),i=n(74956),u="tabList_gMY0",s="tabItem_sIv8";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e){var t;const{lazy:n,block:a,defaultValue:m,values:d,groupId:f,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=d?d:b.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,l.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var g;const k=null===m?m:null!==(g=null!=m?m:null===(t=b.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==g?g:b[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:w}=(0,c.U)(),[x,j]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.o5)();if(null!=f){const e=O[f];null!=e&&e!==x&&y.some((t=>t.value===e))&&j(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),r=y[n].value;r!==x&&(N(t),j(r),null!=f&&w(f,String(r)))},C=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;var n;t=null!==(n=T[r])&&void 0!==n?n:T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;var r;t=null!==(r=T[n])&&void 0!==r?r:T[T.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},v)},y.map((({value:e,label:t,attributes:n})=>r.createElement("li",p({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>T.push(e),onKeyDown:C,onClick:E},n,{className:(0,o.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":x===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,a.Z)();return r.createElement(m,p({key:String(t)},e))}},98344:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});n(93106);var r=n(79874),o=n(76038),a=n(26116);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"\u7ec4\u4ef6\u5e93\u8bf4\u660e"},u=void 0,s={unversionedId:"components-desc",id:"version-3.x/components-desc",title:"\u7ec4\u4ef6\u5e93\u8bf4\u660e",description:"Taro \u4ee5 \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u5e93 \u4e3a\u6807\u51c6\uff0c\u7ed3\u5408 jsx \u8bed\u6cd5\u89c4\u8303\uff0c\u5b9a\u5236\u4e86\u4e00\u5957\u81ea\u5df1\u7684\u7ec4\u4ef6\u5e93\u89c4\u8303\u3002",source:"@site/versioned_docs/version-3.x/components-desc.md",sourceDirName:".",slug:"/components-desc",permalink:"/taro-docs/docs/components-desc",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components-desc.md",tags:[],version:"3.x",frontMatter:{title:"\u7ec4\u4ef6\u5e93\u8bf4\u660e"},sidebar:"components",next:{title:"CustomWrapper",permalink:"/taro-docs/docs/components/custom-wrapper"}},p={},m=[{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2},{value:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d",id:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d",level:3},{value:"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5 on \u5f00\u5934",id:"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5-on-\u5f00\u5934",level:3}],d={toc:m};function f(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)("wrapper",l({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Taro \u4ee5 ",(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u5e93")," \u4e3a\u6807\u51c6\uff0c\u7ed3\u5408 ",(0,r.kt)("inlineCode",{parentName:"p"},"jsx")," \u8bed\u6cd5\u89c4\u8303\uff0c\u5b9a\u5236\u4e86\u4e00\u5957\u81ea\u5df1\u7684\u7ec4\u4ef6\u5e93\u89c4\u8303\u3002"),(0,r.kt)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u539f\u5219\uff0c\u5728\u5c0f\u7a0b\u5e8f\u7aef\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6240\u6709\u7684\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\uff0c\u800c\u5728\u5176\u4ed6\u7aef\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684\u7ec4\u4ef6\u5e93\u5b9e\u73b0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"H5 \u7aef\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/components"),"\uff0c\u540c\u65f6\u4e5f\u662f\u9700\u8981\u5f15\u5165\u7684\u9ed8\u8ba4\u6807\u51c6\u7ec4\u4ef6\u5e93")),(0,r.kt)("p",null,"\u5728\u4f7f\u7528\u65f6\uff0cReact \u4e2d\u6211\u4eec\u9700\u8981\u5148\u4ece Taro \u6807\u51c6\u7ec4\u4ef6\u5e93 ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/components")," \u5f15\u7528\u7ec4\u4ef6\uff0c\u518d\u8fdb\u884c\u4f7f\u7528\uff0c\u4f8b\u5982\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"<View />"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Text />")," \u7ec4\u4ef6\uff0c\u800c Vue \u6211\u4eec\u5219\u65e0\u9700\u5f15\u5165"),(0,r.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport { View, Text } from '@tarojs/components'\n\nexport default class C extends Component {\n  render () {\n    return (\n      <View className='c'>\n        <Text>c component</Text>\n      </View>\n    )\n  }\n}\n"))),(0,r.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="c">\n    <text>c component</text>\n  </view>\n</template>\n')))),(0,r.kt)("h2",l({},{id:"\u6ce8\u610f"}),"\u6ce8\u610f"),(0,r.kt)("p",null,"\u5728\u7ec4\u4ef6\u7684\u8be6\u7ec6\u6587\u6863\u4e2d\u5217\u51fa\u4e86\u7ec4\u4ef6\u5728\u4e0d\u540c\u7aef\u7684\u652f\u6301\u7a0b\u5ea6\uff0c\u4ee5\u53ca\u57fa\u672c\u7684\u4f7f\u7528\u793a\u4f8b\u3002 \u90e8\u5206\u672a\u5217\u51fa\u793a\u4f8b\u7684\uff0c\u6807\u660e\u4ec5\u5728\u5c0f\u7a0b\u5e8f\u7aef\u652f\u6301\u7684\u7ec4\u4ef6\u7684\u7528\u6cd5\u53ef\u4ee5\u76f4\u63a5\u53c2\u8003",(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/"}),"\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u4ecd\u9700\u9075\u5faa Taro \u7684\u5f00\u53d1\u89c4\u8303\uff1a"),(0,r.kt)("h3",l({},{id:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d"}),"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u4f7f\u7528 H5 \u7aef\u5c1a\u672a\u652f\u6301\u7684 map \u7ec4\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport Taro from '@tarojs/taro'\n// \u5f15\u5165 map \u7ec4\u4ef6\nimport { Map } from '@tarojs/components'\n\nclass App extends Components {\n  onTap () {}\n  render () {\n    return (\n      <Map onClick={this.onTap} />\n    )\n  }\n}\n")),(0,r.kt)("h3",l({},{id:"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5-on-\u5f00\u5934"}),"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5 on \u5f00\u5934"),(0,r.kt)("p",null,"\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d bind \u5f00\u5934\u8fd9\u6837\u7684\u7528\u6cd5\uff0c\u90fd\u9700\u8981\u8f6c\u6210\u4ee5 on \u5f00\u5934\u7684\u5f62\u5f0f\u3002"))}f.isMDXComponent=!0}}]);