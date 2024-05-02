"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[553],{941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=n(5893),r=n(3905),s=n(8129),a=n(4674);const i={sidebar_position:3,description:"Transforms all `x-clsx` props to `className` with [clsx](https://www.npmjs.com/package/clsx) applied."},l="clsx",c={unversionedId:"gallery/clsx",id:"gallery/clsx",title:"clsx",description:"Transforms all `x-clsx` props to `className` with [clsx](https://www.npmjs.com/package/clsx) applied.",source:"@site/docs/gallery/clsx.mdx",sourceDirName:"gallery",slug:"/gallery/clsx",permalink:"/docs/gallery/clsx",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gallery/clsx.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Transforms all `x-clsx` props to `className` with [clsx](https://www.npmjs.com/package/clsx) applied."},sidebar:"theSidebar",previous:{title:"classFor",permalink:"/docs/gallery/classfor"},next:{title:"errorFallback",permalink:"/docs/gallery/errorfallback"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2}];function f(e){const t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"clsx",children:"clsx"}),"\n",(0,o.jsxs)(t.p,{children:["Transforms all ",(0,o.jsx)(t.code,{children:"x-clsx"})," props to ",(0,o.jsx)(t.code,{children:"className"})," with ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/clsx",children:"clsx"})," applied."]}),"\n","\n","\n",(0,o.jsx)(s.Z,{css:"\n    body {\n      @apply flex h-screen justify-center items-center;\n    }\n  ",features:["clsx()"],files:{"/App.jsx":(0,a.o)('\n  export default function App() {\n    return (\n      <button x-clsx={["bg-blue-500", "text-white"]}>\n        Hello\n      </button>\n    )\n  }\n')}}),"\n",(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install react-beyond @react-beyond/clsx\n"})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Beyond } from 'react-beyond'\nimport { classFor } from '@react-beyond/clsx'\n\n<Beyond features={[clsx()]}>\n  <App />\n</Beyond>\n"})}),"\n",(0,o.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"id"})," - The id of the feature HOC. Defaults to ",(0,o.jsx)(t.code,{children:'"clsx"'}),"."]}),"\n"]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(f,e)})):f(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>c});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(n),u=r,m=f["".concat(l,".").concat(u)]||f[u]||d[u]||s;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));p.displayName="MDXCreateElement"},8129:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var o=n(9020),r=n(4674),s=n(5893),a={colors:{surface1:"#282a36",surface2:"#44475a",surface3:"#44475a",clickable:"#6272a4",base:"#f8f8f2",disabled:"#6272a4",hover:"#f8f8f2",accent:"#bd93f9",error:"#f8f8f2",errorSurface:"#44475a"},syntax:{plain:"#f8f8f2",comment:{color:"#6272a4",fontStyle:"italic"},keyword:"#7fb2de",tag:"#7fb2de",punctuation:"#7fb2de",definition:"#f8f8f2",property:"#50fa7b",static:"#bd93f9",string:"#f1fa8c"},font:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',size:"13px",lineHeight:"20px"}};function i(e){e.code;return(0,s.jsx)(o.xR,{options:{showTabs:!0,editorHeight:"375px",...e.options},theme:a,template:"vite-react",customSetup:{dependencies:{autoprefixer:"^10.4.14","@react-beyond/classfor":"latest","@react-beyond/clsx":"latest","@react-beyond/errorfallback":"latest","@react-beyond/hrefhandler":"latest","@react-beyond/ifelse":"latest","@react-beyond/loader":"latest","@react-beyond/menu":"latest","@react-beyond/hoc":"latest","@react-beyond/tooltip":"latest","@react-beyond/transpose":"latest","@react-beyond/tw":"latest","@react-beyond/rxjs":"latest","react-beyond":"latest",tailwindcss:"^3.3.2",mobx:"^6.10.0","mobx-react-lite":"^4.0.3",rxjs:"^7.8.1"}},files:{},files:{},files:{"/vite.config.js":{hidden:!0,code:(0,r.o)('import { defineConfig } from "vite";\n              import react from "@vitejs/plugin-react";\n\n              export default defineConfig(async function () {\n                // Docusaurus doesn\'t work with "type": "module", and it would be needed for\n                // the CodeSandBox click-out to work. Renaming the file to vite.config.mjs\n                // almost solves the issue, but the sandbox template re-generates the stock\n                // vite.config.js file, so we have to work with that. Dynamic import is a\n                // workaround, because it can import CommonJS modules. Otherwise this would be\n                // as simple as:\n                // import reactBeyond from \'react-beyond/plugin/vite\'\n                // export default defineConfig({\n                //   plugins: [react(), reactBeyond()],\n                // });\n\n                const reactBeyond = (await import(\'react-beyond/plugin/vite\')).default\n                return {\n                  plugins: [react(), reactBeyond()]\n                }\n              })')},"/tailwind.config.mjs":{hidden:!0,code:(0,r.o)('\n              export default {\n                content: [\n                  "./**/*.{html,js,jsx,ts,tsx}",\n                  "!./node_modules"\n                ],\n                theme: {\n                  extend: {},\n                },\n                plugins: [],\n              }\n            ')},"/postcss.config.mjs":{hidden:!0,code:(0,r.o)("\n              import tailwind from 'tailwindcss'\n              import autoprefixer from 'autoprefixer'\n              import tailwindConfig from './tailwind.config.mjs'\n\n              export default {\n                plugins: [tailwind(tailwindConfig), autoprefixer],\n              }\n            ")},"/styles.css":{hidden:!0,code:(0,r.o)(`\n              @tailwind base;\n              @tailwind components;\n              @tailwind utilities;\n\n              button {\n                @apply border border-slate-500 font-bold py-2 px-4 rounded;\n              }\n\n              ${e.css||""}\n            `)},"/index.jsx":{code:(0,r.o)(`import { StrictMode } from 'react'\n              import { createRoot } from 'react-dom/client'\n              import { Beyond } from 'react-beyond'\n              ${(e.features||[]).map((e=>`import { ${e.trim().match(/^\w+/)[0]} } from '@react-beyond/${e.trim().match(/^\w+/)[0].toLowerCase()}'`)).join("\n              ")}\n\n              import App from './App'\n              import './styles.css'\n\n              createRoot(document.getElementById('root')).render(\n                <StrictMode>\n                  <Beyond features={[${(e.features||[]).map((e=>`${e}`)).join(", ")}]}>\n                    <App />\n                  </Beyond>\n                </StrictMode>\n              )`)},"/App.jsx":(0,r.o)("export default function App() {\n              return null\n            }"),...e.files}})}},4674:(e,t,n)=>{function o(e){let t=e.split("\n");""===t[0].trim()&&(t=t.slice(1));const n=t.slice(1).filter((e=>e.trim().length>0)).map((e=>e.search(/\S/))),o=Math.min(...n);t[0].trim().length>0&&(t[0]=t[0].trimStart());for(let r=1;r<t.length;r++)t[r].trim().length>0&&(t[r]=t[r].slice(o));return t=t.map((e=>e.replace(/\s+$/,""))),t.join("\n")}n.d(t,{o:()=>o})}}]);