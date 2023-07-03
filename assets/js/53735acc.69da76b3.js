"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:3,description:"Turns all <a href> elements into SPA links with a navigate callback."},o="deepHrefHandler",i={unversionedId:"gallery/href-handler",id:"gallery/href-handler",title:"deepHrefHandler",description:"Turns all <a href> elements into SPA links with a navigate callback.",source:"@site/docs/gallery/href-handler.mdx",sourceDirName:"gallery",slug:"/gallery/href-handler",permalink:"/docs/gallery/href-handler",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gallery/href-handler.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Turns all <a href> elements into SPA links with a navigate callback."},sidebar:"theSidebar",previous:{title:"deepErrorBoundary",permalink:"/docs/gallery/error-boundary"},next:{title:"deepIfProp",permalink:"/docs/gallery/if-prop"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deephrefhandler"},"deepHrefHandler"),(0,a.kt)("p",null,"Turns all ",(0,a.kt)("inlineCode",{parentName:"p"},"<a href>")," elements into SPA links with a navigate callback. If an onClick prop is already present, it will take precedence."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-deephoc @react-deephoc/hrefhandler\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"deepHrefHandler(opts: {\n  id?: string\n  navigate: (href: string) => void\n  onlyRelative?: boolean\n}): HOC\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," - The id of the HOC. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},'"hrefHandler"'),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"navigate")," - The callback to call when a link is clicked."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onlyRelative")," - Whether to only handle relative links. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,a.kt)("p",null,"(Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/usage-patterns"},"Usage Patterns")," to see alternative syntaxes.)"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeepHocs } from "react-deephoc"\nimport { deepHrefHandler } from "@react-deephoc/hrefhandler"\n\nconst el = (\n  <DeepHocs hocs={[\n    deepHrefHandler({\n      navigate: (href) => {\n        console.log(`Navigating to ${href}`)\n      }\n    })\n  ]}>\n    <App />\n  </DeepHocs>\n)\n')),(0,a.kt)("p",null,"Elements like this under ",(0,a.kt)("inlineCode",{parentName:"p"},"<App />"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<a href="/page1" />\n')),(0,a.kt)("p",null,"will turn into this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<a href="/page1" onClick={(e) => {\n  e.preventDefault()\n  opts.navigate(/* current value of props.href */)\n}) />\n')))}u.isMDXComponent=!0}}]);