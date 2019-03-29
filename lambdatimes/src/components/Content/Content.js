import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';



// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  selectTabHandler = event => {
    this.setState({
      selected: event.target.innerText.toLowerCase()
    })
  };

  filterCards = () => {
    const tempArray = []
    if(this.state.selected === 'all'){
      return this.state.cards
    } else {
      for(let i=0; i<this.state.cards.length; i++){
        if(this.state.selected === this.state.cards[i].tab){
          tempArray.push(this.state.cards[i])
        }
      }
      return tempArray;
    }
  };

  render() {
    return (
      <div className="content-container">
        {/*
          Add 2 props to the Tabs component,
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} selectTabHandler={this.selectTabHandler} selectedTab={this.state.selected} />

        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
