import React from 'react';
import './ProductsCards.css';
import CardItem from './CardItem';

function ProductsCards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Erstgespräch.jpg'
              text='Kostenloses Erstgespräch (15 Minuten)'
              label='Kostenlos'
              path='/services'
            />
            <CardItem
              src='images/Farblehre.jpg'
              text='Online-Farbcheck (1 Stunde, War €159, Jetzt €129)'
              label='Reduziert'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Shopping.jpg'
              text='Einkaufshilfe (4 Stunden, War €399, Jetzt €299)'
              label='Reduziert'
              path='/services'
            />
            <CardItem
              src='images/Workshop.jpg'
              text='Workshop (6 Monate, War €1299, Jetzt €899)'
              label='Reduziert'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductsCards;
