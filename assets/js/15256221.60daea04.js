"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[57286],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),v=o,m=d["".concat(c,".").concat(v)]||d[v]||s[v]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89849:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"React DevTools"},i=void 0,c={unversionedId:"react-devtools",id:"version-3.x/react-devtools",title:"React DevTools",description:"Taro v3.3.1 \u5f00\u59cb\u652f\u6301\u3002",source:"@site/versioned_docs/version-3.x/react-devtools.md",sourceDirName:".",slug:"/react-devtools",permalink:"/taro-docs/docs/react-devtools",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/react-devtools.md",tags:[],version:"3.x",frontMatter:{title:"React DevTools"},sidebar:"docs",previous:{title:"\u9519\u8bef\u5904\u7406",permalink:"/taro-docs/docs/react-error-handling"},next:{title:"PReact",permalink:"/taro-docs/docs/preact"}},p={},u=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"1. \u5b89\u88c5",id:"1-\u5b89\u88c5",level:3},{value:"2. \u914d\u7f6e Taro \u63d2\u4ef6",id:"2-\u914d\u7f6e-taro-\u63d2\u4ef6",level:3},{value:"3. \u7f16\u8bd1\u9879\u76ee",id:"3-\u7f16\u8bd1\u9879\u76ee",level:3},{value:"\u63d2\u4ef6\u53c2\u6570",id:"\u63d2\u4ef6\u53c2\u6570",level:2},{value:"enabled",id:"enabled",level:3},{value:"port",id:"port",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2}],s={toc:u};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Taro v3.3.1 \u5f00\u59cb\u652f\u6301\u3002")),(0,r.kt)("p",null,"\u5728\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u65f6\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/facebook/react/blob/main/packages/react-devtools/README.md"}),"React DevTools"),"\u3002"),(0,r.kt)("h2",o({},{id:"\u4f7f\u7528\u65b9\u6cd5"}),"\u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("h3",o({},{id:"1-\u5b89\u88c5"}),"1. \u5b89\u88c5"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u5b89\u88c5 Taro \u63d2\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-react-devtools"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"$ yarn add --dev @tarojs/plugin-react-devtools\n")),(0,r.kt)("h3",o({},{id:"2-\u914d\u7f6e-taro-\u63d2\u4ef6"}),"2. \u914d\u7f6e Taro \u63d2\u4ef6"),(0,r.kt)("p",null,"\u5728 Taro \u7f16\u8bd1\u914d\u7f6e\u4e2d\u914d\u7f6e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-react-devtools"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="config/dev.js"',title:'"config/dev.js"'}),"config = {\n  plugins: [\n    '@tarojs/plugin-react-devtools'\n  ],\n  // ...\n}\n")),(0,r.kt)("h3",o({},{id:"3-\u7f16\u8bd1\u9879\u76ee"}),"3. \u7f16\u8bd1\u9879\u76ee"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"$ taro build --type weapp --watch\n")),(0,r.kt)("h2",o({},{id:"\u63d2\u4ef6\u53c2\u6570"}),"\u63d2\u4ef6\u53c2\u6570"),(0,r.kt)("p",null,"\u63d2\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-react-devtools")," \u5177\u6709\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,r.kt)("h3",o({},{id:"enabled"}),"enabled"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",null,"\u63a7\u5236\u662f\u5426\u8fde\u63a5 ",(0,r.kt)("inlineCode",{parentName:"p"},"react-devtools"),"\uff0c\u5f00\u542f\u540e\u4f1a\u6ce8\u5165 backend \u7684\u4ee3\u7801\u5230\u5f00\u53d1\u8005\u7684\u5e94\u7528\u4e2d\u3002"),(0,r.kt)("h3",o({},{id:"port"}),"port"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"8097")),(0,r.kt)("p",null,"React DevTools \u4f7f\u7528\u7684 Websocket \u7aef\u53e3\u3002"),(0,r.kt)("h2",o({},{id:"\u6ce8\u610f\u4e8b\u9879"}),"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f3a\u5236\u9501\u5b9a\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"react-devtools")," \u7684\u7248\u672c\uff0c\u66f4\u65b0\u7248\u672c\u9700\u8981\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-react-devtools")," \u63d2\u4ef6\u7684\u4ee3\u7801\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/facebook/react/blob/main/packages/react-devtools/OVERVIEW.md#inspecting-hooks"}),"\u4e3a\u4e86\u8bc6\u522b custom hooks"),"\uff0cbackend \u4f1a\u5bf9\u90e8\u5206\u7b26\u5408\u6761\u4ef6\u7684\u51fd\u6570\u5f0f\u7ec4\u4ef6\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"shallow rendering"),"\uff0c\u5f00\u53d1\u8005\u9700\u8981\u6ce8\u610f\u4ee3\u7801\u662f\u5426\u5b58\u5728\u526f\u4f5c\u7528\u3002")),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u76ee\u524d\u5bf9 devtools \u529f\u80fd\u7684\u652f\u6301\u4e0d\u591f\u5168\u9762\uff0c\u6709\u4e9b\u529f\u80fd\u9700\u8981\u9488\u5bf9\u5c0f\u7a0b\u5e8f\u73af\u5883\u9b54\u6539 backend \u624d\u80fd\u5b9e\u73b0\uff0c\u6b22\u8fce\u5171\u5efa\uff5e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5143\u7d20\u9ad8\u4eae\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5c0f\u7a0b\u5e8f\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"storage")," \u4e2d\u8bb0\u5f55 ",(0,r.kt)("inlineCode",{parentName:"li"},"filters")," \u53d8\u5316\u3002")),(0,r.kt)("h2",o({},{id:"\u8be6\u7ec6\u8bbe\u8ba1"}),"\u8be6\u7ec6\u8bbe\u8ba1"),(0,r.kt)("p",null,"\u8be6\u7ec6\u8bbe\u8ba1\u8bf7\u770b ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro-rfcs/blob/master/rfcs/0005-react-devtools.md"}),"RFC"),"\u3002"))}d.isMDXComponent=!0}}]);