import './bannerprivacy.scss'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const BannerPrivacy = () => {
  const [showBanner, setShowBanner] = useState(true)
  const handleCookies = () => {
    setShowBanner(false)
    Cookies.set('bannerprivacy', true, { expires: 30 })
  }

  useEffect(() => {
    let check = Cookies.get('bannerprivacy')
    console.log('check', check)

    if (!check || check === undefined) {
      setShowBanner(true)
    } else {
      setShowBanner(false)
    }
  }, [])
  return (
    <>
      {showBanner ? (
        <div className="banner-privacy">
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
