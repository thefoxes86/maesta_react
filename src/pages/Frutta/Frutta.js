import React, { useState, useEffect } from 'react'
import FetchApi from '../../lib/fetchApi'
import TransitionPages from '../../components/TransitionPages'
import { getScrollPage } from '../../assets/js/scrollingImagesEffect'
import TitlePages from '../../components/TitlePages'
import Product from '../../components/Product'
import Path from '../../components/Path'
import ButtonsProducts from '../../components/ButtonsProducts'
import ParallaxProduct from '../../components/ParallaxProduct'
import Parallax from '../../components/Parallax'
import Text from '../../components/Text'
import Form from '../../components/Form'
import LayoutApp from '../../components/LayoutApp'
import { pathBackend } from '../../lib/pathBackend'
import Loader from '../../components/Loader'

const ID = 58

export default function Frutta(props) {
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

      FetchApi(
        `${pathBackend}/wp-json/wp/v2/media/${data.featured_media}`,

        {
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
        }
      ).then(imgRes => {
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
            <div className="content content__page">
              <div className="content__page__first content--full">
                <TitlePages
                  title={page.title.rendered}
                  intro={page.acf.intro_page}
                  img={img.source_url}
                  pathColor={page.acf.path_color}
                />
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
