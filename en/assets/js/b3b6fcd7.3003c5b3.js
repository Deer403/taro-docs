"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[47320],{79874:function(e,t,l){l.d(t,{Zo:function(){return i},kt:function(){return s}});var n=l(93106);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function d(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},i=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=u(l),s=r,h=p["".concat(c,".").concat(s)]||p[s]||k[s]||a;return l?n.createElement(h,o(o({ref:t},i),{},{components:l})):n.createElement(h,o({ref:t},i))}));function s(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=p;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var u=2;u<a;u++)o[u]=l[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},89910:function(e,t,l){l.r(t),l.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return i}});l(93106);var n=l(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}const o={title:"NodesRef",sidebar_label:"NodesRef"},d=void 0,c={unversionedId:"apis/wxml/NodesRef",id:"apis/wxml/NodesRef",title:"NodesRef",description:"The object for obtaining the WXML node information.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/wxml/NodesRef.md",sourceDirName:"apis/wxml",slug:"/apis/wxml/NodesRef",permalink:"/taro-docs/en/docs/next/apis/wxml/NodesRef",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/wxml/NodesRef.md",tags:[],version:"current",frontMatter:{title:"NodesRef",sidebar_label:"NodesRef"},sidebar:"API",previous:{title:"MediaQueryObserver",permalink:"/taro-docs/en/docs/next/apis/wxml/MediaQueryObserver"},next:{title:"SelectorQuery",permalink:"/taro-docs/en/docs/next/apis/wxml/SelectorQuery"}},u={},i=[{value:"Methods",id:"methods",level:2},{value:"boundingClientRect",id:"boundingclientrect",level:3},{value:"Sample Code",id:"sample-code",level:4},{value:"Example 1",id:"example-1",level:5},{value:"Example 2",id:"example-2",level:5},{value:"API Support",id:"api-support",level:4},{value:"context",id:"context",level:3},{value:"Sample Code",id:"sample-code-1",level:4},{value:"API Support",id:"api-support-1",level:4},{value:"fields",id:"fields",level:3},{value:"Sample Code",id:"sample-code-2",level:4},{value:"API Support",id:"api-support-2",level:4},{value:"node",id:"node",level:3},{value:"Sample Code",id:"sample-code-3",level:4},{value:"API Support",id:"api-support-3",level:4},{value:"scrollOffset",id:"scrolloffset",level:3},{value:"Sample Code",id:"sample-code-4",level:4},{value:"API Support",id:"api-support-4",level:4},{value:"Parameters",id:"parameters",level:2},{value:"BoundingClientRectCallback",id:"boundingclientrectcallback",level:3},{value:"BoundingClientRectCallbackResult",id:"boundingclientrectcallbackresult",level:3},{value:"ContextCallback",id:"contextcallback",level:3},{value:"ContextCallbackResult",id:"contextcallbackresult",level:3},{value:"Fields",id:"fields-1",level:3},{value:"FieldsCallback",id:"fieldscallback",level:3},{value:"NodeCallback",id:"nodecallback",level:3},{value:"NodeCallbackResult",id:"nodecallbackresult",level:3},{value:"ScrollOffsetCallback",id:"scrolloffsetcallback",level:3},{value:"ScrollOffsetCallbackResult",id:"scrolloffsetcallbackresult",level:3},{value:"API Support",id:"api-support-5",level:2}],k={toc:i};function p(e){var{components:t}=e,l=a(e,["components"]);return(0,n.kt)("wrapper",r({},k,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The object for obtaining the ",(0,n.kt)("inlineCode",{parentName:"p"},"WXML")," node information."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/NodesRef.html"}),"Reference"))),(0,n.kt)("h2",r({},{id:"methods"}),"Methods"),(0,n.kt)("h3",r({},{id:"boundingclientrect"}),"boundingClientRect"),(0,n.kt)("p",null,"Adds the request for querying the node layout position (in pixels) relative to the display area. This feature is similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"getBoundingClientRect")," of DOM. It returns ",(0,n.kt)("inlineCode",{parentName:"p"},"SelectorQuery")," of ",(0,n.kt)("inlineCode",{parentName:"p"},"NodesRef"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/NodesRef.boundingClientRect.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback?: BoundingClientRectCallback) => SelectorQuery\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"BoundingClientRectCallback")),(0,n.kt)("td",null,"The callback function. After the ",(0,n.kt)("code",null,"SelectorQuery.exec")," method is executed, the node information will be returned in",(0,n.kt)("code",null,"callback"),".")))),(0,n.kt)("h4",r({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("h5",r({},{id:"example-1"}),"Example 1"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.createSelectorQuery().select('#the-id').boundingClientRect(function(rect){\n  rect.id      // The ID of the node\n  rect.dataset // The dataset of the node\n  rect.left    // The left boundary coordinate of the node\n  rect.right   // The right boundary coordinate of the node\n  rect.top     // The upper boundary coordinate of the node\n  rect.bottom  // The lower boundary coordinate of the node\n  rect.width   // The width of the node\n  rect.height  // The height of the node\n}).exec()\n")),(0,n.kt)("h5",r({},{id:"example-2"}),"Example 2"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.createSelectorQuery().selectAll('.a-class').boundingClientRect(function(rects){\n  rects.forEach(function(rect){\n    rect.id      // The ID of the node\n    rect.dataset // The dataset of the node\n    rect.left    // The left boundary coordinate of the node\n    rect.right   // The right boundary coordinate of the node\n    rect.top     // The upper boundary coordinate of the node\n    rect.bottom  // The lower boundary coordinate of the node\n    rect.width   // The width of the node\n    rect.height  // The height of the node\n  })\n}).exec()\n")),(0,n.kt)("h4",r({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"NodesRef.boundingClientRect"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",r({},{id:"context"}),"context"),(0,n.kt)("p",null,"Adds the request for querying the node Context object. ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/video/VideoContext.html"}),"VideoContext"),", ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/canvas/CanvasContext.html"}),"CanvasContext"),", ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/live/LivePlayerContext.html"}),"LivePlayerContext"),", and ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/map/MapContext.html"}),"MapContext")," can be obtained."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/NodesRef.context.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback?: ContextCallback) => SelectorQuery\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ContextCallback")),(0,n.kt)("td",null,"The callback function. After the ",(0,n.kt)("code",null,"SelectorQuery.exec")," method is executed, the node information will be returned.")))),(0,n.kt)("h4",r({},{id:"sample-code-1"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.createSelectorQuery().select('.the-video-class').context(function (res) {\n  console.log(res.context) // The Context object of the node. If the selected node is a <video> component, the VideoContext object is returned.\n}).exec()\n")),(0,n.kt)("h4",r({},{id:"api-support-1"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"NodesRef.context"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",r({},{id:"fields"}),"fields"),(0,n.kt)("p",null,"Obtains the information about the node. The fields to be obtained are specified in fields. The ",(0,n.kt)("inlineCode",{parentName:"p"},"selectorQuery")," of ",(0,n.kt)("inlineCode",{parentName:"p"},"nodesRef")," is returned."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),'\ncomputedStyle has a higher priority than size. When width/height is specified and "size: true" is passed in computedStyle, the width/height obtained by computedStyle is returned first.'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/NodesRef.fields.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(fields: Fields, callback?: FieldsCallback) => SelectorQuery\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"fields"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Fields")),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"FieldsCallback")),(0,n.kt)("td",null,"Callback function")))),(0,n.kt)("h4",r({},{id:"sample-code-2"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.createSelectorQuery().select('#the-id').fields({\n  dataset: true,\n  size: true,\n  scrollOffset: true,\n  properties: ['scrollX', 'scrollY'],\n  computedStyle: ['margin', 'backgroundColor'],\n  context: true,\n}, function (res) {\n  res.dataset    // The dataset of the node\n  res.width      // The width of the node\n  res.height     // The height of the node\n  res.scrollLeft // The horizontal scroll position of the node\n  res.scrollTop  // The vertical scroll position of the node\n  res.scrollX    // The current value of the node's scroll-x property\n  res.scrollY    // The current value of the node's scroll-y property\n  // Return the specified style name\n  res.margin\n  res.backgroundColor\n  res.context    // The Context object of the node\n}).exec()\n")),(0,n.kt)("h4",r({},{id:"api-support-2"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"NodesRef.fields"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",r({},{id:"node"}),"node"),(0,n.kt)("p",null,"Gets the Node node instance. Currently ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"}),"Canvas")," is supported for fetching."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/NodesRef.node.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback?: NodeCallback) => SelectorQuery\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"NodeCallback")),(0,n.kt)("td",null,"The callback function. After the ",(0,n.kt)("code",null,"SelectorQuery.exec")," method is executed, the node information will be returned in callback.")))),(0,n.kt)("h4",r({},{id:"sample-code-3"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.createSelectorQuery().select('.canvas').node(function(res){\n  console.log(res.node)\n}).exec()\n")),(0,n.kt)("h4",r({},{id:"api-support-3"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"NodesRef.node"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h3",r({},{id:"scrolloffset"}),"scrollOffset"),(0,n.kt)("p",null,"Adds the request for querying the node scroll position (in pixels). The node must be ",(0,n.kt)("inlineCode",{parentName:"p"},"scroll-view")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"viewport"),". It returns ",(0,n.kt)("inlineCode",{parentName:"p"},"SelectorQuery")," of ",(0,n.kt)("inlineCode",{parentName:"p"},"NodesRef"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/NodesRef.scrollOffset.html"}),"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback?: ScrollOffsetCallback) => SelectorQuery\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ScrollOffsetCallback")),(0,n.kt)("td",null,"The callback function. After the ",(0,n.kt)("code",null,"SelectorQuery.exec")," method is executed, the node information will be returned in callback.")))),(0,n.kt)("h4",r({},{id:"sample-code-4"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.createSelectorQuery().selectViewport().scrollOffset(function(res){\n  res.id      // The id of the node\n  res.dataset // The dataset of the node\n  res.scrollLeft // The horizontal scroll position of the node\n  res.scrollTop  // The vertical scroll position of the node\n}).exec()\n")),(0,n.kt)("h4",r({},{id:"api-support-4"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"NodesRef.scrollOffset"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",r({},{id:"boundingclientrectcallback"}),"BoundingClientRectCallback"),(0,n.kt)("p",null,"The callback function. After the ",(0,n.kt)("inlineCode",{parentName:"p"},"SelectorQuery.exec")," method is executed, the node information will be returned in callback."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: BoundingClientRectCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"BoundingClientRectCallbackResult"))))),(0,n.kt)("h3",r({},{id:"boundingclientrectcallbackresult"}),"BoundingClientRectCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"dataset"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Record<string, any>")),(0,n.kt)("td",null,"The dataset of the node")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"id"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The ID of the node")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"bottom"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The lower boundary coordinate of the node")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"left"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The left boundary coordinate of the node")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"right"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The right boundary coordinate of the node")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"top"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The upper boundary coordinate of the node")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"height"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The height of the node")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"width"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The width of the node")))),(0,n.kt)("h3",r({},{id:"contextcallback"}),"ContextCallback"),(0,n.kt)("p",null,"The callback function. After the ",(0,n.kt)("inlineCode",{parentName:"p"},"SelectorQuery.exec")," method is executed, the node information will be returned."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: ContextCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ContextCallbackResult"))))),(0,n.kt)("h3",r({},{id:"contextcallbackresult"}),"ContextCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"context"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Record<string, any>")),(0,n.kt)("td",null,"The Context object of the node")))),(0,n.kt)("h3",r({},{id:"fields-1"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"computedStyle"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string[]")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Specifies the style name list and returns the current value of the node style name")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"context"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Indicates whether to return the Context object of the node")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"dataset"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Indicates whether to return the node dataset")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"id"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Indicates whether to return the node ID")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"mark"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Specifies whether to return the node mark")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"node"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Specifies whether to return the Node instance corresponding to the node.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"properties"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string[]")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,'Specifies the property name list and returns the current property value of the node property name (only the general property values listed in the component document can be obtained, and "id class style" and the property values bound to events cannot be obtained)')),(0,n.kt)("tr",null,(0,n.kt)("td",null,"rect"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Indicates whether to return the node layout position (",(0,n.kt)("code",null,"left")," ",(0,n.kt)("code",null,"right")," ",(0,n.kt)("code",null,"top")," ",(0,n.kt)("code",null,"bottom"),")")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"scrollOffset"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Indicates whether to return the node's ",(0,n.kt)("code",null,"scrollLeft")," and ",(0,n.kt)("code",null,"scrollTop"),". The node must be ",(0,n.kt)("code",null,"scroll-view")," or ",(0,n.kt)("code",null,"viewport"),".")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"size"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Indicates whether to return the node size (",(0,n.kt)("code",null,"width")," and ",(0,n.kt)("code",null,"height"),")")))),(0,n.kt)("h3",r({},{id:"fieldscallback"}),"FieldsCallback"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(res: Record<string, any>) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"res"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Record<string, any>")),(0,n.kt)("td",null,"Information about nodes")))),(0,n.kt)("h3",r({},{id:"nodecallback"}),"NodeCallback"),(0,n.kt)("p",null,"The callback function. After the ",(0,n.kt)("inlineCode",{parentName:"p"},"SelectorQuery.exec")," method is executed, the node information will be returned."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: NodeCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"NodeCallbackResult"))))),(0,n.kt)("h3",r({},{id:"nodecallbackresult"}),"NodeCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"node"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Record<string, any>")),(0,n.kt)("td",null,"Node instances corresponding to nodes")))),(0,n.kt)("h3",r({},{id:"scrolloffsetcallback"}),"ScrollOffsetCallback"),(0,n.kt)("p",null,"The callback function. After the ",(0,n.kt)("inlineCode",{parentName:"p"},"SelectorQuery.exec")," method is executed, the node information will be returned in callback."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: ScrollOffsetCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ScrollOffsetCallbackResult"))))),(0,n.kt)("h3",r({},{id:"scrolloffsetcallbackresult"}),"ScrollOffsetCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"dataset"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Record<string, any>")),(0,n.kt)("td",null,"The dataset of the node")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"id"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The ID of the node")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"scrollLeft"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The horizontal scroll position of the node")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"scrollTop"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The vertical scroll position of the node")))),(0,n.kt)("h2",r({},{id:"api-support-5"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"NodesRef.boundingClientRect"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"NodesRef.context"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"NodesRef.fields"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"NodesRef.node"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"NodesRef.scrollOffset"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);