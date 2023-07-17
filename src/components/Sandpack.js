import React from 'react'
import { Sandpack } from '@codesandbox/sandpack-react'
import { dracula, atomDark } from '@codesandbox/sandpack-themes'
import { removeIndent } from './util'

export default function (props) {
  const code = props.code

  return (
    <Sandpack
      {...{
        options: {
          showTabs: true,
          editorHeight: '375px',
          // editorHeight: '300px',
          ...props.options
        },
        theme: dracula,
        template: 'vite-react',
        customSetup: {
          dependencies: {
            'autoprefixer': '^10.4.14',
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
            '@react-beyond/tw': 'latest',
            'react-beyond': 'latest',
            'tailwindcss': '^3.3.2',
          }
        },
        files: {
          '/vite.config.js': {
            hidden: true,
            code: removeIndent(
              `import { defineConfig } from 'vite'
              import react from '@vitejs/plugin-react'
              import reactBeyond from 'react-beyond/plugin/vite'

              export default defineConfig({
                plugins: [react(), reactBeyond()]
              })`
            )
          },
          '/tailwind.config.js': {
            hidden: true,
            code: removeIndent(`
              export default {
                content: [
                  "./**/*.{html,js,jsx,ts,tsx}",
                  "!./node_modules"
                ],
                theme: {
                  extend: {},
                },
                plugins: [],
              }
            `)
          },
          '/postcss.config.js': {
            hidden: true,
            code: removeIndent(`
              import tailwind from 'tailwindcss'
              import autoprefixer from 'autoprefixer'
              import tailwindConfig from './tailwind.config.js'

              export default {
                plugins: [tailwind(tailwindConfig), autoprefixer],
              }
            `)
          },
          '/styles.css': {
            hidden: true,
            code: removeIndent(`
              @tailwind base;
              @tailwind components;
              @tailwind utilities;

              button {
                @apply border border-slate-500 font-bold py-2 px-4 rounded;
              }

              ${props.css || ''}
            `)
          },
          '/index.jsx': {
            code: removeIndent(`
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Beyond } from 'react-beyond'
${(props.features || []).map((f) => `import { ${f} } from '@react-beyond/${f.toLowerCase()}'`).join('\n')}

import App from './App'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Beyond features={[${(props.features || []).map((f) => `${f}()`).join(', ')}]}>
      <App />
    </Beyond>
  </StrictMode>
)
`)
          },
          '/App.jsx': removeIndent(
            `export default function App() {
              return null
            }`
          ),
          ...props.files
        }
      }}
    />
  )
}
