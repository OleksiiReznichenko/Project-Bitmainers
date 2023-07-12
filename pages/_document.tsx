import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <title>TonMiners - Next-Gen NFT Game on TON Blockchain</title> */}

        <meta name="title" content="TonMiners - Next-Gen NFT Game on TON Blockchain" />
        <meta name="keywords"
          content="NFT game, TON Blockchain, TonMiners, mining, daily rewards, NFT collections, gameplay, cryptocurrency, crypto-game" />

        <meta name="description" 
          content="Join TonMiners, a unique NFT game on TON Blockchain! Experience mining, daily rewards, 
          engaging gameplay, and exclusive NFT collections. Start playing now!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ton.blackhole.gg/" />
        <meta property="og:title" content="TonMiners - Next-Gen NFT Game on TON Blockchain" />
        <meta property="og:description" 
          content="Join TonMiners, a unique NFT game on TON Blockchain! Experience mining, daily rewards, 
          engaging gameplay, and exclusive NFT collections. Start playing now!" />
        <meta property="og:image" content="https://ton.blackhole.gg/seoImage.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="TonMiners - Next-Gen NFT Game on TON Blockchain" />
        <meta property="twitter:description"
          content="Join TonMiners, a unique NFT game on TON Blockchain! Experience mining, daily rewards, 
          engaging gameplay, and exclusive NFT collections. Start playing now!" />
        <meta property="twitter:image" content="https://ton.blackhole.gg/seoImage.jpg" />


        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
        <script src="/SmoothScroll.min.js" />
        <script src="/librariesInit.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
