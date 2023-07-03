import React from 'react'
import { Sandpack } from '@codesandbox/sandpack-react'
import { dracula, atomDark } from '@codesandbox/sandpack-themes'

export default () => {
  return (
    <Sandpack
      options={{
        showTabs: true
      }}
      theme={dracula}
      template="vite-react"
      customSetup={{
        dependencies: {
          'react-beyond': 'latest',
          '@react-beyond/classfor': 'latest',
          '@react-beyond/clsx': 'latest',
          '@react-beyond/errorfallback': 'latest',
          '@react-beyond/hrefhandler': 'latest',
          '@react-beyond/ifelse': 'latest',
          '@react-beyond/loader': 'latest',
          '@react-beyond/menu': 'latest',
          '@react-beyond/mobx': 'latest',
          '@react-beyond/tooltip': 'latest',
          '@react-beyond/transpose': 'latest',
          '@react-beyond/tw': 'latest'
        }
      }}
      files={{
        '/vite.config.js': {
          hidden: true,
          code: `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactBeyond from 'react-beyond/plugin/vite'

export default defineConfig({
  plugins: [react(), reactBeyond()],
});
`
        },
        '/index.jsx': {
          code: `import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Beyond } from 'react-beyond'
import { ifElse } from '@react-beyond/ifelse'

import App from "./App"

const root = createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <Beyond hocs={[ifElse()]}>
      <App />
    </Beyond>
  </StrictMode>
)`
        },
        '/App.jsx': `export default function App() {
  return (<>
    <button x-if={false}>Hello 1</button>
    <button x-else-if={false}>Hello 2</button>
    <button x-else>Hello 3</button>
  </>)
}`
      }}
    />
  )
}
