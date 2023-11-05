"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"announcing-react-beyond","metadata":{"permalink":"/blog/announcing-react-beyond","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-05-announcement/index.mdx","source":"@site/blog/2023-11-05-announcement/index.mdx","title":"Announcing React Beyond","description":"I\'ve read on twitter recently how funny someone finds the royal \'we\' when a solo developer creates a library and communicates from behind it. Funny it is, we made it.","date":"2023-11-05T10:00:00.000Z","formattedDate":"November 5, 2023","tags":[],"readingTime":2.625,"hasTruncateMarker":false,"authors":[{"name":"Marton Sari","title":"React Beyond","url":"https://github.com/sarimarton","imageURL":"https://github.com/sarimarton.png","key":"sarimarton"}],"frontMatter":{"slug":"announcing-react-beyond","title":"Announcing React Beyond","authors":["sarimarton"],"tags":[],"date":"2023-11-05T10:00:00.000Z"},"unlisted":false},"content":"I\'ve read on twitter recently how funny someone finds the royal \'we\' when a solo developer creates a library and communicates from behind it. Funny it is, _we_ made it.\\n\\nReact Beyond, in a nutshell, is a simple tool letting you create higher-order components, which recursively re-apply themselves on the components in the result JSX. It seemlessly penetrates through component boundaries.\\n\\nIt feels magical, but really isn\'t magic. React is a functional library (set aside the hook discourse now). Functions, which return JSX, which reference other functions, which return JSX, and so on. This very fact makes it possible to not only create simple higher-order components, but ones with a recursive nature. It \\"infects\\" the entire tree under the component it\'s applied to.\\n\\n## Real-world problems\\n\\nReact is lovely, but it has its annoyances.\\n\\n- It all starts with the `className` prop... instead of `class` for <strike>no</strike> historical reasons.\\n\\n- Then you have the conditionals in JSX. As Ryan Florence said once, the \\"syntax disaster\\". JSX is brilliant in that it\'s not a template, so we don\'t have to put expressions in strings (which is ugly too), but breaking the XML hierarchy with JS language structures is just an illness.\\n\\n- Then you have the mandatory HOC wrappings in some state management libraries, which need to know the start-end points of the render phase. You might\'ve seen the `observer()` HOC from MobX. And you might\'ve been turned away by the necessity of wrapping all your component declarations in `observer()`.\\n\\n- Lastly, to me maybe the most annoying one, code like this:\\n\\n    ```jsx\\n    <Tooltip text=\\"hi\\">\\n      <Button onClick={() => alert(\'hi\')}>Hi</Button>\\n    </Tooltip>\\n    ```\\n\\n    This is severely unintuitive. Why? Because it _obscuscates the containment logic_. It elevates a secondary feature above the main functionality. The app works without the tooltip, but not without the button. Still, the tooltip is the boss. The same applies to all kinds of floating components, and to some level, non-representational components too, like an ErrorBoundary.\\n\\nWith React Beyond, you can get past these sorts of problems effortlessly.\\n\\nBut it turns out it provides a lot more than that. Heck, you can even create your own framework or renderer on top of React with it...\\n\\n## Prior art\\n\\nThere has been many attempts actually to add directives to React, and the interest is definitely [there](https://stackoverflow.com/questions/30408586/what-is-the-react-equivalent-of-an-angular-directive-that-only-works-on-attribut ), but these implementations are limited to a very narrow feature set, and are ill-born for different reasons. Let\'s see a few:\\n\\n- https://github.com/peakchen90/babel-plugin-react-directives - Core Vue directives, but with a babel plugin.\\n- https://github.com/baeyun/directive-x - Babel plugin...\\n- https://github.com/mkhstar/react-directive - Not a plugin, but the API is tortuous: `<directive.div dirIf={...}>`.\\n- https://github.com/laurci/react-directive-attributes - Overrides the React API, and it\'s bundler dependent.\\n- https://github.com/FullR/react-deep-map - This is something usable, and the project is not dead, but it doesn\'t step beyond the obvious limitation that it only works on a static element tree.\\n\\n*React Beyond* doesn\'t need bundler plugins, and is free of shenanigans. It simply leverages the fact that React is a *functional* library. Note, that React Beyond *does* provide a bundler plugin for Hot Module Reloading to work, just like React does, but it\'s not necessary for its functionality."}]}')}}]);