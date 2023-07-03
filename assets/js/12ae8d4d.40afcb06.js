"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[752],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},i),{},{components:r})):n.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3,description:"Transforms all `class` and `for` props to `className` and `htmlFor`."},l="deepClassForProp",s={unversionedId:"gallery/class-for",id:"gallery/class-for",title:"deepClassForProp",description:"Transforms all `class` and `for` props to `className` and `htmlFor`.",source:"@site/docs/gallery/class-for.mdx",sourceDirName:"gallery",slug:"/gallery/class-for",permalink:"/docs/gallery/class-for",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gallery/class-for.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Transforms all `class` and `for` props to `className` and `htmlFor`."},sidebar:"theSidebar",previous:{title:"Gallery",permalink:"/docs/category/gallery"},next:{title:"deepClsxProp",permalink:"/docs/gallery/clsx-prop"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2}],i={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deepclassforprop"},"deepClassForProp"),(0,a.kt)("p",null,'Transforms all "class" and "for" props to "className" and "htmlFor".'),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-deephoc @react-deephoc/classforprop\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"deepClassForProp(opts: {\n  id?: string\n  useClassOnComponents?: boolean\n} = {}): HOC\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," - The id of the HOC. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},'"classForProp"'),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useClassOnComponents")," - Whether to replace the ",(0,a.kt)("inlineCode",{parentName:"li"},"class")," prop on components too, not just on DOM elements. It never replaces the ",(0,a.kt)("inlineCode",{parentName:"li"},"for")," prop on components. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,a.kt)("p",null,"(Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/usage-patterns"},"Usage Patterns")," to see alternative syntaxes.)"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeepHocs } from "react-deephoc"\nimport { deepClassForProp } from "@react-deephoc/classforprop"\n\nconst el = (\n  <DeepHocs hocs={[deepClassForProp()]}>\n    <App />\n  </DeepHocs>\n)\n')),(0,a.kt)("p",null,"Elements like this under ",(0,a.kt)("inlineCode",{parentName:"p"},"<App />"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<div class="some-class" />\n')),(0,a.kt)("p",null,"will turn into this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<div className="some-class" />\n')))}d.isMDXComponent=!0}}]);