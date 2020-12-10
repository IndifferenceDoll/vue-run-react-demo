import React, { useState, useEffect, useRef } from 'react';
import style from './index.css';
import json from './point.json';

const { strokes = [] } = json;
const colorMap = [ 'red', 'blue', 'green' ];

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
  const createSvgNode = (path, i) => {
    const svgWidth = 100;
    const svgHeight = 100;
    const viewBoxWidth = 1024;
    const viewBoxHeight = 768;
    const fillColor = colorMap[ i % colorMap.length ];
    const strokeColor = colorMap.reverse()[ i % colorMap.length ];
    let svgHTML = `
      <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewBoxWidth} ${viewBoxHeight}" fill="${fillColor}">
        <path stroke="${strokeColor}" stroke-width="10" d="${path}"></path>
      </svg>
    `;
    let svg = (new DOMParser()).parseFromString(svgHTML, 'image/svg+xml').firstChild;
    svgContainer.current.appendChild(svg);
    const svgBBox = svg.getBBox();//getBBox获得的x/y/width/height四个属性的单位不是1px，而是(view中宽度除以svg的width)px，也就是说会缩放
    const { x = 0, y = 0, width = 0, height = 0 } = svgBBox;
    const xCenter = x + (width) / 2;
    const yCenter = y + (height) / 2;
    svg.setAttribute('viewBox', `${-(viewBoxWidth / 2 - xCenter)} ${-(viewBoxHeight / 2 - yCenter)} ${viewBoxWidth} ${viewBoxHeight}`)
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