import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { onChildren } from '@react-beyond/onchildren'
import { tw } from '@react-beyond/tw'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import React, { useState, useRef } from 'react'
import { Beyond } from 'react-beyond'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, HashNavigation } from 'swiper/modules'
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
          possibilities in React to create more intuitive code.
        </p>
        <div
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
          <button>If/else</button>
          <button>Class</button>
          {/* <button>Tailwind</button> */}
          <button>Transpose</button>
          <button>Error fallback</button>
          <button>Loader</button>
          <button>On children</button>
          <button>Menu</button>
          <button>Observer</button>
          <button>RxJS</button>
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
                }

                function Tooltip({ title, children }) {
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
                }

              `)
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
                  return (
                    <div className="flex flex-col gap-2">
                      <button>Hello</button>
                      <Inner />
                    </div>
                  )
                }

                function Inner() {
                  fortune;favors;the;brave
                  return (
                    <button>Bad component 💀</button>
                  )
                }

              `)
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <HomepageFeatures />
        <div className={styles.buttons} style={{ margin: '40px' }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/gallery"
          >
            Check out the Gallery 🖼️
          </Link>
        </div>
        <hr />
        <h3>Wait, but doesn't it slow everything down?</h3>
        <p>
          Not at all. While it naturally has some overhead, the difference is
          negligable. Your app will keep the exact same performance
          characteristics.
        </p>
        <h3>Okay, but it surely breaks Fast Refresh</h3>
        <p>
          Not at all! We have a Vite plugin that makes it work seamlessly. And
          adding support for other bundlers is easy.
        </p>
        <h3>Is it some dark magic? I don't like magic!</h3>
        <p>
          Up to you. But it's not really magic. React's fundamentals pretty much
          allow this pattern, and you're never in the dark: you have full
          TypeScript support, and you can see the applied HOCs in React
          DevTools!
        </p>
      </main>
    </Layout>
  )
}
