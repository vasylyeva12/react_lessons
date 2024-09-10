import React from 'react'
import s from './index.module.css'
import { IoMdClose } from "react-icons/io";

const CardItem = ( {id, title_rus, title_eng, lang, deleteCard, changeLang }) => {

const card_style ={
    color: lang === 'rus'? 'white' : 'darkblue',
    backgroundColor: lang === 'rus' ? 'darkblue' : 'white'
}

const delete_card = (event) => {
  event.stopPropagation()
  deleteCard(id)
}
    const card_text = lang === 'rus' ? title_rus : title_eng

  return (
    <div 
    className={s.card} 
    style={card_style}
    onClick={() => changeLang(id)}
    >
      <IoMdClose  onClick={delete_card}/>
        <p>{ card_text }</p>
    </div>
  )
}

export default CardItem