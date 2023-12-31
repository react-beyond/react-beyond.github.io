import React from 'react'
import { Sandpack } from '@codesandbox/sandpack-react'
import {
  amethyst,
  aquaBlue,
  atomDark,
  cobalt2,
  cyberpunk,
  dracula,
  ecoLight,
  freeCodeCampDark,
  githubLight,
  gruvboxDark,
  gruvboxLight,
  levelUp,
  monokaiPro,
  neoCyan,
  nightOwl,
  sandpackDark
} from '@codesandbox/sandpack-themes'

import { removeIndent } from './util'

var marcikaTheme = {
  colors: {
      surface1: "#282a36",
      surface2: "#44475a",
      surface3: "#44475a",
      clickable: "#6272a4",
      base: "#f8f8f2",
      disabled: "#6272a4",
      hover: "#f8f8f2",
      accent: "#bd93f9",
      error: "#f8f8f2",
      errorSurface: "#44475a"
  },
  syntax: {
      plain: "#f8f8f2",
      comment: {
          color: "#6272a4",
          fontStyle: "italic"
      },
      keyword: "#7fb2de",
      tag: "#7fb2de",
      punctuation: "#7fb2de",
      definition: "#f8f8f2",
      property: "#50fa7b",
      static: "#bd93f9",
      string: "#f1fa8c"
  },
  font: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
      size: "13px",
      lineHeight: "20px"
  }
};

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
        theme: marcikaTheme,
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
            '@react-beyond/hoc': 'latest',
            '@react-beyond/tooltip': 'latest',
            '@react-beyond/transpose': 'latest',
            '@react-beyond/tw': 'latest',
            '@react-beyond/rxjs': 'latest',
            'react-beyond': 'latest',
            'tailwindcss': '^3.3.2',

            // todo: make it local
            "mobx": "^6.10.0",
            "mobx-react-lite": "^4.0.3",
            "rxjs": "^7.8.1",
          }
        },
        files: {
        //   'package.json': {
        //     hidden: true,
        //     code: removeIndent(
        //       `{
        //         "scripts": {
        //           "dev": "vite",
        //           "build": "vite build",
        //           "preview": "vite preview"
        //         },
        //         "dependencies": {
        //           "react": "^18.2.0",
        //           "react-dom": "^18.2.0",
        //           "autoprefixer": "^10.4.14",
        //           "@react-beyond/classfor": "latest",
        //           "@react-beyond/clsx": "latest",
        //           "@react-beyond/errorfallback": "latest",
        //           "@react-beyond/hrefhandler": "latest",
        //           "@react-beyond/ifelse": "latest",
        //           "@react-beyond/loader": "latest",
        //           "@react-beyond/menu": "latest",
        //           "@react-beyond/mobx": "latest",
        //           "@react-beyond/tooltip": "latest",
        //           "@react-beyond/transpose": "latest",
        //           "@react-beyond/tw": "latest",
        //           "react-beyond": "latest",
        //           "tailwindcss": "^3.3.2"
        //         },
        //         "devDependencies": {
        //           "@vitejs/plugin-react": "3.1.0",
        //           "vite": "4.1.4",
        //           "esbuild-wasm": "0.17.12"
        //         }
        //       }`
        //     )
        //   },
        },
        files: {
          },
        files: {
          '/vite.config.js': {
            hidden: true,
            code: removeIndent(
              `import { defineConfig } from "vite";
              import react from "@vitejs/plugin-react";

              export default defineConfig(async function () {
                // Docusaurus doesn't work with "type": "module", and it would be needed for
                // the CodeSandBox click-out to work. Renaming the file to vite.config.mjs
                // almost solves the issue, but the sandbox template re-generates the stock
                // vite.config.js file, so we have to work with that. Dynamic import is a
                // workaround, because it can import CommonJS modules. Otherwise this would be
                // as simple as:
                // import reactBeyond from 'react-beyond/plugin/vite'
                // export default defineConfig({
                //   plugins: [react(), reactBeyond()],
                // });

                const reactBeyond = (await import('react-beyond/plugin/vite')).default
                return {
                  plugins: [react(), reactBeyond()]
                }
              })`
            )
          },
          '/tailwind.config.mjs': {
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
          '/postcss.config.mjs': {
            hidden: true,
            code: removeIndent(`
              import tailwind from 'tailwindcss'
              import autoprefixer from 'autoprefixer'
              import tailwindConfig from './tailwind.config.mjs'

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
            code: removeIndent(
              `import { StrictMode } from 'react'
              import { createRoot } from 'react-dom/client'
              import { Beyond } from 'react-beyond'
              ${(props.features || [])
                .map((f) => `import { ${f.trim().match(/^\w+/)[0]} } from '@react-beyond/${f.trim().match(/^\w+/)[0].toLowerCase()}'`)
                .join('\n              ')}

              import App from './App'
              import './styles.css'

              createRoot(document.getElementById('root')).render(
                <StrictMode>
                  <Beyond features={[${(props.features || [])
                    .map((f) => `${f}`)
                    .join(', ')}]}>
                    <App />
                  </Beyond>
                </StrictMode>
              )`
            )
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
