"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[440],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,f=c["".concat(i,".").concat(m)]||c[m]||u[m]||n;return r?a.createElement(f,p(p({ref:t},d),{},{components:r})):a.createElement(f,p({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,p=new Array(n);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,p[1]=l;for(var s=2;s<n;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:3,description:"Renders a loader mask on top of elements with a truthy _loader prop."},p="deepLoaderProp",l={unversionedId:"gallery/loader-prop",id:"gallery/loader-prop",title:"deepLoaderProp",description:"Renders a loader mask on top of elements with a truthy _loader prop.",source:"@site/docs/gallery/loader-prop.mdx",sourceDirName:"gallery",slug:"/gallery/loader-prop",permalink:"/docs/gallery/loader-prop",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gallery/loader-prop.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Renders a loader mask on top of elements with a truthy _loader prop."},sidebar:"theSidebar",previous:{title:"deepIfProp",permalink:"/docs/gallery/if-prop"},next:{title:"deepMenuProp",permalink:"/docs/gallery/menu-prop"}},i={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deeploaderprop"},"deepLoaderProp"),(0,o.kt)("p",null,"Renders a loader mask on top of elements with a truthy ",(0,o.kt)("inlineCode",{parentName:"p"},"_loader")," prop."),(0,o.kt)("p",null,"It provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"loaderMask")," config. But it doesn't only render the ",(0,o.kt)("inlineCode",{parentName:"p"},"loaderMask")," in place of the component: the layout wouldn't match. In order to make the ",(0,o.kt)("inlineCode",{parentName:"p"},"loaderMask")," cover up the exact same area as the component, it adds additional wrappings around the base component to provide a container for the ",(0,o.kt)("inlineCode",{parentName:"p"},"loaderMask")," with the proper size. As there's no safe way in CSS to wrap a DOM element without affecting the layout and keep the wrapper a positioned context, ",(0,o.kt)("inlineCode",{parentName:"p"},"deepLoaderProp"),"'s wrapper component tries to acquire the ",(0,o.kt)("inlineCode",{parentName:"p"},"style.display")," property of the base component's root DOM node in a useLayoutEffect hook, and uses that display value for the wrapper elements. In most cases it works well."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-deephoc @react-deephoc/loaderprop\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"deepClsxProp(opts: {\n  id?: string\n  loaderMask?: ReactElement\n} = {}): HOC\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - The id of the HOC. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},'"loaderProp"'),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"loaderMask"),' - The loader mask to render. Defaults to a component which takes up the container\'s area (see above) and shows "Loading..." in the center.')),(0,o.kt)("p",null,"(Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guide/usage-patterns"},"Usage Patterns")," to see alternative syntaxes.)"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeepHocs } from "react-deephoc"\nimport { deepClsxProp } from "@react-deephoc/loaderprop"\n\nconst el = (\n  <DeepHocs hocs={[deepLoaderProp()]}>\n    <App />\n  </DeepHocs>\n)\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"loaderprop",src:r(2080).Z,width:"722",height:"174"})))}u.isMDXComponent=!0},2080:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/loaderprop-8591e525f69e0b16a14d431bf4ac9110.gif"}}]);