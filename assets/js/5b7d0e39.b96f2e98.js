"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[301],{7242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(5893),i=n(3905);const o={slug:"announcing-react-beyond",title:"Announcing React Beyond",authors:["sarimarton"],tags:[],date:new Date("2023-11-05T10:00:00.000Z")},s=void 0,a={permalink:"/blog/announcing-react-beyond",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-05-announcement/index.mdx",source:"@site/blog/2023-11-05-announcement/index.mdx",title:"Announcing React Beyond",description:"I've read on twitter recently how funny someone finds the royal 'we' when a solo developer creates a library and communicates from behind it. Funny it is, we made it.",date:"2023-11-05T10:00:00.000Z",formattedDate:"November 5, 2023",tags:[],readingTime:2.625,hasTruncateMarker:!1,authors:[{name:"Marton Sari",title:"React Beyond",url:"https://github.com/sarimarton",imageURL:"https://github.com/sarimarton.png",key:"sarimarton"}],frontMatter:{slug:"announcing-react-beyond",title:"Announcing React Beyond",authors:["sarimarton"],tags:[],date:"2023-11-05T10:00:00.000Z"},unlisted:!1,prevItem:{title:"Beyond is ready for React 19",permalink:"/blog/react-19"}},c={authorsImageUrls:[void 0]},l=[{value:"Real-world problems",id:"real-world-problems",level:2},{value:"Prior art",id:"prior-art",level:2}];function h(e){const t=Object.assign({p:"p",em:"em",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",a:"a"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["I've read on twitter recently how funny someone finds the royal 'we' when a solo developer creates a library and communicates from behind it. Funny it is, ",(0,r.jsx)(t.em,{children:"we"})," made it."]}),"\n",(0,r.jsx)(t.p,{children:"React Beyond, in a nutshell, is a simple tool letting you create higher-order components, which recursively re-apply themselves on the components in the result JSX. It seemlessly penetrates through component boundaries."}),"\n",(0,r.jsx)(t.p,{children:"It feels magical, but really isn't magic. React is a functional library (set aside the hook discourse now). Functions, which return JSX, which reference other functions, which return JSX, and so on. This very fact makes it possible to not only create simple higher-order components, but ones with a recursive nature. It \"infects\" the entire tree under the component it's applied to."}),"\n",(0,r.jsx)(t.h2,{id:"real-world-problems",children:"Real-world problems"}),"\n",(0,r.jsx)(t.p,{children:"React is lovely, but it has its annoyances."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["It all starts with the ",(0,r.jsx)(t.code,{children:"className"})," prop... instead of ",(0,r.jsx)(t.code,{children:"class"})," for ",(0,r.jsx)("strike",{children:"no"})," historical reasons."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Then you have the conditionals in JSX. As Ryan Florence said once, the \"syntax disaster\". JSX is brilliant in that it's not a template, so we don't have to put expressions in strings (which is ugly too), but breaking the XML hierarchy with JS language structures is just an illness."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Then you have the mandatory HOC wrappings in some state management libraries, which need to know the start-end points of the render phase. You might've seen the ",(0,r.jsx)(t.code,{children:"observer()"})," HOC from MobX. And you might've been turned away by the necessity of wrapping all your component declarations in ",(0,r.jsx)(t.code,{children:"observer()"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Lastly, to me maybe the most annoying one, code like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"<Tooltip text=\"hi\">\n  <Button onClick={() => alert('hi')}>Hi</Button>\n</Tooltip>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This is severely unintuitive. Why? Because it ",(0,r.jsx)(t.em,{children:"obscuscates the containment logic"}),". It elevates a secondary feature above the main functionality. The app works without the tooltip, but not without the button. Still, the tooltip is the boss. The same applies to all kinds of floating components, and to some level, non-representational components too, like an ErrorBoundary."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"With React Beyond, you can get past these sorts of problems effortlessly."}),"\n",(0,r.jsx)(t.p,{children:"But it turns out it provides a lot more than that. Heck, you can even create your own framework or renderer on top of React with it..."}),"\n",(0,r.jsx)(t.h2,{id:"prior-art",children:"Prior art"}),"\n",(0,r.jsxs)(t.p,{children:["There has been many attempts actually to add directives to React, and the interest is definitely ",(0,r.jsx)(t.a,{href:"https://stackoverflow.com/questions/30408586/what-is-the-react-equivalent-of-an-angular-directive-that-only-works-on-attribut",children:"there"}),", but these implementations are limited to a very narrow feature set, and are ill-born for different reasons. Let's see a few:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/peakchen90/babel-plugin-react-directives",children:"https://github.com/peakchen90/babel-plugin-react-directives"})," - Core Vue directives, but with a babel plugin."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/baeyun/directive-x",children:"https://github.com/baeyun/directive-x"})," - Babel plugin..."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/mkhstar/react-directive",children:"https://github.com/mkhstar/react-directive"})," - Not a plugin, but the API is tortuous: ",(0,r.jsx)(t.code,{children:"<directive.div dirIf={...}>"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/laurci/react-directive-attributes",children:"https://github.com/laurci/react-directive-attributes"})," - Overrides the React API, and it's bundler dependent."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/FullR/react-deep-map",children:"https://github.com/FullR/react-deep-map"})," - This is something usable, and the project is not dead, but it doesn't step beyond the obvious limitation that it only works on a static element tree."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"React Beyond"})," doesn't need bundler plugins, and is free of shenanigans. It simply leverages the fact that React is a ",(0,r.jsx)(t.em,{children:"functional"})," library. Note, that React Beyond ",(0,r.jsx)(t.em,{children:"does"})," provide a bundler plugin for Hot Module Reloading to work, just like React does, but it's not necessary for its functionality."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>l});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(n),p=i,m=u["".concat(c,".").concat(p)]||u[p]||h[p]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));d.displayName="MDXCreateElement"}}]);