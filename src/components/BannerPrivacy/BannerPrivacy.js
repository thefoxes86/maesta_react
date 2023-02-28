import './bannerprivacy.scss'
import Cookies from 'js-cookie'
import { useEffect, useRef, useState } from 'react'

const BannerPrivacy = () => {
  const [showBanner, setShowBanner] = useState(false)
  const ref = useRef()
  const handleCookies = () => {
    setShowBanner(false)
    Cookies.set('bannerprivacy', true, { expires: 30 })
  }

  useEffect(() => {
    let check = Cookies.get('bannerprivacy')

    let screenHeight = window.innerHeight
    let screenWidth = window.innerWidth

    if (screenWidth <= 768 && ref.current) {
      ref.current.style.top = screenHeight - 50 + 'px'
    }

    if (!check || check === undefined) {
      setShowBanner(true)
    } else {
      setShowBanner(false)
    }
  }, [])
  return (
    <>
      {showBanner ? (
        <div className="banner-privacy" ref={ref}>
          <p>
            Su questo sito potrebbero essere utilizzati cookies di terze parti.
            Noi teniamo alla tua privacy.{' '}
            <a href="/privacy-policy">Leggi di più</a>
          </p>
          <div className="buttonCookies" onClick={handleCookies}>
            Accetta e prosegui
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default BannerPrivacy
