"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[99355],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48192:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={title:"Mini Program Cloud Development Template"},c=void 0,l={unversionedId:"wxcloudbase",id:"wxcloudbase",title:"Mini Program Cloud Development Template",description:"This feature is supported since v1.2.20, only Wechat mini program are supported.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/wxcloudbase.md",sourceDirName:".",slug:"/wxcloudbase",permalink:"/taro-docs/en/docs/next/wxcloudbase",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/wxcloudbase.md",tags:[],version:"current",frontMatter:{title:"Mini Program Cloud Development Template"},sidebar:"docs",previous:{title:"Migrated from native mini program?",permalink:"/taro-docs/en/docs/next/come-from-miniapp"},next:{title:"Mini Program Plugin Development",permalink:"/taro-docs/en/docs/next/miniprogram-plugin"}},p={},s=[{value:"Develop project templates using Mini Program Cloud",id:"develop-project-templates-using-mini-program-cloud",level:2},{value:"Templates Directory",id:"templates-directory",level:2},{value:"Usage Points",id:"usage-points",level:3}],u={toc:s};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This feature is supported since ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.2.20"),", only Wechat mini program are supported.")),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://www.cloudbase.net?ADTAG=taro"}),"Cloud Development\uff08CloudBase\uff09"),", It is a one-stop back-end cloud service built on Serverless architecture, covering functions, database, storage, CDN and other services, free of back-end operation and maintenance, and supporting mini program, Web and APP development.\nThe cloud-based development can invoke all the open capabilities of WeChat without authentication, and can be opened and used in WeChat developer tools."),(0,r.kt)("h2",o({},{id:"develop-project-templates-using-mini-program-cloud"}),"Develop project templates using Mini Program Cloud"),(0,r.kt)("p",null,"In version 1.2.20, a new mini program cloud development project template has been added. To use it, please update the CLI to version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.2.20")," or above. ",(0,r.kt)("a",o({parentName:"p"},{href:"/taro-docs/en/docs/next/GETTING-STARTED#%E6%9B%B4%E6%96%B0"}),"Update")),(0,r.kt)("h2",o({},{id:"templates-directory"}),"Templates Directory"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"\u251c\u2500\u2500 client                                  Mini program Directory\n\u2502\xa0\xa0 \u251c\u2500\u2500 config                              Project compilation configuration \n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 dev.js                          Development environment configuration\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.js                        Default Configuration\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 prod.js                         Production environment configuration\n\u2502\xa0\xa0 \u251c\u2500\u2500 dist                                Compilation results directory\n\u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 src                                 Source directory\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 app.scss                        Project general style\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 app.js                          Project entry file\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 components                      Component directory\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 login                       Login component directory\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 index.weapp.js          login component logic\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 pages                           Page file directory\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 index                       Index page directory\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 index.scss              Index page logic\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 index.js                Index page style\n\u251c\u2500\u2500 cloud                                   Server Directory\n\u2502\xa0\xa0 \u2514\u2500\u2500 functions                           Cloud functions directory\n\u2502\xa0\xa0     \u2514\u2500\u2500 login                           Login cloud function\n\u2502\xa0\xa0         \u251c\u2500\u2500 index.js                    Login function logic\n\u2502\xa0\xa0         \u2514\u2500\u2500 package.json\n\u2514\u2500\u2500 project.config.json                    Mini program configuration  \n")),(0,r.kt)("h3",o({},{id:"usage-points"}),"Usage Points"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When developing, go to the client directory and run the relevant compile preview or package command in this directory"),(0,r.kt)("li",{parentName:"ol"},"To debug the project using WeChat Developer Tools, please use the project ",(0,r.kt)("strong",{parentName:"li"},"whole folder")," as the run directory. Note: Not the dist folder generated in the client")))}d.isMDXComponent=!0}}]);