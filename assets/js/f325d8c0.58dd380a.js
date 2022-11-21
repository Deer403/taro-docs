"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[19048],{79874:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,g=u["".concat(c,".").concat(s)]||u[s]||d[s]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26116:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(93106),r=n(4706),i="tabItem_TXiJ";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return a.createElement("div",l({role:"tabpanel",className:(0,r.Z)(i,n)},{hidden:t}),e)}},76038:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(93106),r=n(4706),i=n(85959),l=n(52546),o=n(25612),c=n(74956),p="tabList_gMY0",m="tabItem_sIv8";function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function u(e){var t;const{lazy:n,block:i,defaultValue:u,values:s,groupId:g,className:k}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=s?s:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,l.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const f=null===u?u:null!==(v=null!=u?u:null===(t=h.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:h[0].props.value;if(null!==f&&!N.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,o.U)(),[x,O]=(0,a.useState)(f),M=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=g){const e=y[g];null!=e&&e!==x&&N.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,n=M.indexOf(t),a=N[n].value;a!==x&&(P(t),O(a),null!=g&&w(g,String(a)))},j=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const a=M.indexOf(e.currentTarget)+1;var n;t=null!==(n=M[a])&&void 0!==n?n:M[0];break}case"ArrowLeft":{const n=M.indexOf(e.currentTarget)-1;var a;t=null!==(a=M[n])&&void 0!==a?a:M[M.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},N.map((({value:e,label:t,attributes:n})=>a.createElement("li",d({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>M.push(e),onKeyDown:j,onClick:C},n,{className:(0,r.Z)("tabs__item",m,null==n?void 0:n.className,{"tabs__item--active":x===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function s(e){const t=(0,i.Z)();return a.createElement(u,d({key:String(t)},e))}},38729:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return u}});n(93106);var a=n(79874),r=n(76038),i=n(26116);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={title:"MatchMedia",sidebar_label:"MatchMedia"},p=void 0,m={unversionedId:"components/viewContainer/match-media",id:"version-3.x/components/viewContainer/match-media",title:"MatchMedia",description:"media query \u5339\u914d\u68c0\u6d4b\u8282\u70b9\u3002\u53ef\u4ee5\u6307\u5b9a\u4e00\u7ec4 media query \u89c4\u5219\uff0c\u6ee1\u8db3\u65f6\uff0c\u8fd9\u4e2a\u8282\u70b9\u624d\u4f1a\u88ab\u5c55\u793a\u3002",source:"@site/versioned_docs/version-3.x/components/viewContainer/match-media.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/match-media",permalink:"/taro-docs/docs/components/viewContainer/match-media",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/viewContainer/match-media.md",tags:[],version:"3.x",frontMatter:{title:"MatchMedia",sidebar_label:"MatchMedia"},sidebar:"components",previous:{title:"CoverImage",permalink:"/taro-docs/docs/components/viewContainer/cover-image"},next:{title:"MovableArea",permalink:"/taro-docs/docs/components/viewContainer/movable-area"}},d={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"MatchMediaProps",id:"matchmediaprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3}],s={toc:u};function g(e){var{components:t}=e,c=o(e,["components"]);return(0,a.kt)("wrapper",l({},s,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"media query \u5339\u914d\u68c0\u6d4b\u8282\u70b9\u3002\u53ef\u4ee5\u6307\u5b9a\u4e00\u7ec4 media query \u89c4\u5219\uff0c\u6ee1\u8db3\u65f6\uff0c\u8fd9\u4e2a\u8282\u70b9\u624d\u4f1a\u88ab\u5c55\u793a\u3002\n\u901a\u8fc7\u8fd9\u4e2a\u8282\u70b9\u53ef\u4ee5\u5b9e\u73b0\u201c\u9875\u9762\u5bbd\u9ad8\u5728\u67d0\u4e2a\u8303\u56f4\u65f6\u624d\u5c55\u793a\u67d0\u4e2a\u533a\u57df\u201d\u8fd9\u6837\u7684\u6548\u679c\u3002"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",l({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"ComponentType<MatchMediaProps>\n")),(0,a.kt)("h2",l({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),'class App extends Components {\n  render () {\n    return (\n      <View>\n        <MatchMedia minWidth="300" maxWidth="600">\n          <view>\u5f53\u9875\u9762\u5bbd\u5ea6\u5728 300 ~ 500 px \u4e4b\u95f4\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n        </MatchMedia>\n        <MatchMedia minHeight="400" orientation="landscape">\n          <view>\u5f53\u9875\u9762\u9ad8\u5ea6\u4e0d\u5c0f\u4e8e 400 px \u4e14\u5c4f\u5e55\u65b9\u5411\u4e3a\u7eb5\u5411\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n        </MatchMedia>\n      </View>\n    )\n  }\n}\n'))),(0,a.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <match-media min-width="300" max-width="500">\n      <view>\u5f53\u9875\u9762\u5bbd\u5ea6\u5728 300 ~ 500 px \u4e4b\u95f4\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n    </match-media>\n    <match-media min-height="400" orientation="landscape">\n      <view>\u5f53\u9875\u9762\u9ad8\u5ea6\u4e0d\u5c0f\u4e8e 400 px \u4e14\u5c4f\u5e55\u65b9\u5411\u4e3a\u7eb5\u5411\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n    </match-media>\n  </view>\n</template>\n')))),(0,a.kt)("h2",l({},{id:"matchmediaprops"}),"MatchMediaProps"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"minWidth"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u9875\u9762\u6700\u5c0f\u5bbd\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"maxWidth"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u9875\u9762\u6700\u5927\u5bbd\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"width"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u9875\u9762\u5bbd\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"minHeight"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u9875\u9762\u6700\u5c0f\u9ad8\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"maxHeight"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u9875\u9762\u6700\u5927\u9ad8\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"height"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u9875\u9762\u9ad8\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"orientation"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5c4f\u5e55\u65b9\u5411\uff08 landscape \u6216 portrait \uff09")))),(0,a.kt)("h3",l({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"Harmony"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"MatchMediaProps.minWidth"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"MatchMediaProps.maxWidth"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"MatchMediaProps.width"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"MatchMediaProps.minHeight"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"MatchMediaProps.maxHeight"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"MatchMediaProps.height"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"MatchMediaProps.orientation"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))))))}g.isMDXComponent=!0},80068:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);