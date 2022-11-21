"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[5498],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return v}});var o=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(n),v=r,m=d["".concat(u,".").concat(v)]||d[v]||c[v]||i;return n?o.createElement(m,l(l({ref:t},s),{},{components:n})):o.createElement(m,l({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78143:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});n(93106);var o=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Vue DevTools"},a=void 0,u={unversionedId:"vue-devtools",id:"version-3.x/vue-devtools",title:"Vue DevTools",description:"Taro v3.3.2 is supported.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/vue-devtools.md",sourceDirName:".",slug:"/vue-devtools",permalink:"/taro-docs/en/docs/vue-devtools",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/vue-devtools.md",tags:[],version:"3.x",frontMatter:{title:"Vue DevTools"},sidebar:"docs",previous:{title:"Vue3 Composition APIs",permalink:"/taro-docs/en/docs/composition-api"},next:{title:"Router",permalink:"/taro-docs/en/docs/router"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"1. Installation",id:"1-installation",level:3},{value:"2. Configuring the Taro Plugin",id:"2-configuring-the-taro-plugin",level:3},{value:"3. Compile project",id:"3-compile-project",level:3},{value:"Plugin Parameters",id:"plugin-parameters",level:2},{value:"enabled",id:"enabled",level:3},{value:"port",id:"port",level:3},{value:"Caution",id:"caution",level:2},{value:"Detailed Design",id:"detailed-design",level:2}],c={toc:s};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)("wrapper",r({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",r({},{type:"note"}),(0,o.kt)("p",{parentName:"admonition"},"Taro v3.3.2 is supported."),(0,o.kt)("p",{parentName:"admonition"},"Vue2 is not supported at this time.")),(0,o.kt)("p",null,"When developing mini program you can use ",(0,o.kt)("a",r({parentName:"p"},{href:"https://devtools.vuejs.org/guide/installation.html"}),"Vue DevTools"),"\u3002"),(0,o.kt)("h2",r({},{id:"usage"}),"Usage"),(0,o.kt)("h3",r({},{id:"1-installation"}),"1. Installation"),(0,o.kt)("p",null,"Install the Taro plugin in your project ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-vue-devtools"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-sh"}),"$ yarn add --dev @tarojs/plugin-vue-devtools\n")),(0,o.kt)("h3",r({},{id:"2-configuring-the-taro-plugin"}),"2. Configuring the Taro Plugin"),(0,o.kt)("p",null,"Configure the Taro compile configuration to use ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-vue-devtools"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="config/dev.js"',title:'"config/dev.js"'}),"config = {\n  plugins: [\n    '@tarojs/plugin-vue-devtools'\n  ],\n  // ...\n}\n")),(0,o.kt)("h3",r({},{id:"3-compile-project"}),"3. Compile project"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-sh"}),"$ taro build --type weapp --watch\n")),(0,o.kt)("h2",r({},{id:"plugin-parameters"}),"Plugin Parameters"),(0,o.kt)("p",null,"The plugin ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-vue-devtools")," has the following parameters."),(0,o.kt)("h3",r({},{id:"enabled"}),"enabled"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Default value: ",(0,o.kt)("inlineCode",{parentName:"p"},"true")),(0,o.kt)("p",null,"Controls whether to connect to ",(0,o.kt)("inlineCode",{parentName:"p"},"vue-devtools"),", which will inject backend code into the developer's app when turned on."),(0,o.kt)("h3",r({},{id:"port"}),"port"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Default value: ",(0,o.kt)("inlineCode",{parentName:"p"},"8098")),(0,o.kt)("p",null,"The Websocket port used by Vue DevTools."),(0,o.kt)("h2",r({},{id:"caution"}),"Caution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The version of ",(0,o.kt)("inlineCode",{parentName:"li"},"vue-devtools")," is forcibly locked, and the code of the ",(0,o.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-vue-devtools")," plugin needs to be modified to update the version.")),(0,o.kt)("p",null,"In addition, the current support for devtools is not comprehensive enough, some features need to be magic backend for the mini program environment to achieve, welcome to build ~"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support element highlighting.")),(0,o.kt)("h2",r({},{id:"detailed-design"}),"Detailed Design"),(0,o.kt)("p",null,"For detailed design, see ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-rfcs/blob/master/rfcs/0006-vue-devtools.md"}),"RFC"),"\u3002"))}d.isMDXComponent=!0}}]);