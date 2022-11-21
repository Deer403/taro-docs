"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[50196],{79874:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(93106);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26116:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(93106),a=t(4706),o="tabItem_TXiJ";function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function i({children:e,hidden:n,className:t}){return r.createElement("div",l({role:"tabpanel",className:(0,a.Z)(o,t)},{hidden:n}),e)}},76038:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(93106),a=t(4706),o=t(85959),l=t(52546),i=t(25612),s=t(74956),c="tabList_gMY0",u="tabItem_sIv8";function p(){return p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}function d(e){var n;const{lazy:t,block:o,defaultValue:d,values:m,groupId:f,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=m?m:h.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),y=(0,l.l)(v,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var g;const k=null===d?d:null!==(g=null!=d?d:null===(n=h.find((e=>e.props.default)))||void 0===n?void 0:n.props.value)&&void 0!==g?g:h[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:j}=(0,i.U)(),[O,N]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=f){const e=w[f];null!=e&&e!==O&&v.some((n=>n.value===e))&&N(e)}const S=e=>{const n=e.currentTarget,t=T.indexOf(n),r=v[t].value;r!==O&&(x(n),N(r),null!=f&&j(f,String(r)))},P=e=>{let n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;var t;n=null!==(t=T[r])&&void 0!==t?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;var r;n=null!==(r=T[t])&&void 0!==r?r:T[T.length-1];break}}null==n||n.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},b)},v.map((({value:e,label:n,attributes:t})=>r.createElement("li",p({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>T.push(e),onKeyDown:P,onClick:S},t,{className:(0,a.Z)("tabs__item",u,null==t?void 0:t.className,{"tabs__item--active":O===e})}),null!=n?n:e)))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}function m(e){const n=(0,o.Z)();return r.createElement(d,p({key:String(n)},e))}},96496:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});t(93106);var r=t(79874),a=t(76038),o=t(26116);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const s={title:"Use CSS-in-JS"},c=void 0,u={unversionedId:"css-in-js",id:"css-in-js",title:"Use CSS-in-JS",description:"linaria",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/css-in-js.mdx",sourceDirName:".",slug:"/css-in-js",permalink:"/taro-docs/en/docs/next/css-in-js",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/css-in-js.mdx",tags:[],version:"current",frontMatter:{title:"Use CSS-in-JS"},sidebar:"docs",previous:{title:"Use CSS Modules",permalink:"/taro-docs/en/docs/next/css-modules"},next:{title:"\u4f7f\u7528 OSSA(React) UI\u7ec4\u4ef6\u5e93",permalink:"/taro-docs/en/docs/next/ossa"}},p={},d=[{value:"linaria",id:"linaria",level:2},{value:"Fower",id:"fower",level:2}],m={toc:d};function f(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",l({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",l({},{id:"linaria"}),"linaria"),(0,r.kt)("p",null,"There is a common CSS-in-JS solution in the React community: ",(0,r.kt)("a",l({parentName:"p"},{href:"https://github.com/styled-components/styled-components"}),"styled-components"),"\u3002Unfortunately, however, ",(0,r.kt)("inlineCode",{parentName:"p"},"styled-components")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"<style>")," tag to dynamically control styles, and there is no similar solution in mini program. But we can achieve the same functionality with ",(0,r.kt)("a",l({parentName:"p"},{href:"https://github.com/callstack/linaria"}),"linaria"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"linaria")," mainly provides the following features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"API that approximates ",(0,r.kt)("inlineCode",{parentName:"li"},"styled-components")),(0,r.kt)("li",{parentName:"ul"},"TypeScript support"),(0,r.kt)("li",{parentName:"ul"},"Zero runtime")),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"linaria")," is also very simple, first installing the dependencies via NPM:"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"$ pnpm i @linaria/core @linaria/react @linaria/babel-preset\n")),(0,r.kt)("p",null,"Next, configure ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js")," in the project root directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'}),"module.exports = {\n  presets: [\n    ['taro', {\n      framework: 'react',\n      ts: true\n    }],\n    '@linaria' // \u6dfb\u52a0\u5230 babel-preset\n  ]\n}\n")),(0,r.kt)("p",null,"After that, configure ",(0,r.kt)("inlineCode",{parentName:"p"},"config/index.js")),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"const config = {\n  mini: {\n    webpackChain(chain, webpack) {\n      // linaria/loader options refer to https://github.com/callstack/linaria/blob/master/docs/BUNDLERS_INTEGRATION.md#webpack\n      chain.module\n        .rule('script')\n        .use('linariaLoader')\n        .loader('@linaria/webpack-loader')\n        .options({\n          sourceMap: process.env.NODE_ENV !== 'production',\n        })\n    }\n  },\n  h5: {\n    webpackChain(chain, webpack) {\n      chain.module\n        .rule('script')\n        .use('linariaLoader')\n        .loader('@linaria/webpack-loader')\n        .options({\n          sourceMap: process.env.NODE_ENV !== 'production',\n        })\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Finally, create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"linaria.config.js")," in the root of the project"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="linaria.config.js"',title:'"linaria.config.js"'}),'// linaria configuration details: https://github.com/callstack/linaria/blob/master/docs/CONFIGURATION.md#options\nmodule.exports = {\n  rules: [\n    {\n      action: require("@linaria/shaker").default,\n    },\n    {\n      test: /node_modules[\\/\\\\](?!@tarojs)/,\n      action: "ignore"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"In the business code we can use it like this."),(0,r.kt)(a.Z,{defaultValue:"JS",values:[{label:"JavaScript",value:"JS"},{label:"TypeScript",value:"TS"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"JS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx"}),"import { styled } from '@linaria/react'\nimport { View } from '@tarojs/components'\nimport React from 'react'\n\nconst Title = styled(View)`\n  color: ${props => props.color}\n`;\n\nconst Index = () => {\n  return <Title color='red'>\n    Hello World!\n  </Title>\n}\n\nexport default Index\n"))),(0,r.kt)(o.Z,{value:"TS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"import { styled } from '@linaria/react'\nimport { View, ViewProps } from '@tarojs/components'\n\nimport React from 'react'\nimport './index.scss'\n\ndeclare type Component<TProps> = ((props: TProps) => any) | {\n  new (props: TProps): any\n}\n\ntype VPS = ViewProps & { style?: React.CSSProperties }\ntype TP = VPS & { color: string }\nconst Title = styled<TP, VPS, Component<TP>>(View)`\n  color: ${props => props.color}\n`\nconst Index: React.FC = () => {\n  return <Title color='red'>\n    Hello World!\n  </Title>\n}\n\nexport default Index\n")))),(0,r.kt)("h2",l({},{id:"fower"}),"Fower"),(0,r.kt)("p",null,"The community has another option ",(0,r.kt)("strong",{parentName:"p"},"Fower"),"\uff0c",(0,r.kt)("a",l({parentName:"p"},{href:"https://fower.vercel.app/zh-cn/docs/use-with-taro"}),"Documentation")))}f.isMDXComponent=!0}}]);