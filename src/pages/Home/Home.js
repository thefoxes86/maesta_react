import React from "react";
import FetchApi from "../../lib/fetchApi";
import Header from "../../components/Header";
import "../../assets/js/scrollingImagesEffect";

export default function Home(props) {
  const posts = FetchApi("https://maestadellaformica.com/wp-json/wp/v2/posts", {
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
  });
  return (
    <React.Fragment>
      <Header title="Home" />

      {posts &&
        posts.map((post, index) => (
          <h1 className="page__title">{post.title.rendered}</h1>
        ))}

      <div className="content content--full content--alternate">
        <div className="content__item content__item--wide">
          <span className="content__item-number">01</span>
          <div className="content__item-imgwrap">
            <div
              className="content__item-img"
              style={{
                backgroundImage: `url(img/img__1.png)`,
              }}
            ></div>
          </div>
          <div className="content__item-deco"></div>
          <h2 className="content__item-title">Oh</h2>
          <p className="content__item-description"></p>
        </div>
        <div className="content__item content__item--wide">
          <span className="content__item-number">02</span>
          <div className="content__item-imgwrap">
            <div
              className="content__item-img"
              style={{
                backgroundImage: `url(img/img__2.png)`,
              }}
            ></div>
          </div>
          <div className="content__item-deco"></div>
          <h2 className="content__item-title">Ri</h2>
          <p className="content__item-description">
            We don't have to be committed. We are just playing here.
          </p>
        </div>
        <div className="content__item content__item--wide">
          <span className="content__item-number">03</span>
          <div className="content__item-imgwrap">
            <div
              className="content__item-img"
              style={{
                backgroundImage: `url(img/img__3.png)`,
              }}
            ></div>
          </div>
          <div className="content__item-deco"></div>
          <h2 className="content__item-title">Nj</h2>
          <p className="content__item-description">
            I thought today we would do a happy little picture.
          </p>
        </div>
        <div className="content__item content__item--wide">
          <span className="content__item-number">04</span>
          <div className="content__item-imgwrap">
            <div
              className="content__item-img"
              style={{
                backgroundImage: `url(https://www.acquabuona.it/wp-content/uploads/2019/01/20190114_081957.jpg)`,
              }}
            ></div>
          </div>
          <div className="content__item-deco"></div>
          <h2 className="content__item-title">Mo</h2>
          <p className="content__item-description">
            Nature is so fantastic, enjoy it. Let it make you happy.
          </p>
        </div>
        <div className="content__item content__item--wide">
          <span className="content__item-number">05</span>
          <div className="content__item-imgwrap">
            <div
              className="content__item-img"
              style={{
                backgroundImage: `url(https://www.acquabuona.it/wp-content/uploads/2019/01/20190114_081957.jpg)`,
              }}
            ></div>
          </div>
          <div className="content__item-deco"></div>
          <h2 className="content__item-title">Ne</h2>
          <p className="content__item-description">
            We need a shadow side and a highlight side.
          </p>
        </div>
        <div className="content__item content__item--wide">
          <span className="content__item-number">06</span>
          <div className="content__item-imgwrap">
            <div
              className="content__item-img"
              style={{
                backgroundImage: `url(https://www.acquabuona.it/wp-content/uploads/2019/01/20190114_081957.jpg)`,
              }}
            ></div>
          </div>
          <div className="content__item-deco"></div>
          <h2 className="content__item-title">Wy</h2>
          <p className="content__item-description">
            We'll put some happy little leaves here and there.
          </p>
        </div>
        <div className="content__item content__item--wide">
          <span className="content__item-number">07</span>
          <div className="content__item-imgwrap">
            <div
              className="content__item-img"
              style={{
                backgroundImage: `url(https://www.acquabuona.it/wp-content/uploads/2019/01/20190114_081957.jpg)`,
              }}
            ></div>
          </div>
          <div className="content__item-deco"></div>
          <h2 className="content__item-title">Tx</h2>
          <p className="content__item-description">
            With something so strong, a little bit can go a long way.
          </p>
        </div>
        <div className="content__item content__item--wide">
          <span className="content__item-number">08</span>
          <div className="content__item-imgwrap">
            <div
              className="content__item-img"
              style={{
                backgroundImage: `url(https://www.acquabuona.it/wp-content/uploads/2019/01/20190114_081957.jpg)`,
              }}
            ></div>
          </div>
          <div className="content__item-deco"></div>
          <h2 className="content__item-title">Sd</h2>
          <p className="content__item-description">
            There are no limits in this world.
          </p>
        </div>
        <p className="credits">
          Photography by
          <a href="https://www.instagram.com/byfoul/">Frankie Cordoba</a>
        </p>
      </div>
    </React.Fragment>
  );
}
