"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[45989],{79874:function(t,e,n){n.d(e,{Zo:function(){return i},kt:function(){return s}});var l=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=l.createContext({}),c=function(t){var e=l.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):k(k({},e),t)),n},i=function(t){var e=c(t.components);return l.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),d=c(n),s=a,m=d["".concat(p,".").concat(s)]||d[s]||u[s]||r;return n?l.createElement(m,k(k({ref:e},i),{},{components:n})):l.createElement(m,k({ref:e},i))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,k=new Array(r);k[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,k[1]=o;for(var c=2;c<r;c++)k[c]=n[c];return l.createElement.apply(null,k)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99073:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return k},metadata:function(){return p},toc:function(){return i}});n(93106);var l=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},a.apply(this,arguments)}function r(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const k={title:"UDPSocket",sidebar_label:"UDPSocket"},o=void 0,p={unversionedId:"apis/network/udp/UDPSocket",id:"apis/network/udp/UDPSocket",title:"UDPSocket",description:"An UDP Socket instance. Use IPv4 protocol by default.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/network/udp/UDPSocket.md",sourceDirName:"apis/network/udp",slug:"/apis/network/udp/UDPSocket",permalink:"/taro-docs/en/docs/next/apis/network/udp/UDPSocket",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/network/udp/UDPSocket.md",tags:[],version:"current",frontMatter:{title:"UDPSocket",sidebar_label:"UDPSocket"},sidebar:"API",previous:{title:"createUDPSocket",permalink:"/taro-docs/en/docs/next/apis/network/udp/createUDPSocket"},next:{title:"requestPayment",permalink:"/taro-docs/en/docs/next/apis/payment/requestPayment"}},c={},i=[{value:"Methods",id:"methods",level:2},{value:"close",id:"close",level:3},{value:"API Support",id:"api-support",level:4},{value:"offClose",id:"offclose",level:3},{value:"API Support",id:"api-support-1",level:4},{value:"offError",id:"offerror",level:3},{value:"API Support",id:"api-support-2",level:4},{value:"offListening",id:"offlistening",level:3},{value:"API Support",id:"api-support-3",level:4},{value:"offMessage",id:"offmessage",level:3},{value:"API Support",id:"api-support-4",level:4},{value:"onClose",id:"onclose",level:3},{value:"API Support",id:"api-support-5",level:4},{value:"onError",id:"onerror",level:3},{value:"API Support",id:"api-support-6",level:4},{value:"onListening",id:"onlistening",level:3},{value:"API Support",id:"api-support-7",level:4},{value:"onMessage",id:"onmessage",level:3},{value:"API Support",id:"api-support-8",level:4},{value:"send",id:"send",level:3},{value:"API Support",id:"api-support-9",level:4},{value:"bind",id:"bind",level:3},{value:"API Support",id:"api-support-10",level:4},{value:"Parameters",id:"parameters",level:2},{value:"OffCloseCallback",id:"offclosecallback",level:3},{value:"OffErrorCallback",id:"offerrorcallback",level:3},{value:"OnCloseCallback",id:"onclosecallback",level:3},{value:"OnErrorCallback",id:"onerrorcallback",level:3},{value:"OnMessageCallback",id:"onmessagecallback",level:3},{value:"OnErrorCallbackResult",id:"onerrorcallbackresult",level:3},{value:"OnMessageCallbackResult",id:"onmessagecallbackresult",level:3},{value:"RemoteInfo",id:"remoteinfo",level:3},{value:"SendOption",id:"sendoption",level:3},{value:"API Support",id:"api-support-11",level:2}],u={toc:i};function d(t){var{components:e}=t,n=r(t,["components"]);return(0,l.kt)("wrapper",a({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"An UDP Socket instance. Use IPv4 protocol by default."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/udp/UDPSocket.html"}),"Reference"))),(0,l.kt)("h2",a({},{id:"methods"}),"Methods"),(0,l.kt)("h3",a({},{id:"close"}),"close"),(0,l.kt)("p",null,"Closes (Terminates) a UDP Socket instance. After closing, the UDP Socket instance can no longer send messages. Calling ",(0,l.kt)("inlineCode",{parentName:"p"},"UDPSocket.send")," will trigger an error event, and the callback function for the message event will not be executed. After the ",(0,l.kt)("inlineCode",{parentName:"p"},"UDPSocket")," instance is created, it will be strongly referenced by Native to ensure that it is not collected by GC. After calling ",(0,l.kt)("inlineCode",{parentName:"p"},"UDPSocket.close"),", the strong reference to it will be removed, and the UDPSocket instance will follow the GC rules."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/udp/UDPSocket.close.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,l.kt)("h4",a({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.close"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",a({},{id:"offclose"}),"offClose"),(0,l.kt)("p",null,"Un-listens on the disabling event."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/udp/UDPSocket.offClose.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: OffCloseCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OffCloseCallback")),(0,l.kt)("td",null,"The callback function for the disabling event.")))),(0,l.kt)("h4",a({},{id:"api-support-1"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.offClose"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",a({},{id:"offerror"}),"offError"),(0,l.kt)("p",null,"Un-listens on the error event."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/udp/UDPSocket.offError.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: OffErrorCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OffErrorCallback")),(0,l.kt)("td",null,"The callback function for the error event.")))),(0,l.kt)("h4",a({},{id:"api-support-2"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.offError"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",a({},{id:"offlistening"}),"offListening"),(0,l.kt)("p",null,"Un-listens on the event of starting listening on data packet messages."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/udp/UDPSocket.offListening.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",null,"The callback function for the event of starting listening on data packet messages.")))),(0,l.kt)("h4",a({},{id:"api-support-3"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.offListening"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",a({},{id:"offmessage"}),"offMessage"),(0,l.kt)("p",null,"Un-listens on the event of receiving messages."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/udp/UDPSocket.offMessage.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",null,"The callback function for the event of receiving messages.")))),(0,l.kt)("h4",a({},{id:"api-support-4"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.offMessage"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",a({},{id:"onclose"}),"onClose"),(0,l.kt)("p",null,"Listens on the disabling event."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/udp/UDPSocket.onClose.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: OnCloseCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnCloseCallback")),(0,l.kt)("td",null,"The callback function for the disabling event.")))),(0,l.kt)("h4",a({},{id:"api-support-5"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.onClose"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",a({},{id:"onerror"}),"onError"),(0,l.kt)("p",null,"Listens on the error event."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/udp/UDPSocket.onError.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: OnErrorCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnErrorCallback")),(0,l.kt)("td",null,"The callback function for the error event.")))),(0,l.kt)("h4",a({},{id:"api-support-6"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.onError"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",a({},{id:"onlistening"}),"onListening"),(0,l.kt)("p",null,"Listens on the event of starting listening on data packet messages."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/udp/UDPSocket.onListening.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",null,"The callback function for the event of starting listening on data packet messages.")))),(0,l.kt)("h4",a({},{id:"api-support-7"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.onListening"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",a({},{id:"onmessage"}),"onMessage"),(0,l.kt)("p",null,"Listens on the event of receiving messages."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/udp/UDPSocket.onMessage.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: OnMessageCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnMessageCallback")),(0,l.kt)("td",null,"The callback function for the event of receiving messages.")))),(0,l.kt)("h4",a({},{id:"api-support-8"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.onMessage"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",a({},{id:"send"}),"send"),(0,l.kt)("p",null,"Sends messages to the specified IP and port."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/udp/UDPSocket.send.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: SendOption) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"option"),(0,l.kt)("td",null,(0,l.kt)("code",null,"SendOption"))))),(0,l.kt)("h4",a({},{id:"api-support-9"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.send"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",a({},{id:"bind"}),"bind"),(0,l.kt)("p",null,"Binds an available port randomly assigned by the system."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/udp/UDPSocket.bind.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(port: number) => number\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"port"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Bound port number")))),(0,l.kt)("h4",a({},{id:"api-support-10"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.bind"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,l.kt)("h3",a({},{id:"offclosecallback"}),"OffCloseCallback"),(0,l.kt)("p",null,"The callback function for the disabling event."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"res"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CallbackResult"))))),(0,l.kt)("h3",a({},{id:"offerrorcallback"}),"OffErrorCallback"),(0,l.kt)("p",null,"The callback function for the error event."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"res"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CallbackResult"))))),(0,l.kt)("h3",a({},{id:"onclosecallback"}),"OnCloseCallback"),(0,l.kt)("p",null,"The callback function for the disabling event."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"res"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CallbackResult"))))),(0,l.kt)("h3",a({},{id:"onerrorcallback"}),"OnErrorCallback"),(0,l.kt)("p",null,"The callback function for the error event."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: OnErrorCallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnErrorCallbackResult"))))),(0,l.kt)("h3",a({},{id:"onmessagecallback"}),"OnMessageCallback"),(0,l.kt)("p",null,"The callback function for the event of receiving messages."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(result: OnMessageCallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnMessageCallbackResult"))))),(0,l.kt)("h3",a({},{id:"onerrorcallbackresult"}),"OnErrorCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u9519\u8bef\u4fe1\u606f")))),(0,l.kt)("h3",a({},{id:"onmessagecallbackresult"}),"OnMessageCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"message"),(0,l.kt)("td",null,(0,l.kt)("code",null,"ArrayBuffer")),(0,l.kt)("td",null,"Received messages")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"remoteInfo"),(0,l.kt)("td",null,(0,l.kt)("code",null,"RemoteInfo")),(0,l.kt)("td",null,"Structured information of message sources")))),(0,l.kt)("h3",a({},{id:"remoteinfo"}),"RemoteInfo"),(0,l.kt)("p",null,"remoteInfo is composed as follows"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"address"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"The address of the socket sending the message")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"family"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"The protocol family used, IPv4 or IPv6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"port"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Port number")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"size"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"The message size, in bytes")))),(0,l.kt)("h3",a({},{id:"sendoption"}),"SendOption"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"data"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string | ArrayBuffer")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The data to be sent")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a failed API call")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a successful API call")))),(0,l.kt)("h2",a({},{id:"api-support-11"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.close"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.offClose"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.offError"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.offListening"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.offMessage"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.onClose"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.onError"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.onListening"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.onMessage"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.send"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"UDPSocket.bind"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);