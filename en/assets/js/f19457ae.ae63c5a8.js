"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[1865],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26116:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(93106),r=n(4706),l="tabItem_TXiJ";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s({children:e,hidden:t,className:n}){return a.createElement("div",o({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},76038:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(93106),r=n(4706),l=n(85959),o=n(52546),s=n(25612),i=n(74956),c="tabList_gMY0",u="tabItem_sIv8";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:h,className:f}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=d?d:v.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,o.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var g;const y=null===m?m:null!==(g=null!=m?m:null===(t=v.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==g?g:v[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:w}=(0,s.U)(),[N,x]=(0,a.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,i.o5)();if(null!=h){const e=T[h];null!=e&&e!==N&&b.some((t=>t.value===e))&&x(e)}const L=e=>{const t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==N&&(E(t),x(a),null!=h&&w(h,String(a)))},C=e=>{let t=null;switch(e.key){case"Enter":L(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;var n;t=null!==(n=O[a])&&void 0!==n?n:O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;var a;t=null!==(a=O[n])&&void 0!==a?a:O[O.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},f)},b.map((({value:e,label:t,attributes:n})=>a.createElement("li",p({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>O.push(e),onKeyDown:C,onClick:L},n,{className:(0,r.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":N===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,p({key:String(t)},e))}},28922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});n(93106);var a=n(79874),r=n(76038),l=n(26116);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Rendering HTML"},c=void 0,u={unversionedId:"html",id:"version-3.x/html",title:"Rendering HTML",description:"Please note: All the contents of this section will only work on the mini program side.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/html.mdx",sourceDirName:".",slug:"/html",permalink:"/taro-docs/en/docs/html",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/html.mdx",tags:[],version:"3.x",frontMatter:{title:"Rendering HTML"},sidebar:"docs",previous:{title:"Compile configuration Details",permalink:"/taro-docs/en/docs/config-detail"},next:{title:"Using HTML Tags",permalink:"/taro-docs/en/docs/use-h5"}},p={},m=[{value:"Custom HTML styles",id:"custom-html-styles",level:2},{value:"\bHTML Escape",id:"html-escape",level:2},{value:"Binding events",id:"binding-events",level:2},{value:"Advanced Options",id:"advanced-options",level:2},{value:"skipElements",id:"skipelements",level:3},{value:"voidElements",id:"voidelements",level:3},{value:"closingElements",id:"closingelements",level:3},{value:"transformText",id:"transformtext",level:3},{value:"transformElement",id:"transformelement",level:3},{value:"Example:",id:"example",level:3}],d={toc:m};function h(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please note: All the contents of this section will only work on the mini program side.")),(0,a.kt)("p",null,"Taro can render HTML directly via ",(0,a.kt)("inlineCode",{parentName:"p"},"Element#innerHTML")," or Vue's ",(0,a.kt)("inlineCode",{parentName:"p"},"v-html")," or React/Nerv's ",(0,a.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML"),":"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),'function helloWorld() {\n  const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n\n  return <View dangerouslySetInnerHTML={{ __html: html }}></View>\n}\n'))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <view v-html="html"></view>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      html: `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n    }\n  }\n}\n<\/script>\n')))),(0,a.kt)("h2",o({},{id:"custom-html-styles"}),"Custom HTML styles"),(0,a.kt)("p",null,"Setting HTML directly will not make the HTML tags take on the browser's default style, Taro provides two built-in styles that we can introduce directly to take effect."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/taro/html.css"),": ",(0,a.kt)("a",o({parentName:"li"},{href:"https://www.w3.org/TR/CSS2/sample.html"}),"W3C HTML4 built-in styles\n"),", Only HTML4 tag style, smaller size, high compatibility, can adapt to most cases."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/taro/html5.css"),": ",(0,a.kt)("a",o({parentName:"li"},{href:"https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css"}),"Chrome(Blink) HTML5 built-in styles"),", Rich built-in styles, including most HTML5 tags, large size, not necessarily support all mini program containers.")),(0,a.kt)("p",null,"In order for the built-in tag styles to work, we also need to set the CSS class of the HTML container to ",(0,a.kt)("inlineCode",{parentName:"p"},".taro_html"),":"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),'import \'@tarojs/taro/html.css\'\n\nfunction helloWorld() {\n  const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n\n  return <View className="taro_html" dangerouslySetInnerHTML={{ __html: html }}></View>\n}\n'))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <view v-html="html" class="taro_html"></view>\n</template>\n\n<script>\nimport \'@tarojs/taro/html.css\'\n\nexport default {\n  data () {\n    return {\n      html: `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n    }\n  }\n}\n<\/script>\n')))),(0,a.kt)("p",null,"Likewise, we can write our own CSS styles, and the class names of the HTML tags that Taro renders are consistent with the HTML tag names, for example, if we have a container CSS class named ",(0,a.kt)("inlineCode",{parentName:"p"},"my_css")," and we want to set the style of the ",(0,a.kt)("inlineCode",{parentName:"p"},"h1")," tag, then we do this"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-css"}),".my_css .h1 {\n  font-size: 30px;\n}\n")),(0,a.kt)("p",null,"You may prefer the default style of other browsers."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css"}),"Firefox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://web.archive.org/web/20170122223926/https://www.iecss.com/"}),"Internet Explorer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css"}),"Safari/Chrome(Webkit)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://web.archive.org/web/20161031005401/https://www.iecss.com/opera-10.51.css"}),"Opera")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://www.w3.org/TR/html5/rendering.html"}),"W3C HTML5 Spec")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://github.com/necolas/normalize.css/blob/master/normalize.css"}),"normalize.css"))),(0,a.kt)("h2",o({},{id:"html-escape"}),"\bHTML Escape"),(0,a.kt)("p",null,"By default, Taro's HTML interface only accepts escaped HTML strings, and we recommend returning the escaped HTML directly on the server side."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://www.npmjs.com/package/he"}),"he"),": Larger size, but more relaxed open source protocol"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://www.npmjs.com/package/entities"}),"entities"),": Smaller size, but more stringent open source protocol")),(0,a.kt)("p",null,"You may need ",(0,a.kt)("inlineCode",{parentName:"p"},"transformText")," from ","[Advanced Options]","(#Advanced Options) in conjunction with HTML escaping for string rendering."),(0,a.kt)("h2",o({},{id:"binding-events"}),"Binding events"),(0,a.kt)("p",null,"For scoping and security reasons, Taro removes all events and JavaScript from the HTML string. But we still have a way to bind events to HTML:"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import '@tarojs/taro/html.css'\n\nfunction helloWorld() {\n  const html = `<h1 id=\"test\">Wallace is way taller than other reporters.</h1>`\n\n  useEffect(() => {\n    const el = document.getElementById('test')\n    function testOnTap (event) {\n      // do something\n      ...\n    }\n    el.addEventListener('tap', testOnTap)\n\n    return () => {\n      el.removeEventListener('tap', testOnTap)\n    }\n  }, [])\n\n  return <View className=\"taro_html\" dangerouslySetInnerHTML={{ __html: html }}></View>\n}\n"))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html"}),"<template>\n  <view v-html=\"html\" class=\"taro_html\"></view>\n</template>\n\n<script>\nimport '@tarojs/taro/html.css'\n\nexport default {\n  data () {\n    return {\n      html: `<h1 id=\"test\">Wallace is way taller than other reporters.</h1>`\n    }\n  },\n  mounted () {\n    const el = document.getElementById('test')\n    el.addEventListener('tap', this.testOnTap)\n  },\n  testOnTap (event) {\n    // do something\n    ...\n  },\n  beforeDestroy () {\n    const el = document.getElementById('test')\n    el.removeEventListener('tap', this.testOnTap)\n  }\n}\n<\/script>\n")))),(0,a.kt)("p",null,"You may need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"transformElement")," in ","[Advanced Options]","(#Advanced Options) if the element to be dynamically bound to the event does not have an ID."),(0,a.kt)("h2",o({},{id:"advanced-options"}),"Advanced Options"),(0,a.kt)("p",null,"If the built-in functionality does not meet the needs or the rendering results are not as expected, Taro also provides advanced options for HTML rendering, which can be accessed via ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.options.html")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"import Taro from '@tarojs/taro'\n\n// Do not parse the contents of the souce tag\nTaro.options.html.skipElements.add('source')\n")),(0,a.kt)("h3",o({},{id:"skipelements"}),"skipElements"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,a.kt)("p",null,"Default Value: ",(0,a.kt)("inlineCode",{parentName:"p"},"new Set(['style', 'script'])")),(0,a.kt)("p",null,"HTML tags contained in the HashSet will not be parsed."),(0,a.kt)("h3",o({},{id:"voidelements"}),"voidElements"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,a.kt)("p",null,"Default Value: ",(0,a.kt)("inlineCode",{parentName:"p"},"new Set([\n  '!doctype', 'area', 'base', 'br', 'col', 'command',\n  'embed', 'hr', 'img', 'input', 'keygen', 'link',\n  'meta', 'param', 'source', 'track', 'wbr'\n])")),(0,a.kt)("p",null,"HTML tags contained in a HashSet do not require closure tags, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"<img />"),"."),(0,a.kt)("h3",o({},{id:"closingelements"}),"closingElements"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,a.kt)("p",null,"Default Value: ",(0,a.kt)("inlineCode",{parentName:"p"},"new Set([\n  'html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option',\n  'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'\n])")),(0,a.kt)("p",null,"HTML tags contained in a HashSet can be automatically closed and cannot be nested."),(0,a.kt)("h3",o({},{id:"transformtext"}),"transformText"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"(taroText: TaroText, text: Text) => TaroText")),(0,a.kt)("p",null,"Default Value: ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"The first argument to this function takes the value of ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/text.ts#L5"}),"TaroText"),", which is processed by Taro by default, the second argument is ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/html/parser.ts#L33-L36"}),"Text"),", which is parsed by the HTML parser, and the final ",(0,a.kt)("inlineCode",{parentName:"p"},"TaroText")," object returned is involved in the rendering of the string in HTML."),(0,a.kt)("h3",o({},{id:"transformelement"}),"transformElement"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"(taroElement: TaroElement, element: Element) => TaroElement")),(0,a.kt)("p",null,"Default Value: ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"The first parameter of this function takes the value of ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/element.ts#L15"}),"TaroElement")," processed by Taro by default, the second parameter is the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/html/parser.ts#L38-L43"}),"Element")," parsed by the HTML parser, and the last returned ",(0,a.kt)("inlineCode",{parentName:"p"},"TaroElement")," object participates in the HTML element rendering."),(0,a.kt)("h3",o({},{id:"example"}),"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"// Adding the aotu class to all img tags\nTaro.options.html.transformElement = (el) => {\n  if (el.nodeName === 'image') {\n    el.setAttribute('class', 'aotu')\n  }\n  return el\n}\n")))}h.isMDXComponent=!0}}]);