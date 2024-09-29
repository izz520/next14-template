import React, { PropsWithChildren } from 'react'

import { WagmiProvider } from 'wagmi'

import config from '@/libs/wagmiConfig'

const Wagmi = ({ children }: PropsWithChildren) => {
  return <WagmiProvider config={config}>{children}</WagmiProvider>
}

export default Wagmi
