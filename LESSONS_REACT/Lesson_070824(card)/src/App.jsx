import React, { useState } from "react";
import CardsContainer from "./components/CardsContainer";
import { words } from "./data/words";
import AddCardForm from "./components/AddCardForm";
import TriggerBtns from "./components/TriggerBtns";

const App = () => {
  const [cards, setCards] = useState(words);

  const deleteCard = card_id => setCards(cards.filter(el => el.id !== card_id));

  const changeToRus = () =>
    setCards(
      cards.map(el => {
        el.lang = "rus";
        return el;
      })
    );

  const changeToEng = () =>
    setCards(
      cards.map(el => {
        el.lang = "eng";
        return el;
      })
    );
   const  addNewCard = new_card => {      
      setCards([...cards, new_card])
    }

    const changeLang = (card_id) => {
      // 1.Найти карточку в cards на котрую кликнуто по id
      const targetCard = cards.find(el => el.id === card_id)
      // 2. У найденной карточки обратиться по ключу lang и заменить значение на противоположное
      targetCard.lang = targetCard.lang === 'eng' ? 'rus' : 'eng'

      // Передать в setCards обновденное сосотояние
      setCards([...cards])
    }

  return (
    <div>
      <AddCardForm addNewCard={addNewCard}/>
      <CardsContainer cards={cards} deleteCard={deleteCard} changeLang={changeLang}/>

      <TriggerBtns changeToEng={changeToEng} changeToRus={changeToRus}/>
    </div>
  );
};

export default App;
