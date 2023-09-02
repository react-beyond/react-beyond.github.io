"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[860],{7710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(5893),o=n(3905);const c={sidebar_position:3},a="Scopes",s={unversionedId:"guide/scopes",id:"guide/scopes",title:"Scopes",description:"React Beyond doesn't add any global mechanism to the page. It strictly operates within the subtree of the component it's applied to. (Scoping works with even HMR: if you have the same component in two different places, one with a Beyond component above it, and one without, and you change the component, React Fast Refresh will re-render them properly, re-applying the HOCs only to the component that needs it.)",source:"@site/docs/guide/scopes.mdx",sourceDirName:"guide",slug:"/guide/scopes",permalink:"/docs/guide/scopes",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/scopes.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"theSidebar",previous:{title:"Getting Started",permalink:"/docs/guide/getting-started"},next:{title:"TypeScript",permalink:"/docs/guide/typescript"}},i={},p=[];function d(e){const t=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"scopes",children:"Scopes"}),"\n",(0,r.jsx)(t.p,{children:"React Beyond doesn't add any global mechanism to the page. It strictly operates within the subtree of the component it's applied to. (Scoping works with even HMR: if you have the same component in two different places, one with a Beyond component above it, and one without, and you change the component, React Fast Refresh will re-render them properly, re-applying the HOCs only to the component that needs it.)"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import React from "react"\nimport ReactDOM from "react-dom/client"\nimport { Beyond } from "react-beyond"\nimport { classFor } from "@react-beyond/classfor"\n\nimport App from "./App"\n\nReactDOM.createRoot(document.getElementById("root")).render(\n  <React.StrictMode>\n    <div class="" /> {/* <--- Warning: Invalid DOM property `class`. */}\n    <Beyond hocs={[classFor()]}>\n      <App class="" /> {/* <--- \u2705 */}\n    </Beyond>\n  </React.StrictMode>\n);\n'})}),"\n",(0,r.jsx)(t.p,{children:"This is great, but sadly TypeScript cannot be scoped. Read more about it in the next chapter."})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||c;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));l.displayName="MDXCreateElement"}}]);