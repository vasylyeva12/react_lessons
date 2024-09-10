import s from './index.module.css'
import React from 'react'

const AddCardForm = ( {addNewCard}) => {

  const submit = (event) => {
    event.preventDefault()

    const {rus, eng} = event.target;

    const newCard = {
      id: Date.now(),
      title_rus: rus.value,
      title_eng: eng.value,
      lang: 'eng'

    }
    addNewCard(newCard)

    event.target.reset() //очищаем инпуты после отправки формы

  }
  return (
    <form onSubmit={submit} className={s.form}>
      <input type="text" placeholder='RUS' name='rus'/>
      <input type="text" placeholder='ENG' name='eng'/>
      <button>Add Card</button>
    </form>
  )
}

export default AddCardForm