import Frame from '@/layouts/frame/Frame'
import '@/styles/globals.css'
import dayjs from 'dayjs'
import es from 'dayjs/locale/es'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { DefaultSeo, NextSeoProps } from 'next-seo'
import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'
import { GoogleAnalytics } from 'nextjs-google-analytics'
dayjs.locale(es)
dayjs.extend(localizedFormat)

const openSansFont = Open_Sans({
  subsets: ['latin'],
})

const DEFAULT_SEO: NextSeoProps = {
  twitter: {
    site: '@carlosreyesweb',
    cardType: 'summary_large_image',
  },
  themeColor: '#0d1017',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/images/icons/favicon.ico',
    },
  ],
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            --open-sans: ${openSansFont.style.fontFamily};
          }
        `}
      </style>
      <GoogleAnalytics trackPageViews />
      <DefaultSeo {...DEFAULT_SEO} />
      <Frame>
        <Component {...pageProps} />
      </Frame>
    </>
  )
}
