import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import React, { useLayoutEffect, useRef, useState } from 'react'
import 'swiper/css'
import { HashNavigation, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import HomepageFeatures from '../components/HomepageFeatures'
import Sandpack from '../components/Sandpack'

import { removeIndent } from '../components/util'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      x-tw="[[data-theme=dark]_&]:bg-transparent !pt-12 !pb-4"
    >
      <div className="container">
        <img
          src="/img/logo.svg"
          style={{
            position: 'absolute',
            transform: 'translate(-330px, -70px) scale(.4)'
          }}
        />
        <div style={{ position: 'relative' }}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/guide/getting-started"
            >
              Getting Started ⏱️
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  const [tab, setTab] = useState(0)
  // const swiperRef = useRef()
  const [swiperRef, setSwiperRef] = useState(null)

  const location = typeof window !== 'undefined' ? window.location : { hash: '' }

  const tabsRef = useRef()

  // The normal class={...} logic doesn't work with SSG for some reason...
  useLayoutEffect(() => {
    tabsRef.current.querySelector('.active')?.classList?.remove?.('active')
    tabsRef.current.querySelector(`[data-item=${location.hash.slice(1)}]`).classList.add('active')
  }, [tabsRef.current])

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Recursive higher-order components for React"
    >
      <HomepageHeader />
      <main className="p-10">
        <p class="">
          {/* React Beyond lets you define features that are available to an entire
          subtree with all the descendant components. It provides a foundation
          for tools to create more intuitive code. */}
          React Beyond lets you define higher-order components which recursively
          re-apply themselves on the child components. You can create features
          that are available to the entire tree. It opens up new exciting
          possibilities in React to create more intuitive code. Here are a few
          examples:
        </p>
        <div
          ref={tabsRef}
          x-tw={[
            'flex mb-2 py-3',
            '[&>*]:apply-[pb-1,cursor-pointer,border-solid,border-transparent,border-b-2,border-[20px]]',
            '[&>.active]:apply-[border-b,border-b-[var(--marcika-tint)]]'
            // 'shadow-xl'
          ]}
          x-on-children={(idx) => ({
            'onClick': (ev) => {
              setTab(idx)
              swiperRef.slideTo(idx)
            },
            'x-tw': [tab === idx && 'active']
          })}
        >
          <button
            class={
              console.log(location.hash),
              (location.hash === '' || location.hash === '#ifelse') && 'active'
            }
            data-item='ifelse'
          >
            If/else
          </button>
          <button class={location.hash === '#classfor' && 'active'} data-item='classfor'>
            Class
          </button>
          {/* <button>Tailwind</button> */}
          <button class={location.hash === '#transpose' && 'active'} data-item='transpose'>
            Transpose
          </button>
          <button class={location.hash === '#hrefhandler' && 'active'} data-item='hrefhandler'>
            Href handler
          </button>
          <button class={location.hash === '#errorfallback' && 'active'} data-item='errorfallback'>
            Error fallback
          </button>
          {/* <button>Loader</button> */}
          {/* <button>On children</button> */}
          {/* <button>Menu</button> */}
          <button class={location.hash === '#hoc' && 'active'} data-item='hoc'>
            MobX observer
          </button>
          <button class={location.hash === '#rxjs' && 'active'} data-item='rxjs'>RxJS</button>
          {/* <button>Lazy render</button> */}
        </div>
        <div class="xshadow-[0_5px_40px_rgba(0,0,255,1)]">
          <Swiper
            onSwiper={setSwiperRef}
            lazy={true}
            spaceBetween={30}
            speed={750}
            allowTouchMove={false}
            modules={[Navigation, HashNavigation]}
            navigation={true}
            hashNavigation={{
              watchState: true
            }}
            className=""
            x-tw={[
              'shadow-[0_5px_250px_rgba(var(--marcika-tint-rgb),0.15)]',
              'bg-[rgba(var(--marcika-tint-rgb,0.6))]'
            ]}
          >
            <SwiperSlide data-hash="ifelse">
              <Sandpack
                css={`
                  body {
                    @apply flex h-screen justify-center items-center;
                  }
                `}
                features={['ifElse()']}
                files={{
                  '/App.jsx': removeIndent(`
                // Vue-like if/else directives
                // to avoid "syntax disaster"

                export default function App() {
                  return (
                    <>
                      <button x-if={false}>Hello 1</button>
                      <button x-else-if={false}>Hello 2</button>
                      <button x-else>Hello 3</button>
                    </>
                  )
                }
              `)
                }}
              />
            </SwiperSlide>
            <SwiperSlide data-hash="classfor">
              <Sandpack
                css={`
                  body {
                    @apply flex h-screen justify-center items-center;
                  }
                `}
                features={['classFor()']}
                files={{
                  '/App.jsx': removeIndent(`
                // Use \`class\` and \`for\` instead of \`className\` and \`htmlFor\`

                export default function App() {
                  return (
                    <button class="bg-blue-500 text-white">
                      Hello
                    </button>
                  )
                }
              `)
                }}
              />
            </SwiperSlide>
            <SwiperSlide data-hash="transpose">
              <Sandpack
                css={`
                  body {
                    @apply flex h-screen justify-center items-center;
                  }

                  button {
                    @apply mx-3;
                  }
                `}
                features={['transpose()', 'classFor({ clsx: true })']}
                files={{
                  '/App.jsx': removeIndent(`
                // Transpose wrapper components
                import Tooltip from './Tooltip'

                export default function App() {
                  return ([
                    // Tooltip 'contains' the button? Counterintuitive hierarchy
                    <Tooltip title="Hello">
                      <button>Hover me 1</button>
                    </Tooltip>,

                    // Makes more sense, and easier to control it as a prop
                    <button x-transpose={$ => <Tooltip title="Hello">{$}</Tooltip>}>
                      Hover me 2
                    </button>
                  ])
                }`),
                '/Tooltip.jsx': removeIndent(`
                export default function Tooltip({ title, children }) {
                  return (
                    <div class="inline-block relative">
                      <small class={[
                        "absolute left-1/2 -translate-x-1/2 bottom-full mb-2",
                        "bg-slate-600 text-white px-1 rounded hidden"
                      ]}>
                        {title}
                      </small>
                      <div class="[:has(~&:hover)]:block">
                        {children}
                      </div>
                    </div>
                  )
                }`)
                }}
              />
            </SwiperSlide>
            <SwiperSlide data-hash="hrefhandler">
              <Sandpack
                css={`
                  body {
                    @apply flex h-screen justify-center items-center;
                  }

                  a {
                    @apply underline block text-blue-600;
                  }
                `}
                features={[`hrefHandler({
                    navigate: (href) => {
                      alert(\`Navigating to \${href} with React Beyond\`)
                    }
                  })`]}
                files={{
                  '/App.jsx': removeIndent(`
                  // Use \`<a href=\` elements for SPA navigation
                  export default function App() {
                    const navigate = (href) => {
                      alert(\`Navigating to \${href}\`)
                    }

                    return ([
                      // Instead of this...
                      <a href="/link1" onClick={(e) => {
                        e.preventDefault()
                        navigate("/link1")
                      }}>Link 1</a>,

                      // ...you can do this
                      <a href="/link2">Link 2</a>
                    ])
                  }`),
                }}
              />
            </SwiperSlide>
            <SwiperSlide data-hash="errorfallback">
              <Sandpack
                css={`
                  body {
                    @apply flex h-screen justify-center items-center;
                  }
                `}
                features={[`errorFallback()`]}
                files={{
                  '/App.jsx': removeIndent(`
                // Automatic error fallback
                export default function App() {
                  // comment;me;out;
                  return (
                    <div className="flex flex-col gap-2">
                      <button>Hello</button>
                      <BadComponent />
                    </div>
                  )
                }

                function BadComponent() {
                  comment;me;out;
                  return (
                    <button>Bad component 💀</button>
                  )
                }
              `)
                }}
              />
            </SwiperSlide>
            <SwiperSlide data-hash="hoc">
              <Sandpack
                css={`
                  body {
                    @apply flex h-screen justify-center items-center;
                  }
                `}
                features={[`hoc(observer)`]}
                files={{
                  '/index.jsx': {
                    code: removeIndent(
                      `import { StrictMode } from 'react'
                      import { createRoot } from 'react-dom/client'
                      import { Beyond } from 'react-beyond'
                      import { hoc } from '@react-beyond/hoc'
                      import { observer } from 'mobx-react-lite'

                      import App from './App'
                      import './styles.css'

                      createRoot(document.getElementById('root')).render(
                        <StrictMode>
                          <Beyond features={[hoc(observer)]}>
                            <App />
                          </Beyond>
                        </StrictMode>
                      )`
                    )
                  },
                  '/App.jsx': removeIndent(`
                    import { store } from './store'

                    // Components are automatically wrapped with \`observer()\`
                    export default function App() {
                      return (
                        <button onClick={() => { store.counter++ }}>
                          Counter {store.counter}
                        </button>
                      )
                    }
                  `),
                  '/store.js': removeIndent(`
                    import { makeAutoObservable } from 'mobx'

                    export const store = makeAutoObservable({
                      counter: 0
                    })`)
                }}
              />
            </SwiperSlide>
            <SwiperSlide data-hash="rxjs">
              <Sandpack
                css={`
                  body {
                    @apply flex h-screen justify-center items-center;
                  }
                `}
                features={[`rxjs()`]}
                files={{
                  '/App.jsx': removeIndent(`
                    // Show RxJS stream values as React children
                    import { counter$, counterSubject } from './store'

                    export default function App() {
                      return (
                        <button onClick={() => { counterSubject.next(1) }}>
                          Counter {counter$}
                        </button>
                      )
                    }
                  `),
                  '/store.js': removeIndent(`
                    import { ReplaySubject, scan, startWith } from 'rxjs'

                    export const counterSubject = new ReplaySubject()
                    export const counter$ = counterSubject.pipe(
                      scan((count, value) => count + 1, 0),
                      startWith(0)
                    )`)
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <HomepageFeatures x-transpose={($) => <div class="mt-10">{$}</div>} />
        <div class={[styles.buttons, 'mb-10']}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/gallery"
          >
            Check out the Gallery 🖼️
          </Link>
        </div>
      </main>
    </Layout>
  )
}
