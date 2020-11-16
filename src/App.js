import React, { useState, useMemo } from "react";
import "./style.scss";
import ClassNames from "classnames";
import "./iconfonts/material-icons.css";

const Items = [
  {
    image: require("./img/susi.jpg"),
  },
  // {
  //   mage: require("./img/ramen.jpg"),
  // },
  {
    image: require("./img/biru.jpg"),
  },
  {
    image: require("./img/coffee.jpg"),
  },
  {
    image: require("./img/meron.jpg"),
  },
  {
    image: require("./img/cosme.jpg"),
  },
];

function App() {
  return (
    <div className="App">
      {/*<div className="a">
        <Carousel />
  </div>*/}
      <div className="a">
        <Carousel_2 />
      </div>
    </div>
  );
}

const Carousel = () => {
  const [x, setX] = useState(0);

  const onClick = (val) => {
    const _x = x + val;
    if (val > 0 && _x > 0) return setX((Items.length - 1) * -1);
    if (val < 0 && _x <= Items.length * -1) return setX(0);
    setX(_x);
  };

  return (
    <div className="carousel">
      <div className="slider-wrapper">
        <div className="slider">
          {Items.map((item, index) => {
            return (
              <div
                className="slide"
                key={index}
                style={{ transform: `translate(${x * 100}%)` }}
              >
                <img src={item.image} alt="" />
              </div>
            );
          })}
          <div
            className="button-left"
            onClick={() => {
              onClick(1);
            }}
          >
            <i className="material-icons">navigate_before</i>
          </div>
          <div
            className="button-right"
            onClick={() => {
              onClick(-1);
            }}
          >
            <i className="material-icons">navigate_next</i>
          </div>
        </div>
      </div>
      <div className="nav">
        {Array.from({
          length: Items.length,
        }).map((_, key) => {
          return (
            <div
              className={ClassNames("nav-indicator", {
                active: Math.abs(x) === key,
              })}
              key={key}
              onClick={() => setX(key * -1)}
            />
          );
        })}
      </div>
    </div>
  );
};

const Carousel_2 = () => {
  const [x, setX] = useState(0);

  const onClick = (val) => {
    const _x = x + val;
    console.log(x);
    if (val > 0 && _x > items.length - 1) return setX(0);
    if (val < 0 && _x < 0) return setX(items.length - 1);
    setX(_x);
  };

  const items = useMemo(() => {
    return Items.map((item, id) => {
      return {
        ...item,
        id,
      };
    });
  }, []);

  return (
    <div className="carousel-2">
      <div className="slider-wrapper">
        <div className="slider">
          {items.map((item, index) => {
            return (
              <div
                className={ClassNames("slide display-none", {
                  active: x === item.id,
                  "next-active":
                    x < items.length - 1 ? x === item.id - 1 : item.id === 0,
                  "pre-active": x
                    ? x === item.id + 1
                    : items.length - 1 === item.id,
                })}
                key={index}
                // style={{ transform: `translate(${x * 30}%)` }}
              >
                <>
                  {console.log(x)}
                  <img src={item.image} alt="" />
                </>
              </div>
            );
          })}
          <div
            className="button-left"
            onClick={() => {
              onClick(-1);
            }}
          >
            <i className="material-icons">navigate_before</i>
          </div>
          <div
            className="button-right"
            onClick={() => {
              onClick(1);
            }}
          >
            <i className="material-icons">navigate_next</i>
          </div>
        </div>
      </div>
      <div className="nav">
        {Array.from({
          length: items.length,
        }).map((_, key) => {
          return (
            <div
              className={ClassNames("nav-indicator", {
                active: Math.abs(x) === key,
              })}
              key={key}
              onClick={() => setX(key)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
