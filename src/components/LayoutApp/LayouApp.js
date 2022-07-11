import React, { useEffect } from 'react'
import Header from '../Header'
import { enablePageScroll } from 'scroll-lock'
import BannerPrivacy from '../BannerPrivacy'

export default function LayoutApp({ meta, children }) {
  useEffect(() => {
    enablePageScroll()
  })
  return (
    <div>
      <Header meta={meta} />
      <BannerPrivacy />
      {children}
    </div>
  )
}
