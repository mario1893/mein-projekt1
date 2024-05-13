import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Wer ich bin!'
              label='About me'
              path='/about-me'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Was ich anbiete!'
              label='Products'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
