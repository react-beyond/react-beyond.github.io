"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[218],{6949:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=t(5893),o=t(3905);const i={sidebar_position:3},c="API",d={unversionedId:"api/api",id:"api/api",title:"API",description:"beyond(cmp, config)",source:"@site/docs/api/api.mdx",sourceDirName:"api",slug:"/api/",permalink:"/docs/api/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/api.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"theSidebar",previous:{title:"transpose",permalink:"/docs/gallery/transpose"},next:{title:"FAQ",permalink:"/docs/faq/"}},s={},l=[{value:"<code>beyond(cmp, config)</code>",id:"beyondcmp-config",level:3},{value:"Config object",id:"config-object",level:3}];function a(e){const n=Object.assign({h1:"h1",h3:"h3",code:"code",p:"p",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.h3,{id:"beyondcmp-config",children:(0,r.jsx)(n.code,{children:"beyond(cmp, config)"})}),"\n",(0,r.jsxs)(n.p,{children:["Applies a React Beyond configuration to the component ",(0,r.jsx)(n.code,{children:"cmp"})," and returns the new component. The configuration will be applied to all descendants of ",(0,r.jsx)(n.code,{children:"cmp"})," as well."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cmp"}),": The root component that you want to apply the configuration to."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"config-object",children:"Config object"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"id"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"The id of the HOC. Must be a unique string. This will appear appear next to the components in React DevTools."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mapComponent?"}),(0,r.jsx)(n.td,{children:"(cmp: FC) => FC"}),(0,r.jsxs)(n.td,{children:["A function that maps a component to a new component. If defined, all the components under the deep HOC will be mapped with this function. This function is called ",(0,r.jsx)(n.em,{children:"once per mounted components"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"invokeRender?"}),(0,r.jsx)(n.td,{children:"(render, props, ref) => ReactElement"}),(0,r.jsxs)(n.td,{children:["A function which invokes the base component with the passed ",(0,r.jsx)(n.code,{children:"props"})," and ",(0,r.jsx)(n.code,{children:"ref"}),". If defined, all the components under the deep HOC will be rendered through this function. ",(0,r.jsx)(n.code,{children:"render"})," is always the render function, unwrapped from eventual ",(0,r.jsx)(n.code,{children:"forwardRef"})," and/or ",(0,r.jsx)(n.code,{children:"memo"})," wrappings. This function is called ",(0,r.jsx)(n.em,{children:"once per render"}),". Defaults to ",(0,r.jsx)(n.code,{children:"(render, props, ref) => render(props, ref)"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mapElement?"}),(0,r.jsx)(n.td,{children:"(el: ReactElement, magicPropValue?: any) => ReactElement"}),(0,r.jsxs)(n.td,{children:["A function that maps ",(0,r.jsx)(n.code,{children:"el"})," to a new element. If defined, all ",(0,r.jsx)(n.em,{children:"elements"})," under the deep HOC will be mapped with it. ",(0,r.jsx)(n.code,{children:"magicPropValue"})," will only be passed, when ",(0,r.jsx)(n.code,{children:"magicProp"})," is defined; see below."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"directiveProp?"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsxs)(n.td,{children:["If defined, ",(0,r.jsx)(n.code,{children:"mapElement"})," will only be called, if a JSX element has a prop with ",(0,r.jsx)(n.code,{children:"<magicProp>"})," prop name. If so, React Beyond removes the magic prop from the props object, and calls ",(0,r.jsx)(n.code,{children:"mapElement"})," with (originalProps, magicPropValue)."]})]})]})]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>l});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},a={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),h=l(t),m=o,u=h["".concat(s,".").concat(m)]||h[m]||a[m]||i;return t?r.createElement(u,c(c({ref:n},p),{},{components:t})):r.createElement(u,c({ref:n},p))}));p.displayName="MDXCreateElement"}}]);