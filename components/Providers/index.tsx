'use client'

import React, { PropsWithChildren } from 'react'

import Rainbowkit from './Rainbowkit'
import ReactQuey from './ReactQuery'
import Wagmi from './Wagim'

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Wagmi>
      <ReactQuey>
        <Rainbowkit>{children}</Rainbowkit>
      </ReactQuey>
    </Wagmi>
  )
}

export default Providers
