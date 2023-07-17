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
import HomepageFeatures from '../components/HomepageFeatures'
import Sandpack from '../components/Sandpack'

import { removeIndent } from '../components/util'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
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
    <Beyond features={[onChildren(), tw()]}>
      <Layout
        title={`${siteConfig.title}`}
        description="Recursive higher-order components for React"
      >
        <HomepageHeader />
        <main className="p-10">
          <p>
            React Beyond lets you define features that are available to an
            entire subtree with all the descendant components. It provides a
            foundation for tools to create more intuitive code.
          </p>
          <div
            x-tw={[
              'flex mb-2 py-2',
              '[&>*]:mx-2 [&>*]:cursor-pointer',
              '[&>*]:border-solid [&>*]:border-transparent',
              '[&>.active]:border-b [&>.active]:border-b-purple-600'
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
            <button>Tailwind</button>
          </div>
          <Swiper
            onSwiper={setSwiperRef}
            lazy={true}
            spaceBetween={30}
            speed={750}
          >
            <SwiperSlide>
              <Sandpack
                css={`
                  body {
                    @apply flex h-screen justify-center items-center;
                  }
                `}
                features={['ifElse']}
                files={{
                  '/App.jsx': removeIndent(`
                // Vue-like if/else directives

                export default function App() {
                  return (
                    <>
                      <button x-if={false}>❌ Hello 1</button>
                      <button x-else-if={false}>❌ Hello 2</button>
                      <button x-else>Hello 3</button>
                    </>
                  )
                }
              `)
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Sandpack
                css={`
                  body {
                    @apply flex h-screen justify-center items-center;
                  }
                `}
                features={['tw']}
                files={{
                  '/App.jsx': removeIndent(`
                // Tailwind "x-tw" props

                export default function App() {
                  return (
                    <button x-tw="bg-blue-500 text-white">Hello</button>
                  )
                }
              `)
                }}
              />
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
          <div
            x-tw={[
              'flex mb-2 py-2',
              '[&>*]:mx-2 [&>*]:cursor-pointer',
              '[&>*]:border-solid [&>*]:border-transparent',
              '[&>.active]:border-b [&>.active]:border-b-purple-600'
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
            <button>Tailwind</button>
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
            Up to you. But it's not really magic. React's fundamentals pretty
            much allow this pattern, and you're never in the dark: you have full
            TypeScript support, and you can see the applied HOCs in React
            DevTools!
          </p>
        </main>
      </Layout>
    </Beyond>
  )
}
