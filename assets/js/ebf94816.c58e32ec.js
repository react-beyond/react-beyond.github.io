"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[647],{194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(5893),o=r(3905);const a={sidebar_position:3,description:"Renders a loader mask on top of elements with a truthy _loader prop."},s="loader",l={unversionedId:"gallery/loader",id:"gallery/loader",title:"loader",description:"Renders a loader mask on top of elements with a truthy _loader prop.",source:"@site/docs/gallery/loader.mdx",sourceDirName:"gallery",slug:"/gallery/loader",permalink:"/docs/gallery/loader",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gallery/loader.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Renders a loader mask on top of elements with a truthy _loader prop."},sidebar:"theSidebar",previous:{title:"ifElse",permalink:"/docs/gallery/ifelse"},next:{title:"transpose",permalink:"/docs/gallery/transpose"}},i={},d=[{value:"Installation",id:"installation",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",a:"a",img:"img"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"loader",children:"loader"}),"\n",(0,n.jsxs)(t.p,{children:["Renders a loader mask on top of elements with a truthy ",(0,n.jsx)(t.code,{children:"x-loader"})," prop."]}),"\n",(0,n.jsxs)(t.p,{children:["It provides a ",(0,n.jsx)(t.code,{children:"loaderMask"})," config. But it doesn't only render the ",(0,n.jsx)(t.code,{children:"loaderMask"})," in place of the component: the layout wouldn't match. In order to make the ",(0,n.jsx)(t.code,{children:"loaderMask"})," cover up the exact same area as the component, it adds additional wrappings around the base component to provide a container for the ",(0,n.jsx)(t.code,{children:"loaderMask"})," with the proper size. As there's no safe way in CSS to wrap a DOM element without affecting the layout and keep the wrapper a positioned context, ",(0,n.jsx)(t.code,{children:"deepLoaderProp"}),"'s wrapper component tries to acquire the ",(0,n.jsx)(t.code,{children:"style.display"})," property of the base component's root DOM node in a useLayoutEffect hook, and uses that display value for the wrapper elements. In most cases it works well."]}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install react-beyond @react-beyond/loader\n"})}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"id"})," - The id of the feature HOC. Defaults to ",(0,n.jsx)(t.code,{children:'"loader"'}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"loaderMask"}),' - The loader mask to render. Defaults to a component which takes up the container\'s area (see above) and shows "Loading..." in the center.']}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["(Check out the ",(0,n.jsx)(t.a,{href:"/docs/guide/usage-patterns",children:"Usage Patterns"})," to see alternative syntaxes.)"]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { Beyond } from "react-beyond"\nimport { deepClsxProp } from "@react-beyond/loader"\n\nconst el = (\n  <Beyond hocs={[loader()]}>\n    <App />\n  </Beyond>\n)\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"loaderprop",src:r(2080).Z+"",width:"722",height:"174"})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},3905:(e,t,r)=>{r.d(t,{ah:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(r),u=o,m=h["".concat(i,".").concat(u)]||h[u]||c[u]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));p.displayName="MDXCreateElement"},2080:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/loaderprop-8591e525f69e0b16a14d431bf4ac9110.gif"}}]);