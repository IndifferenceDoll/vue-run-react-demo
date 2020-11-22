import React, { useState, useEffect } from 'react';
import style from './index.css'

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

  return <div className={style.container}>
    <h3 className={style[ 'text-header' ]}>我是React组件</h3>
    <p className={style[ 'father-msg' ]}>Father Msg：{message}</p>
    <div className={style[ 'time-out' ]}>{time}</div>
  </div>
}