import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((element, index) =>(
        <Card headline={element.headline} img={element.img} author={element.author} key={index} />
      ))}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;
