import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { arbitrum, base, mainnet, optimism, polygon } from 'wagmi/chains'

import '@rainbow-me/rainbowkit/styles.css'

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'b2fa0e763a668a3e6162e12eec12b424',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
})

export default config
