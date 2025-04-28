import React, { useEffect, useRef } from 'react'
import { checkHoverPersonalized } from '../../lib/cursorPerzonalize'
import './productwithtable.scss'

export default function ProductWithTable(props) {
  const classPosition =
    'productWithTable__content productWithTable__content_' + props.position

  const imageRef = useRef()

  const scrollFallback = e => {}

  useEffect(() => {
    window.addEventListener('scroll', scrollFallback)
    return () => window.removeEventListener('scroll', scrollFallback)
  }, [])
  return (
    <>
      {props.show ? (
        <div className={`${classPosition}`}>
          <div className="block__black">
            <h3>{props.title}</h3>
          </div>
          <div className="content__block">
            <img
              ref={imageRef}
              src={props.background}
              alt={props.title}
              className="img__content"
            />
          </div>
          <div className="text__content">
            <div className="table__header">
              {props?.table?.header?.map(header => (
                <span>{header.c}</span>
              ))}
            </div>
            {props?.table?.body?.map((header, index) => (
              <div className="table__body">
                <>
                  {props?.table?.body[index]?.map(item => (
                    <span dangerouslySetInnerHTML={{ __html: item.c }}></span>
                  ))}
                </>
              </div>
            ))}

            {props?.tableIngredienti && (
              <>
                <div className="table__header" style={{ marginTop: '20px' }}>
                  <span>{props?.tableIngredienti?.header[0].c}</span>
                </div>
                {props?.tableIngredienti?.body?.map((header, index) => (
                  <div className="table__body">
                    <>
                      {props?.tableIngredienti?.body[index]?.map(item => (
                        <span
                          dangerouslySetInnerHTML={{ __html: item.c }}
                        ></span>
                      ))}
                    </>
                  </div>
                ))}
              </>
            )}
            {props?.tableValoriNutrizionali && (
              <>
                <div className="table__header" style={{ marginTop: '20px' }}>
                  {props?.tableValoriNutrizionali?.header?.map(header => (
                    <span>{header.c}</span>
                  ))}
                </div>
                {props?.tableValoriNutrizionali?.body?.map((header, index) => (
                  <div className="table__body">
                    <>
                      {props?.tableValoriNutrizionali?.body[index]?.map(
                        item => (
                          <span
                            dangerouslySetInnerHTML={{ __html: item.c }}
                          ></span>
                        )
                      )}
                    </>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  )
}
