"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[41721],{79874:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40472:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={title:"Vue3 Pinia"},p=void 0,u={unversionedId:"pinia",id:"pinia",title:"Vue3 Pinia",description:"Taro Vue3 \u652f\u6301\u4f7f\u7528 Pinia \u8fdb\u884c\u72b6\u6001\u7ba1\u7406\u3002",source:"@site/docs/pinia.md",sourceDirName:".",slug:"/pinia",permalink:"/taro-docs/en/docs/next/pinia",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/pinia.md",tags:[],version:"current",frontMatter:{title:"Vue3 Pinia"},sidebar:"docs",previous:{title:"Vue2 Vuex",permalink:"/taro-docs/en/docs/next/vuex"},next:{title:"Use CSS Modules",permalink:"/taro-docs/en/docs/next/css-modules"}},c={},l=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u521b\u5efa Pinia \u5b9e\u4f8b",id:"\u521b\u5efa-pinia-\u5b9e\u4f8b",level:3},{value:"\u521b\u5efa <code>store</code>",id:"\u521b\u5efa-store",level:3},{value:"\u4f7f\u7528 store \u5b9a\u4e49\u7684\u6570\u636e\u4e0e\u65b9\u6cd5",id:"\u4f7f\u7528-store-\u5b9a\u4e49\u7684\u6570\u636e\u4e0e\u65b9\u6cd5",level:3}],s={toc:l};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Taro Vue3 \u652f\u6301\u4f7f\u7528 ",(0,r.kt)("a",o({parentName:"p"},{href:"https://pinia.vuejs.org/"}),"Pinia")," \u8fdb\u884c\u72b6\u6001\u7ba1\u7406\u3002"),(0,r.kt)("h2",o({},{id:"\u5b89\u88c5"}),"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"$ yarn add pinia\n# \u6216\u8005\u4f7f\u7528 npm\n$ npm install pinia\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"mailto:pinia@2.0.22"}),"pinia@2.0.22")," \u5df2\u7ecf\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\uff08",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/vuejs/pinia/pull/967"}),"#967"),"\uff09, \u6240\u4ee5\u4f60\u53ef\u80fd\u4e0d\u518d\u9700\u8981\u8fd9\u4e2a\u63d2\u4ef6")),(0,r.kt)("h2",o({},{id:"\u4f8b\u5b50"}),"\u4f8b\u5b50"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"taro init")," \u547d\u4ee4\u65f6\u9009\u62e9 Vue3 -> pinia \u5373\u53ef\u521b\u5efa vue3-pinia \u6a21\u677f\u9879\u76ee"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/NervJS/taro-todos-pinia"}),"Todo App"))),(0,r.kt)("h2",o({},{id:"\u4f7f\u7528"}),"\u4f7f\u7528"),(0,r.kt)("h3",o({},{id:"\u521b\u5efa-pinia-\u5b9e\u4f8b"}),"\u521b\u5efa Pinia \u5b9e\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="src/app.js"',title:'"src/app.js"'}),"import { createApp } from 'vue'\nimport { createPinia } from 'pinia'\n\nconst App = createApp({})\n\nApp.use(createPinia())\n\nexport default App\n")),(0,r.kt)("h3",o({},{id:"\u521b\u5efa-store"}),"\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"h3"},"store")),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u65b0\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"src/store/index.js")," \u6587\u4ef6\u7528\u6765\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="src/store/index.js"',title:'"src/store/index.js"'}),"import { defineStore } from 'pinia'\n\nexport const useCounterStore = defineStore('counter', {\n  state: () => {\n    return { count: 0 }\n  },\n  actions: {\n    increment() {\n      this.count++\n    }\n  }\n})\n")),(0,r.kt)("h3",o({},{id:"\u4f7f\u7528-store-\u5b9a\u4e49\u7684\u6570\u636e\u4e0e\u65b9\u6cd5"}),"\u4f7f\u7528 store \u5b9a\u4e49\u7684\u6570\u636e\u4e0e\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),"<template>\n  <view>\n    <text>{{ counter.count }}</text>\n    <view @tap=\"onAdd\">ADD</view>\n  </view>\n</template>\n\n<script>\nimport { useCounterStore } from '../stores'\n\nexport default {\n  setup() {\n    const counter = useCounterStore()\n\n    const onAdd = () => {\n      counter.count++\n    }\n\n    return {\n      counter,\n      onAdd\n    }\n  }\n}\n<\/script>\n")))}d.isMDXComponent=!0}}]);