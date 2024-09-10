import React from 'react'
import s from './index.module.css'

const TriggerBtns = ({changeToEng, changeToRus}) => {
  return (
    <div className={s.triggers}>
        <div className={s.btn} onClick={() => changeToRus()}>RUS</div>
        <div className={s.btn} onClick={() => changeToEng()}>ENG</div>
    </div>
  )
}

export default TriggerBtns