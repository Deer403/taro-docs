"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[44307],{79874:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),c=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(d,".").concat(m)]||u[m]||s[m]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26116:function(t,e,n){n.d(e,{Z:function(){return o}});var a=n(93106),r=n(4706),l="tabItem_TXiJ";function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function o({children:t,hidden:e,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:e}),t)}},76038:function(t,e,n){n.d(e,{Z:function(){return m}});var a=n(93106),r=n(4706),l=n(85959),i=n(52546),o=n(25612),d=n(74956),c="tabList_gMY0",p="tabItem_sIv8";function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},s.apply(this,arguments)}function u(t){var e;const{lazy:n,block:l,defaultValue:u,values:m,groupId:g,className:k}=t,h=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=m?m:h.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),y=(0,i.l)(f,((t,e)=>t.value===e.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const N=null===u?u:null!==(b=null!=u?u:null===(e=h.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==b?b:h[0].props.value;if(null!==N&&!f.some((t=>t.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,o.U)(),[x,P]=(0,a.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:A}=(0,d.o5)();if(null!=g){const t=v[g];null!=t&&t!==x&&f.some((e=>e.value===t))&&P(t)}const I=t=>{const e=t.currentTarget,n=O.indexOf(e),a=f[n].value;a!==x&&(A(e),P(a),null!=g&&w(g,String(a)))},T=t=>{let e=null;switch(t.key){case"Enter":I(t);break;case"ArrowRight":{const a=O.indexOf(t.currentTarget)+1;var n;e=null!==(n=O[a])&&void 0!==n?n:O[0];break}case"ArrowLeft":{const n=O.indexOf(t.currentTarget)-1;var a;e=null!==(a=O[n])&&void 0!==a?a:O[O.length-1];break}}null==e||e.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},k)},f.map((({value:t,label:e,attributes:n})=>a.createElement("li",s({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:t=>O.push(t),onKeyDown:T,onClick:I},n,{className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":x===t})}),null!=e?e:t)))),n?(0,a.cloneElement)(h.filter((t=>t.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==x})))))}function m(t){const e=(0,l.Z)();return a.createElement(u,s({key:String(e)},t))}},61950:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});n(93106);var a=n(79874),r=n(76038),l=n(26116);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const d={title:"Image",sidebar_label:"Image"},c=void 0,p={unversionedId:"components/media/image",id:"version-3.x/components/media/image",title:"Image",description:"Image. This component supports JPG, PNG, and SVG images. Cloud file IDs are supported from 2.3.0 and later.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/media/image.md",sourceDirName:"components/media",slug:"/components/media/image",permalink:"/taro-docs/en/docs/components/media/image",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/media/image.md",tags:[],version:"3.x",frontMatter:{title:"Image",sidebar_label:"Image"},sidebar:"components",previous:{title:"Audio",permalink:"/taro-docs/en/docs/components/media/audio"},next:{title:"LivePlayer",permalink:"/taro-docs/en/docs/components/media/live-player"}},s={},u=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"ImageProps",id:"imageprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"mode",id:"mode",level:3},{value:"API Support",id:"api-support",level:2}],m={toc:u};function g(t){var{components:e}=t,n=o(t,["components"]);return(0,a.kt)("wrapper",i({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Image. This component supports JPG, PNG, and SVG images. Cloud file IDs are supported from 2.3.0 and later."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," To implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," feature of the mini program, a ",(0,a.kt)("inlineCode",{parentName:"p"},"div")," container is used in the H5 component to corp the display area of the internal ",(0,a.kt)("inlineCode",{parentName:"p"},"img"),", so please do not use the element selector to reset the style of the ",(0,a.kt)("inlineCode",{parentName:"p"},"img"),"! "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/image.html"}),"Reference"))),(0,a.kt)("h2",i({},{id:"type"}),"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"ComponentType<ImageProps>\n")),(0,a.kt)("h2",i({},{id:"examples"}),"Examples"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Image\n          style='width: 300px;height: 100px;background: #fff;'\n          src='nerv_logo.png'\n        />\n        <Image\n          style='width: 300px;height: 100px;background: #fff;'\n          src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'\n        />\n      </View>\n    )\n  }\n}\n"))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <image\n      style="width: 300px;height: 100px;background: #fff;"\n      src="nerv_logo.png"\n    />\n    <image\n      style="width: 300px;height: 100px;background: #fff;"\n      src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"\n    />\n  </view>\n</template>\n')))),(0,a.kt)("h2",i({},{id:"imageprops"}),"ImageProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Default"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"src"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The image resource address")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"scaleToFill" | "aspectFit" | "aspectFill" | "widthFix" | "heightFix" | "top" | "bottom" | "center" | "left" | "right" | "top left" | "top right" | "bottom left" | "bottom right"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"scaleToFill"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies the clipping mode or the scale mode of an image")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"webp"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"WebP format is not parsed by default, only web resources are supported.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"lazyLoad"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Enables lazy loading of images. An image is not loaded until it enters a specific range (within three consecutive screens).")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"showMenuByLongpress"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Enables the feature of displaying the Mini Program code menu when an image is tapped and held.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onError"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered when an error occurs. event.detail = ","{errMsg}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onLoad"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onLoadEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered when an image is completely loaded. event.detail = ","{height, width}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"imgProps"),(0,a.kt)("td",null,(0,a.kt)("code",null,"ImgHTMLAttributes<HTMLImageElement>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Additional attributes for `img` tags")))),(0,a.kt)("h3",i({},{id:"property-support"}),"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"Property"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"ByteDance Micro-App"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.src"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.mode"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f(Partial support scaleToFill, aspectFit, aspectFill, widthFix)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.webp"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.lazyLoad"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.showMenuByLongpress"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.onError"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.onLoad"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"ImageProps.imgProps"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h3",i({},{id:"mode"}),"mode"),(0,a.kt)("p",null,"Valid values of mode"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"scaleToFill"),(0,a.kt)("td",null,"A scale mode, where the image is scaled without maintaining the aspect ratio to fully stretch to fill the screen with elements of the image.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"aspectFit"),(0,a.kt)("td",null,"A scale mode, where the image is scaled with the aspect ratio unchanged to fully display its longer edge. In this case, the image can be completely displayed.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"aspectFill"),(0,a.kt)("td",null,"A scale mode, where the image is scaled with the aspect ratio unchanged to fully display its shorter edge. In this case, the image is completely displayed in the horizontal or vertical direction, and it is truncated in the other direction.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"widthFix"),(0,a.kt)("td",null,"A scale mode, where the width of the image remains unchanged with the height adjusted automatically, and the aspect ratio of the original image is maintained.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"heightFix"),(0,a.kt)("td",null,"A scale mode, where the height of the image remains unchanged with the width adjusted automatically, and the aspect ratio of the original image is maintained.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"top"),(0,a.kt)("td",null,"A clipping mode, where only the upper area of the image is displayed without scaling.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"bottom"),(0,a.kt)("td",null,"A clipping mode, where only the lower area of the image is displayed without scaling.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"center"),(0,a.kt)("td",null,"A clipping mode, where only the central area of the image is displayed without scaling.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"left"),(0,a.kt)("td",null,"A clipping mode, where only the left area of the image is displayed without scaling.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"right"),(0,a.kt)("td",null,"A clipping mode, where only the right area of the image is displayed without scaling.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"top left"),(0,a.kt)("td",null,"A clipping mode, where only the upper left area of the image is displayed without scaling.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"top right"),(0,a.kt)("td",null,"A clipping mode, where only the upper right area of the image is displayed without scaling.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"bottom left"),(0,a.kt)("td",null,"A clipping mode, where only the lower left area of the image is displayed without scaling.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"bottom right"),(0,a.kt)("td",null,"A clipping mode, where only the lower right area of the image is displayed without scaling.")))),(0,a.kt)("h2",i({},{id:"api-support"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"ByteDance Micro-App"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"Image"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}g.isMDXComponent=!0}}]);