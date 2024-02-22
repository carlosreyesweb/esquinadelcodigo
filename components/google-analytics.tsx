import Script from "next/script"
import { Fragment } from "react"

export function GoogleAnalytics({ gaID }: { gaID: string }) {
  return (
    <Fragment>
      <Script
        id="gtag"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`}
      />
      <Script id="gtag-init">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaID}');`}
      </Script>
    </Fragment>
  )
}
