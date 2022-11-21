"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[64549],{79874:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=l.createContext({}),u=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return l.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),p=u(n),k=r,m=p["".concat(s,".").concat(k)]||p[k]||c[k]||o;return n?l.createElement(m,i(i({ref:e},d),{},{components:n})):l.createElement(m,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=p;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:r,i[1]=a;for(var u=2;u<o;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63864:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const i={title:"Taro.setPageInfo(option)",sidebar_label:"setPageInfo"},a=void 0,s={unversionedId:"apis/swan/setPageInfo",id:"apis/swan/setPageInfo",title:"Taro.setPageInfo(option)",description:"Baidu Smart-Program can access Baidu Search and Baidu App. setPageInfo is responsible for setting up all kinds of basic page information for the mini program, including title, keywords, page description, as well as image information and video information.By setting page information for the mini program, the developer can help the mini program to be displayed and distributed more effectively in search engines and information flow.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/swan/setPageInfo.md",sourceDirName:"apis/swan",slug:"/apis/swan/setPageInfo",permalink:"/taro-docs/en/docs/next/apis/swan/setPageInfo",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/swan/setPageInfo.md",tags:[],version:"current",frontMatter:{title:"Taro.setPageInfo(option)",sidebar_label:"setPageInfo"},sidebar:"API",previous:{title:"getOpenUserInfo",permalink:"/taro-docs/en/docs/next/apis/alipay/getOpenUserInfo"}},u={},d=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"Video",id:"video",level:3},{value:"Visit",id:"visit",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],c={toc:d};function p(t){var{components:e}=t,n=o(t,["components"]);return(0,l.kt)("wrapper",r({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Baidu Smart-Program can access Baidu Search and Baidu App. ",(0,l.kt)("inlineCode",{parentName:"p"},"setPageInfo")," is responsible for setting up all kinds of basic page information for the mini program, including title, keywords, page description, as well as image information and video information.By setting page information for the mini program, the developer can help the mini program to be displayed and distributed more effectively in search engines and information flow."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/api/open/swan-setPageInfo/"}),"Reference"))),(0,l.kt)("h2",r({},{id:"type"}),"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => void\n")),(0,l.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,l.kt)("h3",r({},{id:"option"}),"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"title"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Page title")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"keywords"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Page keywords")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"description"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Page description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"releaseDate"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Original release time (year-month-day hour:minute:second with leading zeros)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"articleTitle"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Article (content) title.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"image"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string | string[]")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Image online address for cover display after infomercial placement, maximum 3 images, single image maximum 2M;",(0,l.kt)("br",null),"Recommended size of cover image: height>=210px & width>=375px; ",(0,l.kt)("br",null),"Minimum size: height>=146px & width>=218px.",(0,l.kt)("br",null),"For multiple images, use an array.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"video"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Video")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Video information. Representation of multiple videos in an array")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"visit"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Visit")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Information for visit")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"likes"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The number of likes, if the page is not counted is empty.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"comments"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The number of comments, if the page is not counted is empty.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"collects"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The number of collects, if the page is not counted is empty.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"shares"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The number of shares, if the page is not counted is empty.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"followers"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The number of followers, if the page is not counted is empty.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a failed API call")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: Result) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a successful API call")))),(0,l.kt)("h3",r({},{id:"video"}),"Video"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"url"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Address of the video")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"duration"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Duration of the video (in seconds)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"image"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Cover image of the video")))),(0,l.kt)("h3",r({},{id:"visit"}),"Visit"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"pv"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Page views")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"uv"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Unique views")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"sessionDuration"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Length of stay per user on the page, in seconds.")))),(0,l.kt)("h2",r({},{id:"sample-code"}),"Sample Code"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.setPageInfo({\n  title: 'title',\n  keywords: 'keywords',\n  description: 'description',\n  articleTitle: 'articleTitle',\n  releaseDate: '2019-01-02 12:01:30',\n  image: [\n      'https://c.hiphotos.baidu.com/forum/w%3D480/sign=73c62dda83b1cb133e693d1bed5456da/f33725109313b07e8dee163d02d7912396dd8cfe.jpg',\n      'https://hiphotos.baidu.com/fex/%70%69%63/item/43a7d933c895d143e7b745607ef082025baf07ab.jpg'\n  ],\n  video: [{\n      url: 'https://www.baidu.com/mx/v12.mp4',\n      duration: '100',\n      image: 'https://smartprogram.baidu.com/docs/img/image-scaleToFill.png'\n  }],\n  visit: {\n      pv: '1000',\n      uv: '100',\n      sessionDuration: '130'\n  },\n  likes: '75',\n  comments: '13',\n  collects: '23',\n  shares: '8',\n  followers: '35',\n  success: res => {\n      console.log('setPageInfo success');\n  },\n  fail: err => {\n      console.log('setPageInfo fail', err);\n  }\n})\n")),(0,l.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.setPageInfo"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);