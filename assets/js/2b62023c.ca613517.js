"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[664],{1267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(5893),i=n(3905);const o={sidebar_position:20},s="FAQ",a={unversionedId:"faq/faq",id:"faq/faq",title:"FAQ",description:"What is React Beyond good for?",source:"@site/docs/faq/faq.mdx",sourceDirName:"faq",slug:"/faq/",permalink:"/docs/faq/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq/faq.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"theSidebar",previous:{title:"API",permalink:"/docs/api/"}},c={},l=[{value:"What is React Beyond good for?",id:"what-is-react-beyond-good-for",level:3},{value:"Doesn&#39;t it slow everything down?",id:"doesnt-it-slow-everything-down",level:3},{value:"Doesn&#39;t it break Fast Refresh?",id:"doesnt-it-break-fast-refresh",level:3},{value:"Does it work with SSR?",id:"does-it-work-with-ssr",level:3},{value:"Does it work with React Server Components?",id:"does-it-work-with-react-server-components",level:3},{value:"Is it yet another directive library for React?",id:"is-it-yet-another-directive-library-for-react",level:3},{value:"Is React Beyond totally plugin-free?",id:"is-react-beyond-totally-plugin-free",level:3},{value:"Is React Beyond monkey-patching React or does it use private APIs?",id:"is-react-beyond-monkey-patching-react-or-does-it-use-private-apis",level:3},{value:"Is it type-safe?",id:"is-it-type-safe",level:3},{value:"Doesn&#39;t it obfuscate the component inspector?",id:"doesnt-it-obfuscate-the-component-inspector",level:3}];function d(e){const t=Object.assign({h1:"h1",h3:"h3",p:"p",img:"img"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(t.h3,{id:"what-is-react-beyond-good-for",children:"What is React Beyond good for?"}),"\n",(0,r.jsx)(t.p,{children:"React is built around the idea of components being simple functions, so you can leverage the technique called 'higher-order functions' known from functional programming to create higher-order components (HOCs). A problem with simple HOCs is that they're only effective on a single component, so if you want a functionality, which is implemented with a HOC, to be applied to multiple components, you need to wrap each of them. This is where React Beyond comes in: it not only applies your HOC on a component, but all the components in the resulting JSX will be 'infected' as well. Your HOC will go beyond the component boundaries. This is actually a simple idea, and React Beyond is a small library!"}),"\n",(0,r.jsx)(t.h3,{id:"doesnt-it-slow-everything-down",children:"Doesn't it slow everything down?"}),"\n",(0,r.jsx)(t.p,{children:"Not at all. While it naturally has some overhead, the difference is negligable. Your app will keep the exact same performance characteristics."}),"\n",(0,r.jsx)(t.h3,{id:"doesnt-it-break-fast-refresh",children:"Doesn't it break Fast Refresh?"}),"\n",(0,r.jsx)(t.p,{children:"No. We have a Vite plugin that makes it work seamlessly. And adding support for other bundlers is easy."}),"\n",(0,r.jsx)(t.h3,{id:"does-it-work-with-ssr",children:"Does it work with SSR?"}),"\n",(0,r.jsx)(t.p,{children:"Yes."}),"\n",(0,r.jsx)(t.h3,{id:"does-it-work-with-react-server-components",children:"Does it work with React Server Components?"}),"\n",(0,r.jsx)(t.p,{children:"Not yet, but it might in the future. Technically, what we need here is to encode all the HOC information into props and then 'decode' them on the client side."}),"\n",(0,r.jsx)(t.h3,{id:"is-it-yet-another-directive-library-for-react",children:"Is it yet another directive library for React?"}),"\n",(0,r.jsx)(t.p,{children:"Much of the features in the Gallery are directives, but not exclusively. Directives are good, and there were many attempts in the ecosystem to recreate a similar functionality within React, but those libraries are flawed by relying on custom babel or bundler plugins, or if not, their API is cumbersome."}),"\n",(0,r.jsx)(t.h3,{id:"is-react-beyond-totally-plugin-free",children:"Is React Beyond totally plugin-free?"}),"\n",(0,r.jsx)(t.p,{children:"For its runtime working, yes. There is, however, a bundler plugin needed to make Hot Module Replacement work (just like React needs one). We provide a Vite plugin."}),"\n",(0,r.jsx)(t.h3,{id:"is-react-beyond-monkey-patching-react-or-does-it-use-private-apis",children:"Is React Beyond monkey-patching React or does it use private APIs?"}),"\n",(0,r.jsx)(t.p,{children:"No. React Beyond works with 100% pure public React usage. It's nothing else than higher-order components. There's one occasion in the Gallery (@react-beyond/rxjs) where the TypeScript typing uses a private interface to amend the React Children type, but that's it."}),"\n",(0,r.jsx)(t.h3,{id:"is-it-type-safe",children:"Is it type-safe?"}),"\n",(0,r.jsx)(t.p,{children:"Directives are typed, yes, so Ctrl/Cmd + Click works just like on any other prop in your IDE."}),"\n",(0,r.jsx)(t.h3,{id:"doesnt-it-obfuscate-the-component-inspector",children:"Doesn't it obfuscate the component inspector?"}),"\n",(0,r.jsx)(t.p,{children:"The components retain their displayname, and the applied features are shown next to them in application order:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"devtools",src:n(6158).Z+"",width:"927",height:"604"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>l});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=l(n),u=i,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return n?r.createElement(f,s(s({ref:t},h),{},{components:n})):r.createElement(f,s({ref:t},h))}));h.displayName="MDXCreateElement"},6158:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/devtools-45f8bff29a5b0e1515c0bccf6a520191.png"}}]);