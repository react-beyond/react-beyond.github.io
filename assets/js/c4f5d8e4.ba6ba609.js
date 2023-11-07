"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[195],{8129:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var o=n(9020),r=n(4674),s=n(5893),a={colors:{surface1:"#282a36",surface2:"#44475a",surface3:"#44475a",clickable:"#6272a4",base:"#f8f8f2",disabled:"#6272a4",hover:"#f8f8f2",accent:"#bd93f9",error:"#f8f8f2",errorSurface:"#44475a"},syntax:{plain:"#f8f8f2",comment:{color:"#6272a4",fontStyle:"italic"},keyword:"#7fb2de",tag:"#7fb2de",punctuation:"#7fb2de",definition:"#f8f8f2",property:"#50fa7b",static:"#bd93f9",string:"#f1fa8c"},font:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',size:"13px",lineHeight:"20px"}};function i(e){e.code;return(0,s.jsx)(o.xR,{options:{showTabs:!0,editorHeight:"375px",...e.options},theme:a,template:"vite-react",customSetup:{dependencies:{autoprefixer:"^10.4.14","@react-beyond/classfor":"latest","@react-beyond/clsx":"latest","@react-beyond/errorfallback":"latest","@react-beyond/hrefhandler":"latest","@react-beyond/ifelse":"latest","@react-beyond/loader":"latest","@react-beyond/menu":"latest","@react-beyond/hoc":"latest","@react-beyond/tooltip":"latest","@react-beyond/transpose":"latest","@react-beyond/tw":"latest","@react-beyond/rxjs":"latest","react-beyond":"latest",tailwindcss:"^3.3.2",mobx:"^6.10.0","mobx-react-lite":"^4.0.3",rxjs:"^7.8.1"}},files:{},files:{},files:{"/vite.config.js":{hidden:!0,code:(0,r.o)('import { defineConfig } from "vite";\n              import react from "@vitejs/plugin-react";\n\n              export default defineConfig(async function () {\n                // Docusaurus doesn\'t work with "type": "module", and it would be needed for\n                // the CodeSandBox click-out to work. Renaming the file to vite.config.mjs\n                // almost solves the issue, but the sandbox template re-generates the stock\n                // vite.config.js file, so we have to work with that. Dynamic import is a\n                // workaround, because it can import CommonJS modules. Otherwise this would be\n                // as simple as:\n                // import reactBeyond from \'react-beyond/plugin/vite\'\n                // export default defineConfig({\n                //   plugins: [react(), reactBeyond()],\n                // });\n\n                const reactBeyond = (await import(\'react-beyond/plugin/vite\')).default\n                return {\n                  plugins: [react(), reactBeyond()]\n                }\n              })')},"/tailwind.config.mjs":{hidden:!0,code:(0,r.o)('\n              export default {\n                content: [\n                  "./**/*.{html,js,jsx,ts,tsx}",\n                  "!./node_modules"\n                ],\n                theme: {\n                  extend: {},\n                },\n                plugins: [],\n              }\n            ')},"/postcss.config.mjs":{hidden:!0,code:(0,r.o)("\n              import tailwind from 'tailwindcss'\n              import autoprefixer from 'autoprefixer'\n              import tailwindConfig from './tailwind.config.mjs'\n\n              export default {\n                plugins: [tailwind(tailwindConfig), autoprefixer],\n              }\n            ")},"/styles.css":{hidden:!0,code:(0,r.o)(`\n              @tailwind base;\n              @tailwind components;\n              @tailwind utilities;\n\n              button {\n                @apply border border-slate-500 font-bold py-2 px-4 rounded;\n              }\n\n              ${e.css||""}\n            `)},"/index.jsx":{code:(0,r.o)(`import { StrictMode } from 'react'\n              import { createRoot } from 'react-dom/client'\n              import { Beyond } from 'react-beyond'\n              ${(e.features||[]).map((e=>`import { ${e.trim().match(/^\w+/)[0]} } from '@react-beyond/${e.trim().match(/^\w+/)[0].toLowerCase()}'`)).join("\n              ")}\n\n              import App from './App'\n              import './styles.css'\n\n              createRoot(document.getElementById('root')).render(\n                <StrictMode>\n                  <Beyond features={[${(e.features||[]).map((e=>`${e}`)).join(", ")}]}>\n                    <App />\n                  </Beyond>\n                </StrictMode>\n              )`)},"/App.jsx":(0,r.o)("export default function App() {\n              return null\n            }"),...e.files}})}},4674:(e,t,n)=>{function o(e){let t=e.split("\n");""===t[0].trim()&&(t=t.slice(1));const n=t.slice(1).filter((e=>e.trim().length>0)).map((e=>e.search(/\S/))),o=Math.min(...n);t[0].trim().length>0&&(t[0]=t[0].trimStart());for(let r=1;r<t.length;r++)t[r].trim().length>0&&(t[r]=t[r].slice(o));return t.join("\n")}n.d(t,{o:()=>o})},6907:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var o=n(9960),r=n(2263),s=n(876),a=n(6010),i=n(7294),l=n(8918),c=n(2261);const d={features:"features_t9lD",featureSvg:"featureSvg_GfXr"};var p=n(5893);const u=[{title:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{style:{color:"#0f0"},children:"\u2713"})," 100% Pure React"]}),description:(0,p.jsx)(p.Fragment,{children:"No bundler plugins or other compilation-time tooling. React Beyond Features are simple higher-order components."})},{title:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{style:{color:"#0f0"},children:"\u2713"})," TypeScript"]}),description:(0,p.jsx)(p.Fragment,{children:"Directives are typed, so Ctrl/Cmd + Click works just like on any other prop in your IDE."})},{title:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{style:{color:"#0f0"},children:"\u2713"})," HMR / Fast Refresh / SSR"]}),description:(0,p.jsx)(p.Fragment,{children:"React Beyond supports Hot Module Replacement / React Fast Refresh; and SSR is not a problem as well."})}];function f(e){let{Svg:t,title:n,description:o}=e;return(0,p.jsxs)("div",{className:(0,a.Z)("col col--4"),children:[(0,p.jsx)("div",{className:"text--center"}),(0,p.jsxs)("div",{className:"text--center padding-horiz--md",children:[(0,p.jsx)("h3",{children:n}),(0,p.jsx)("p",{children:o})]})]})}function h(){return(0,p.jsx)("section",{className:d.features,children:(0,p.jsx)("div",{className:"container",children:(0,p.jsx)("div",{className:"row",children:u.map(((e,t)=>(0,p.jsx)(f,{...e},t)))})})})}var m=n(8129),x=n(4674);const b={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};function j(){const{siteConfig:e}=(0,r.Z)();return(0,p.jsx)("header",{className:(0,a.Z)("hero hero--primary",b.heroBanner),"x-tw":"[[data-theme=dark]_&]:bg-transparent !pt-12 !pb-4",children:(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("img",{src:"/img/logo.svg",style:{position:"absolute",transform:"translate(-330px, -70px) scale(.4)"}}),(0,p.jsxs)("div",{style:{position:"relative"},children:[(0,p.jsx)("h1",{className:"hero__title",children:e.title}),(0,p.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,p.jsx)("div",{className:b.buttons,children:(0,p.jsx)(o.Z,{className:"button button--secondary button--lg",to:"/docs/guide/getting-started",children:"Getting Started \u23f1\ufe0f"})})]})]})})}function y(){const{siteConfig:e}=(0,r.Z)(),[t,n]=(0,i.useState)(0),[a,d]=(0,i.useState)(null),u="undefined"!=typeof window?window.location:{hash:""},f=(0,i.useRef)();return(0,i.useLayoutEffect)((()=>{f.current.querySelector(".active")?.classList?.remove?.("active"),f.current.querySelector(`[data-item="${u.hash.slice(1)}"]`).classList.add("active")}),[f.current]),(0,p.jsxs)(s.Z,{title:`${e.title}`,description:"Recursive higher-order components for React",children:[(0,p.jsx)(j,{}),(0,p.jsxs)("main",{className:"p-10",children:[(0,p.jsx)("p",{class:"",children:"React Beyond lets you define higher-order components which recursively re-apply themselves on the child components. You can create features that are available to the entire tree. It opens up new exciting possibilities in React to create more intuitive code. Here are a few examples:"}),(0,p.jsxs)("div",{ref:f,"x-tw":["flex mb-2 py-3","[&>*]:apply-[pb-1,cursor-pointer,border-solid,border-transparent,border-b-2,border-[20px]]","[&>.active]:apply-[border-b,border-b-[var(--marcika-tint)]]"],"x-on-children":e=>({onClick:t=>{n(e),a.slideTo(e)},"x-tw":[t===e&&"active"]}),children:[(0,p.jsx)("button",{class:(console.log(u.hash),(""===u.hash||"#ifelse"===u.hash)&&"active"),"data-item":"ifelse",children:"If/else"}),(0,p.jsx)("button",{class:"#classfor"===u.hash&&"active","data-item":"classfor",children:"Class"}),(0,p.jsx)("button",{class:"#transpose"===u.hash&&"active","data-item":"transpose",children:"Transpose"}),(0,p.jsx)("button",{class:"#hrefhandler"===u.hash&&"active","data-item":"hrefhandler",children:"Href handler"}),(0,p.jsx)("button",{class:"#errorfallback"===u.hash&&"active","data-item":"errorfallback",children:"Error fallback"}),(0,p.jsx)("button",{class:"#hoc"===u.hash&&"active","data-item":"hoc",children:"MobX observer"}),(0,p.jsx)("button",{class:"#rxjs"===u.hash&&"active","data-item":"rxjs",children:"RxJS"})]}),(0,p.jsx)("div",{class:"xshadow-[0_5px_40px_rgba(0,0,255,1)]",children:(0,p.jsxs)(c.tq,{onSwiper:d,lazy:!0,spaceBetween:30,speed:750,allowTouchMove:!1,modules:[l.W_,l.kr],navigation:!0,hashNavigation:{watchState:!0},className:"","x-tw":["shadow-[0_5px_250px_rgba(var(--marcika-tint-rgb),0.15)]","bg-[rgba(var(--marcika-tint-rgb,0.6))]"],children:[(0,p.jsx)(c.o5,{"data-hash":"ifelse",children:(0,p.jsx)(m.Z,{css:"\n                  body {\n                    @apply flex h-screen justify-center items-center;\n                  }\n                ",features:["ifElse()"],files:{"/App.jsx":(0,x.o)('\n                // Vue-like if/else directives\n                // to avoid "syntax disaster"\n\n                export default function App() {\n                  return (\n                    <>\n                      <button x-if={false}>Hello 1</button>\n                      <button x-else-if={false}>Hello 2</button>\n                      <button x-else>Hello 3</button>\n                    </>\n                  )\n                }\n              ')}})}),(0,p.jsx)(c.o5,{"data-hash":"classfor",children:(0,p.jsx)(m.Z,{css:"\n                  body {\n                    @apply flex h-screen justify-center items-center;\n                  }\n                ",features:["classFor()"],files:{"/App.jsx":(0,x.o)('\n                // Use `class` and `for` instead of `className` and `htmlFor`\n\n                export default function App() {\n                  return (\n                    <button class="bg-blue-500 text-white">\n                      Hello\n                    </button>\n                  )\n                }\n              ')}})}),(0,p.jsx)(c.o5,{"data-hash":"transpose",children:(0,p.jsx)(m.Z,{css:"\n                  body {\n                    @apply flex h-screen justify-center items-center;\n                  }\n\n                  button {\n                    @apply mx-3;\n                  }\n                ",features:["transpose()","classFor({ clsx: true })"],files:{"/App.jsx":(0,x.o)("\n                // Transpose wrapper components\n                import Tooltip from './Tooltip'\n\n                export default function App() {\n                  return ([\n                    // Tooltip 'contains' the button? Counterintuitive hierarchy\n                    <Tooltip title=\"Hello\">\n                      <button>Hover me 1</button>\n                    </Tooltip>,\n\n                    // Makes more sense, and easier to control it as a prop\n                    <button x-transpose={$ => <Tooltip title=\"Hello\">{$}</Tooltip>}>\n                      Hover me 2\n                    </button>\n                  ])\n                }"),"/Tooltip.jsx":(0,x.o)('\n                export default function Tooltip({ title, children }) {\n                  return (\n                    <div class="inline-block relative">\n                      <small class={[\n                        "absolute left-1/2 -translate-x-1/2 bottom-full mb-2",\n                        "bg-slate-600 text-white px-1 rounded hidden"\n                      ]}>\n                        {title}\n                      </small>\n                      <div class="[:has(~&:hover)]:block">\n                        {children}\n                      </div>\n                    </div>\n                  )\n                }')}})}),(0,p.jsx)(c.o5,{"data-hash":"hrefhandler",children:(0,p.jsx)(m.Z,{css:"\n                  body {\n                    @apply flex h-screen justify-center items-center;\n                  }\n\n                  a {\n                    @apply underline block text-blue-600;\n                  }\n                ",features:["hrefHandler({\n                    navigate: (href) => {\n                      alert(`Navigating to ${href} with React Beyond`)\n                    }\n                  })"],files:{"/App.jsx":(0,x.o)('\n                  // Use `<a href=` elements for SPA navigation\n                  export default function App() {\n                    const navigate = (href) => {\n                      alert(`Navigating to ${href}`)\n                    }\n\n                    return ([\n                      // Instead of this...\n                      <a href="/link1" onClick={(e) => {\n                        e.preventDefault()\n                        navigate("/link1")\n                      }}>Link 1</a>,\n\n                      // ...you can do this\n                      <a href="/link2">Link 2</a>\n                    ])\n                  }')}})}),(0,p.jsx)(c.o5,{"data-hash":"errorfallback",children:(0,p.jsx)(m.Z,{css:"\n                  body {\n                    @apply flex h-screen justify-center items-center;\n                  }\n                ",features:["errorFallback()"],files:{"/App.jsx":(0,x.o)('\n                // Automatic error fallback\n                export default function App() {\n                  // comment;me;out;\n                  return (\n                    <div className="flex flex-col gap-2">\n                      <button>Hello</button>\n                      <BadComponent />\n                    </div>\n                  )\n                }\n\n                function BadComponent() {\n                  comment;me;out;\n                  return (\n                    <button>Bad component \ud83d\udc80</button>\n                  )\n                }\n              ')}})}),(0,p.jsx)(c.o5,{"data-hash":"hoc",children:(0,p.jsx)(m.Z,{css:"\n                  body {\n                    @apply flex h-screen justify-center items-center;\n                  }\n                ",features:["hoc(observer)"],files:{"/index.jsx":{code:(0,x.o)("import { StrictMode } from 'react'\n                      import { createRoot } from 'react-dom/client'\n                      import { Beyond } from 'react-beyond'\n                      import { hoc } from '@react-beyond/hoc'\n                      import { observer } from 'mobx-react-lite'\n\n                      import App from './App'\n                      import './styles.css'\n\n                      createRoot(document.getElementById('root')).render(\n                        <StrictMode>\n                          <Beyond features={[hoc(observer)]}>\n                            <App />\n                          </Beyond>\n                        </StrictMode>\n                      )")},"/App.jsx":(0,x.o)("\n                    import { store } from './store'\n\n                    // Components are automatically wrapped with `observer()`\n                    export default function App() {\n                      return (\n                        <button onClick={() => { store.counter++ }}>\n                          Counter {store.counter}\n                        </button>\n                      )\n                    }\n                  "),"/store.js":(0,x.o)("\n                    import { makeAutoObservable } from 'mobx'\n\n                    export const store = makeAutoObservable({\n                      counter: 0\n                    })")}})}),(0,p.jsx)(c.o5,{"data-hash":"rxjs",children:(0,p.jsx)(m.Z,{css:"\n                  body {\n                    @apply flex h-screen justify-center items-center;\n                  }\n                ",features:["rxjs()"],files:{"/App.jsx":(0,x.o)("\n                    // Show RxJS stream values as React children\n                    import { counter$, counterSubject } from './store'\n\n                    export default function App() {\n                      return (\n                        <button onClick={() => { counterSubject.next(1) }}>\n                          Counter {counter$}\n                        </button>\n                      )\n                    }\n                  "),"/store.js":(0,x.o)("\n                    import { ReplaySubject, scan, startWith } from 'rxjs'\n\n                    export const counterSubject = new ReplaySubject()\n                    export const counter$ = counterSubject.pipe(\n                      scan((count, value) => count + 1, 0),\n                      startWith(0)\n                    )")}})})]})}),(0,p.jsx)(h,{"x-transpose":e=>(0,p.jsx)("div",{class:"mt-10",children:e})}),(0,p.jsx)("div",{class:[b.buttons,"mb-10"],children:(0,p.jsx)(o.Z,{className:"button button--secondary button--lg",to:"/docs/category/gallery",children:"Check out the Gallery \ud83d\uddbc\ufe0f"})})]})]})}}}]);