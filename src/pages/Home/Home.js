import React, { useEffect, useState } from 'react'
import FetchApi from '../../lib/fetchApi'
import TransitionPages from '../../components/TransitionPages'
import '../../assets/js/scrollingImagesEffect'
import ParallaxProduct from '../../components/ParallaxProduct'
import { getScrollPage } from '../../assets/js/scrollingImagesEffect'
import Parallax from '../../components/Parallax'
import { motion } from 'framer-motion'
import ButtonsProducts from '../../components/ButtonsProducts'
import Path from '../../components/Path'
import Product from '../../components/Product'
import Text from '../../components/Text'
import Form from '../../components/Form'
import LayoutApp from '../../components/LayoutApp'
import { pathBackend } from '../../lib/pathBackend'
import Loader from '../../components/Loader'

const ID = 132

export default function Home(props) {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState()
  const [img, setImg] = useState()
  useEffect(() => {
    FetchApi(`${pathBackend}/wp-json/wp/v2/pages/${ID}`, {
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
    }).then(data => {
      setPage(data)

      FetchApi(`${pathBackend}/wp-json/wp/v2/media/${data.featured_media}`, {
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
      }).then(imgRes => {
        setImg(imgRes)
        setLoading(false)
      })
    })
  }, [loading])
  !loading && getScrollPage()
  return (
    <LayoutApp meta={page}>
      <TransitionPages>
        {!loading ? (
          <React.Fragment>
            <div className="content content__first content--full">
              <div className="content__item content__item__first__right content--full-height">
                <div className="content__block__inner-page">
                  <div
                    dangerouslySetInnerHTML={{ __html: page.acf.intro_page }}
                    className="text__intro"
                  ></div>
                  <motion.img src="img/circle_home_top.png" />
                </div>
                <div className="content__item-imgwrap">
                  <div
                    className="content__item-img"
                    style={{
                      backgroundImage: `url(img/img__0.png)`,
                    }}
                  ></div>
                </div>

                <div className="content__item-path">
                  <svg
                    id="path__0"
                    data-name="path__0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1091.5"
                    height="754.375"
                    viewBox="0 0 1091.5 754.375"
                  >
                    <path
                      id="track__1"
                      data-name="track__1"
                      d="M0,0,1091.5,92.375v662L0,662Z"
                      fill="#252526"
                    />
                  </svg>
                </div>
              </div>

              {page.acf.item &&
                page.acf.item.map(field => {
                  switch (field.component) {
                    case 'Product':
                      return (
                        <Product
                          title={field.title}
                          text={field.description}
                          bgColor={field.bgcolor}
                        />
                      )

                    case 'Path':
                      return (
                        <Path
                          position={field.position}
                          title={field.title}
                          text={field.text}
                          link={field.link}
                          textLink={field.textLink}
                          image={field.bgimage.url}
                          pathColor={field.bgcolor}
                        />
                      )

                    case 'Buttons':
                      return <ButtonsProducts />

                    case 'ParallaxProduct':
                      return (
                        <ParallaxProduct
                          height={field.height}
                          background={field.bgimage.url}
                        />
                      )

                    case 'Parallax':
                      return (
                        <Parallax
                          title={field.title}
                          height={field.height}
                          background={field.bgimage.url}
                        />
                      )

                    case 'Text':
                      return (
                        <Text
                          text={field.text}
                          position={field.position}
                          showlogomountain={field.product_high_mountain}
                        />
                      )

                    case 'Form':
                      return <Form text={field.text} />

                    default:
                      break
                  }
                })}
            </div>
          </React.Fragment>
        ) : (
          <Loader />
        )}
      </TransitionPages>
    </LayoutApp>
  )
}
