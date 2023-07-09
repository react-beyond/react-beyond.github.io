import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: (
      <>
        <span style={{ color: '#0f0' }}>✓</span> 100% Pure React
      </>
    ),
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        React Beyond doesn't need bundler plugins or other compilation-time
        tooling. Features are simple higher-order components.
      </>
    )
  },
  {
    title: (
      <>
        <span style={{ color: '#0f0' }}>✓</span> TypeScript
      </>
    ),
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>Ctrl/Cmd + Click on a directive and you go straight to the definition</>
    )
  },
  {
    title: (
      <>
        <span style={{ color: '#0f0' }}>✓</span> HMR / Fast Refresh
      </>
    ),
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>Hot Module Replacement / React Fast Refresh works as expected</>
    )
  }
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
