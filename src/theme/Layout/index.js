import React from 'react'
import Layout from '@theme-original/Layout'
import { Beyond } from 'react-beyond'
import { onChildren } from '@react-beyond/onchildren'
import { tw } from '@react-beyond/tw'

export default function LayoutWrapper(props) {
  return (
    <Beyond features={[onChildren(), tw()]}>
      <Layout {...props} />
    </Beyond>
  )
}
