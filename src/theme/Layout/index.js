import React from 'react'
import Layout from '@theme-original/Layout'

import { Beyond } from 'react-beyond'

import { onChildren } from '@react-beyond/onchildren'
import { classFor } from '@react-beyond/classfor'
import { clsx } from '@react-beyond/clsx'
import { errorFallback } from '@react-beyond/errorfallback'
import { hrefHandler } from '@react-beyond/hrefhandler'
import { ifElse } from '@react-beyond/ifelse'
import { loader } from '@react-beyond/loader'
import { menu } from '@react-beyond/menu'
import { tooltip } from '@react-beyond/tooltip'
import { transpose } from '@react-beyond/transpose'
import { tw } from '@react-beyond/tw'
import { hoc } from '@react-beyond/hoc'
import { rxjs } from '@react-beyond/rxjs'

export default function LayoutWrapper(props) {
  return (
    <Beyond features={[onChildren(), tw(), classFor({ clsx: true })]}>
      <Layout {...props} />
    </Beyond>
  )
}
