import React from 'react'
import s from './index.module.css'
import CardItem from '../CardItem'

const CardsContainer = ( {cards, deleteCard, changeLang} ) => {
  return (
    <div className={s.container}>
        {
            cards.map(el => <CardItem  key={el.id} {...el} deleteCard={deleteCard} changeLang={changeLang} />)
        }

    </div>
  )
}

export default CardsContainer