"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[27351],{79874:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86957:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"\u5e38\u89c1\u95ee\u9898"},c=void 0,s={unversionedId:"specials",id:"version-2.x/specials",title:"\u5e38\u89c1\u95ee\u9898",description:"- Issue #46\uff0credux-saga \u7684\u5f15\u5165\u95ee\u9898\u5904\u7406",source:"@site/versioned_docs/version-2.x/specials.md",sourceDirName:".",slug:"/specials",permalink:"/taro-docs/en/docs/2.x/specials",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/specials.md",tags:[],version:"2.x",frontMatter:{title:"\u5e38\u89c1\u95ee\u9898"},sidebar:"version-2.x/docs",previous:{title:"\u5404\u7aef\u5f00\u53d1\u524d\u6ce8\u610f",permalink:"/taro-docs/en/docs/2.x/before-dev-remind"},next:{title:"Taro \u89c4\u8303",permalink:"/taro-docs/en/docs/2.x/spec-for-taro"}},l={},u=[],p={toc:u};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/46"}),"Issue #46"),"\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"redux-saga")," \u7684\u5f15\u5165\u95ee\u9898\u5904\u7406")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728 H5 \u6a21\u5f0f\u4e0b\uff0ctabBar \u53ef\u80fd\u4f1a\u6321\u4f4f\u9875\u9762 fixed \u5143\u7d20\u95ee\u9898\uff1a\u8fd9\u662f\u56e0\u4e3a\u4e0e\u5c0f\u7a0b\u5e8f\u7684 tabBar \u4e0d\u540c\uff0c\u5728 H5 \u4e0b tabBar \u662f\u4e00\u4e2a\u666e\u901a\u7684\u7ec4\u4ef6\uff0c\u5f53\u9875\u9762\u4e2d\u5b58\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"fixed(bottom)")," \u5b9a\u4f4d\u7684\u5143\u7d20\u65f6\uff0c\u5176\u8868\u73b0\u4f1a\u4e0e\u5c0f\u7a0b\u5e8f\u4e2d\u4e0d\u4e00\u81f4\u3002Taro \u63d0\u4f9b\u4e86\u4e00\u4e2a\u9002\u914d\u7684\u65b9\u6cd5\uff1a"))),(0,n.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-css"}),".fixed {\n  bottom: 0;\n  /* \u5728 H5 \u6a21\u5f0f\u4e0b\u5c06\u4f1a\u7f16\u8bd1\u6210 margin-bottom: 50px\uff0c\u5728\u5c0f\u7a0b\u5e8f\u6a21\u5f0f\u4e0b\u5219\u4f1a\u5ffd\u7565 */\n  margin-bottom: taro-tabbar-height;\n}\n")))}f.isMDXComponent=!0}}]);