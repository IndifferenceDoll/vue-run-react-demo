import React, { useState, useEffect, useRef } from 'react';
import style from './index.css';
import json from './point.json';

const { strokes = [] } = json;

export default function ChildComp (props = {}) {
  const { message = '' } = props;
  const [ time, setTime ] = useState(10);
  useEffect(() => {
    setTimeout(() => {
      if (time <= 0) {
        setTime(10);
      } else {
        setTime((pre) => {
          return pre - 1
        });
      }
    }, 1000)
  }, [ time ]);
  ////
  const svgContainer = useRef(null);
  const createSvgNode = (path) => {
    let svgHTML = `
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 768">
        <path d="${path}"></path>
      </svg>
    `;
    let svg = (new DOMParser()).parseFromString(svgHTML, 'image/svg+xml');
    svgContainer.current.appendChild(svg.firstChild);
  }
  useEffect(() => {
    strokes.forEach(createSvgNode);
  }, []);

  return <div className={style.container}>
    <h3 className={style[ 'text-header' ]}>我是React组件</h3>
    <p className={style[ 'father-msg' ]}>Father Msg：{message}</p>
    <div className={style[ 'time-out' ]}>{time}</div>
    <div className={style[ 'efw-container' ]}>
      <div className={style[ 'canvas-container' ]}>

      </div>
      <div className={style[ 'container-gap' ]}></div>
      <div className={style[ 'svg-container' ]} ref={svgContainer}></div>
    </div>
  </div>
}