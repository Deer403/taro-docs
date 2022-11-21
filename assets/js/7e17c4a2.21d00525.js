"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[37847],{79874:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=m(n),k=r,s=u["".concat(o,".").concat(k)]||u[k]||c[k]||l;return n?a.createElement(s,p(p({ref:e},d),{},{components:n})):a.createElement(s,p({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26116:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(93106),r=n(4706),l="tabItem_TXiJ";function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},p.apply(this,arguments)}function i({children:t,hidden:e,className:n}){return a.createElement("div",p({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:e}),t)}},76038:function(t,e,n){n.d(e,{Z:function(){return k}});var a=n(93106),r=n(4706),l=n(85959),p=n(52546),i=n(25612),o=n(74956),m="tabList_gMY0",d="tabItem_sIv8";function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},c.apply(this,arguments)}function u(t){var e;const{lazy:n,block:l,defaultValue:u,values:k,groupId:s,className:g}=t,N=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=k?k:N.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),f=(0,p.l)(b,((t,e)=>t.value===e.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const v=null===u?u:null!==(y=null!=u?u:null===(e=N.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==y?y:N[0].props.value;if(null!==v&&!b.some((t=>t.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:O}=(0,i.U)(),[w,T]=(0,a.useState)(v),P=[],{blockElementScrollPositionUntilNextRender:x}=(0,o.o5)();if(null!=s){const t=h[s];null!=t&&t!==w&&b.some((e=>e.value===t))&&T(t)}const D=t=>{const e=t.currentTarget,n=P.indexOf(e),a=b[n].value;a!==w&&(x(e),T(a),null!=s&&O(s,String(a)))},C=t=>{let e=null;switch(t.key){case"Enter":D(t);break;case"ArrowRight":{const a=P.indexOf(t.currentTarget)+1;var n;e=null!==(n=P[a])&&void 0!==n?n:P[0];break}case"ArrowLeft":{const n=P.indexOf(t.currentTarget)-1;var a;e=null!==(a=P[n])&&void 0!==a?a:P[P.length-1];break}}null==e||e.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},b.map((({value:t,label:e,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:t=>P.push(t),onKeyDown:C,onClick:D},n,{className:(0,r.Z)("tabs__item",d,null==n?void 0:n.className,{"tabs__item--active":w===t})}),null!=e?e:t)))),n?(0,a.cloneElement)(N.filter((t=>t.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},N.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==w})))))}function k(t){const e=(0,l.Z)();return a.createElement(u,c({key:String(e)},t))}},15102:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return m},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});n(93106);var a=n(79874),r=n(76038),l=n(26116);function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},p.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"OpenData",sidebar_label:"OpenData"},m=void 0,d={unversionedId:"components/open/open-data",id:"version-3.x/components/open/open-data",title:"OpenData",description:"\u7528\u4e8e\u5c55\u793a\u5e73\u53f0\u5f00\u653e\u7684\u6570\u636e",source:"@site/versioned_docs/version-3.x/components/open/open-data.md",sourceDirName:"components/open",slug:"/components/open/open-data",permalink:"/taro-docs/docs/components/open/open-data",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/open/open-data.md",tags:[],version:"3.x",frontMatter:{title:"OpenData",sidebar_label:"OpenData"},sidebar:"components",previous:{title:"OfficialAccount",permalink:"/taro-docs/docs/components/open/official-account"},next:{title:"WebView",permalink:"/taro-docs/docs/components/open/web-view"}},c={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"OpenDataProps",id:"opendataprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"Type",id:"type",level:3},{value:"Lang",id:"lang",level:3}],k={toc:u};function s(t){var{components:e}=t,o=i(t,["components"]);return(0,a.kt)("wrapper",p({},k,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7528\u4e8e\u5c55\u793a\u5e73\u53f0\u5f00\u653e\u7684\u6570\u636e"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:n(75629).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",p({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",p({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-tsx"}),"ComponentType<OpenDataProps>\n")),(0,a.kt)("h2",p({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n  render () {\n    return (\n      <OpenData type='userAvatarUrl'/>\n    )\n  }\n}\n"))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-html"}),'<template>\n  <open-data type="userAvatarUrl" />\n</template>\n')))),(0,a.kt)("h2",p({},{id:"opendataprops"}),"OpenDataProps"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"keyof Type")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5f00\u653e\u6570\u636e\u7c7b\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"openGid"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),'\u5f53 type="groupName" \u65f6\u751f\u6548, \u7fa4id')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"lang"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"keyof Lang")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},'"en"')),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),'\u5f53 type="user*" \u65f6\u751f\u6548\uff0c\u4ee5\u54ea\u79cd\u8bed\u8a00\u5c55\u793a userInfo')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"defaultText"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u6570\u636e\u4e3a\u7a7a\u65f6\u7684\u9ed8\u8ba4\u6587\u6848")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"defaultAvatar"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7528\u6237\u5934\u50cf\u4e3a\u7a7a\u65f6\u7684\u9ed8\u8ba4\u56fe\u7247\uff0c\u652f\u6301\u76f8\u5bf9\u8def\u5f84\u548c\u7f51\u7edc\u56fe\u7247\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"useEmptyValue"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5f53\u6570\u636e\u4e3a\u7a7a\u4e14\u672a\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u65f6\uff0c\u662f\u5426\u663e\u793a\u5b98\u65b9\u9ed8\u8ba4\u503c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"shareTicket"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5f53 type=groupCloudStorage \u65f6\u6709\u6548\uff0c\u7fa4\u5206\u4eab\u5bf9\u5e94\u7684 shareTicket")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"keyList"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5f53 type=*CloudStorage \u65f6\u6709\u6548\uff0c\u6307\u5b9a\u8981\u62c9\u53d6\u7684 key \u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"componentData"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5f53 type=*CloudStorage \u65f6\u6709\u6548\uff0c\u4ece\u4e3b\u57df\u900f\u4f20\u7ed9\u5f00\u653e\u6570\u636e\u57df\u7684\u6570\u636e\uff0c\u4f1a\u81ea\u52a8\u6ce8\u5165\u5230\u81ea\u5b9a\u4e49\u5f00\u653e\u6570\u636e\u57df\u7ec4\u4ef6\u7684 properties \u4e2d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"onError"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7fa4\u540d\u79f0\u6216\u7528\u6237\u4fe1\u606f\u4e3a\u7a7a\u65f6\u89e6\u53d1")))),(0,a.kt)("h3",p({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"React Native"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"Harmony"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.type"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.openGid"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.lang"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.defaultText"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.defaultAvatar"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.useEmptyValue"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.shareTicket"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.keyList"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.componentData"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"OpenDataProps.onError"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"})),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h3",p({},{id:"type"}),"Type"),(0,a.kt)("p",null,"type \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"groupName"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u62c9\u53d6\u7fa4\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userNickName"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7528\u6237\u6635\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userAvatarUrl"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7528\u6237\u5934\u50cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userGender"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7528\u6237\u6027\u522b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userCity"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7528\u6237\u6240\u5728\u57ce\u5e02")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userProvince"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7528\u6237\u6240\u5728\u7701\u4efd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userCountry"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7528\u6237\u6240\u5728\u56fd\u5bb6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"userLanguage"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7528\u6237\u7684\u8bed\u8a00")))),(0,a.kt)("h3",p({},{id:"lang"}),"Lang"),(0,a.kt)("p",null,"lang \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"en"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u82f1\u6587")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"zh_CN"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7b80\u4f53\u4e2d\u6587")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"zh_TW"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7e41\u4f53\u4e2d\u6587")))))}s.isMDXComponent=!0},80068:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},75629:function(t,e,n){e.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},88421:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);