"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[48172],{79874:function(t,e,l){l.d(e,{Zo:function(){return k},kt:function(){return p}});var n=l(93106);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function u(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=n.createContext({}),c=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):u(u({},e),t)),l},k=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),s=c(l),p=r,m=s["".concat(i,".").concat(p)]||s[p]||d[p]||a;return l?n.createElement(m,u(u({ref:e},k),{},{components:l})):n.createElement(m,u({ref:e},k))}));function p(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,u=new Array(a);u[0]=s;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,u[1]=o;for(var c=2;c<a;c++)u[c]=l[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},30684:function(t,e,l){l.r(e),l.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return k}});l(93106);var n=l(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n])}return t},r.apply(this,arguments)}function a(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}const u={title:"Taro.chooseImage(option)",sidebar_label:"chooseImage"},o=void 0,i={unversionedId:"apis/media/image/chooseImage",id:"version-2.x/apis/media/image/chooseImage",title:"Taro.chooseImage(option)",description:"\u4ece\u672c\u5730\u76f8\u518c\u9009\u62e9\u56fe\u7247\u6216\u4f7f\u7528\u76f8\u673a\u62cd\u7167\u3002",source:"@site/versioned_docs/version-2.x/apis/media/image/chooseImage.md",sourceDirName:"apis/media/image",slug:"/apis/media/image/chooseImage",permalink:"/taro-docs/en/docs/2.x/apis/media/image/chooseImage",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/media/image/chooseImage.md",tags:[],version:"2.x",frontMatter:{title:"Taro.chooseImage(option)",sidebar_label:"chooseImage"},sidebar:"version-2.x/API",previous:{title:"chooseMessageFile",permalink:"/taro-docs/en/docs/2.x/apis/media/image/chooseMessageFile"},next:{title:"saveVideoToPhotosAlbum",permalink:"/taro-docs/en/docs/2.x/apis/media/video/saveVideoToPhotosAlbum"}},c={},k=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"sizeType",id:"sizetype",level:3},{value:"sourceType",id:"sourcetype",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"ImageFile",id:"imagefile",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",level:2}],d={toc:k};function s(t){var{components:e}=t,l=a(t,["components"]);return(0,n.kt)("wrapper",r({},d,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4ece\u672c\u5730\u76f8\u518c\u9009\u62e9\u56fe\u7247\u6216\u4f7f\u7528\u76f8\u673a\u62cd\u7167\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,n.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",r({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"count"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u6700\u591a\u53ef\u4ee5\u9009\u62e9\u7684\u56fe\u7247\u5f20\u6570")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"sizeType"),(0,n.kt)("td",null,(0,n.kt)("code",null,'("original" | "compressed")[]')),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u6240\u9009\u7684\u56fe\u7247\u7684\u5c3a\u5bf8")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"sourceType"),(0,n.kt)("td",null,(0,n.kt)("code",null,'("album" | "camera" | "user" | "environment")[]')),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u9009\u62e9\u56fe\u7247\u7684\u6765\u6e90")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",r({},{id:"sizetype"}),"sizeType"),(0,n.kt)("p",null,"\u56fe\u7247\u7684\u5c3a\u5bf8"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"original"),(0,n.kt)("td",null,"\u539f\u56fe")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"compressed"),(0,n.kt)("td",null,"compressed")))),(0,n.kt)("h3",r({},{id:"sourcetype"}),"sourceType"),(0,n.kt)("p",null,"\u56fe\u7247\u7684\u6765\u6e90"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"album"),(0,n.kt)("td",null,"\u4ece\u76f8\u518c\u9009\u56fe")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"camera"),(0,n.kt)("td",null,"\u4f7f\u7528\u76f8\u673a")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"user"),(0,n.kt)("td",null,"\u4f7f\u7528\u524d\u7f6e\u6444\u50cf\u5934(\u4ec5H5\u7eaf\u6d4f\u89c8\u5668\u4f7f\u7528)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"environment"),(0,n.kt)("td",null,"\u4f7f\u7528\u540e\u7f6e\u6444\u50cf\u5934(\u4ec5H5\u7eaf\u6d4f\u89c8\u5668)")))),(0,n.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"tempFilePaths"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string[]")),(0,n.kt)("td",null,"\u56fe\u7247\u7684\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u5217\u8868")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"tempFiles"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ImageFile[]")),(0,n.kt)("td",null,"\u56fe\u7247\u7684\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5217\u8868")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,n.kt)("h3",r({},{id:"imagefile"}),"ImageFile"),(0,n.kt)("p",null,"\u56fe\u7247\u7684\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"path"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,n.kt)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u8def\u5f84")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"size"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,n.kt)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5927\u5c0f\uff0c\u5355\u4f4d B")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"type"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u6587\u4ef6\u7684 MIME \u7c7b\u578b",(0,n.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"originalFileObj"),(0,n.kt)("td",null,(0,n.kt)("code",null,"File")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u539f\u59cb\u7684\u6d4f\u89c8\u5668 File \u5bf9\u8c61",(0,n.kt)("br",null),"API \u652f\u6301\u5ea6: h5")))),(0,n.kt)("h4",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"ImageFile.type"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"ImageFile.originalFileObj"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseImage({\n  count: 1, // \u9ed8\u8ba49\n  sizeType: ['original', 'compressed'], // \u53ef\u4ee5\u6307\u5b9a\u662f\u539f\u56fe\u8fd8\u662f\u538b\u7f29\u56fe\uff0c\u9ed8\u8ba4\u4e8c\u8005\u90fd\u6709\n  sourceType: ['album', 'camera'], // \u53ef\u4ee5\u6307\u5b9a\u6765\u6e90\u662f\u76f8\u518c\u8fd8\u662f\u76f8\u673a\uff0c\u9ed8\u8ba4\u4e8c\u8005\u90fd\u6709\uff0c\u5728H5\u6d4f\u89c8\u5668\u7aef\u652f\u6301\u4f7f\u7528 `user` \u548c `environment`\u5206\u522b\u6307\u5b9a\u4e3a\u524d\u540e\u6444\u50cf\u5934\n  success: function (res) {\n    // \u8fd4\u56de\u9009\u5b9a\u7167\u7247\u7684\u672c\u5730\u6587\u4ef6\u8def\u5f84\u5217\u8868\uff0ctempFilePath\u53ef\u4ee5\u4f5c\u4e3aimg\u6807\u7b7e\u7684src\u5c5e\u6027\u663e\u793a\u56fe\u7247\n    var tempFilePaths = res.tempFilePaths\n  }\n})\n")),(0,n.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6-1"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.chooseImage"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);