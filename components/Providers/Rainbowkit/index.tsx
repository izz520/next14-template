import React, { PropsWithChildren } from 'react'

import { RainbowKitProvider } from '@rainbow-me/rainbowkit'

const Rainbowkit = ({ children }: PropsWithChildren) => {
  return <RainbowKitProvider>{children}</RainbowKitProvider>
}

export default Rainbowkit
