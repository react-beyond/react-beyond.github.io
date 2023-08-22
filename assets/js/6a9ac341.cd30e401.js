"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3885],{7719:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var s=n(5893),t=n(3905);const l={sidebar_position:3,description:"Transforms all `_clsx` prop on elements to `className` with clsx() applied."},a="deepClsxProp",o={unversionedId:"gallery/clsx-prop",id:"gallery/clsx-prop",title:"deepClsxProp",description:"Transforms all `_clsx` prop on elements to `className` with clsx() applied.",source:"@site/docs/gallery/clsx-prop.mdx",sourceDirName:"gallery",slug:"/gallery/clsx-prop",permalink:"/docs/gallery/clsx-prop",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gallery/clsx-prop.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Transforms all `_clsx` prop on elements to `className` with clsx() applied."},sidebar:"theSidebar",previous:{title:"deepClassForProp",permalink:"/docs/gallery/class-for"},next:{title:"deepErrorBoundary",permalink:"/docs/gallery/error-boundary"}},c={},i=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",a:"a"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"deepclsxprop",children:"deepClsxProp"}),"\n",(0,s.jsxs)(r.p,{children:['Transforms all "_clsx" prop on elements to "className" with clsx() applied. If a ',(0,s.jsx)(r.code,{children:"className"})," prop is already present, it will be merged."]}),"\n",(0,s.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"npm install react-beyond @react-beyond/clsxprop\n"})}),"\n",(0,s.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"deepClsxProp(opts: {\n  id?: string\n} = {}): HOC\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"id"})," - The id of the HOC. Defaults to ",(0,s.jsx)(r.code,{children:'"clsxProp"'}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["(Check out the ",(0,s.jsx)(r.a,{href:"/docs/guide/usage-patterns",children:"Usage Patterns"})," to see alternative syntaxes.)"]}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-tsx",children:'import { Beyond } from "react-beyond"\nimport { deepClsxProp } from "@react-beyond/clsxprop"\n\nconst el = (\n  <Beyond hocs={[deepClsxProp()]}>\n    <App />\n  </Beyond>\n)\n'})}),"\n",(0,s.jsxs)(r.p,{children:["Elements like this under ",(0,s.jsx)(r.code,{children:"<App />"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-tsx",children:"<div _clsx=\"some-class\" />\n<div _clsx={['some-class', true && 'other-class']} />\n"})}),"\n",(0,s.jsx)(r.p,{children:"will turn into this:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-tsx",children:'<div className="some-class" />\n<div className="some-class other-class" />\n'})})]})}const d=function(e={}){const{wrapper:r}=Object.assign({},(0,t.ah)(),e.components);return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(p,e)})):p(e)}},3905:(e,r,n)=>{n.d(r,{ah:()=>i});var s=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,s,t=function(e,r){if(null==e)return{};var n,s,t={},l=Object.keys(e);for(s=0;s<l.length;s++)n=l[s],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)n=l[s],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=s.createContext({}),i=function(e){var r=s.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},d=s.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=i(n),x=t,h=u["".concat(c,".").concat(x)]||u[x]||p[x]||l;return n?s.createElement(h,a(a({ref:r},d),{},{components:n})):s.createElement(h,a({ref:r},d))}));d.displayName="MDXCreateElement"}}]);