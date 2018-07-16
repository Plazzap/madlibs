import React, { Component } from 'react';

import Input from './input';

const INITIAL_STATE = {
    color: '',
    pluralNoun: '',
    adjectiveOne: '',
    celebOne: '',
    adjectiveTwo: '',
    nounOne: '',
    numberOne: '',
    numberTwo: '',
    nounTwo: '',
    adjectiveThree: '',
    celebTwo: '',
    celebThree: '',
    adjectiveFour: '',
    nounThree: '',
    celebFour: '',
    adjectiveFive: '',
    contentVisible: false
}

class Card extends Component {
  
  constructor() {
    super()
    
    this.state = {
      color: '',
      pluralNoun: '',
      adjective:'',
      nameOne:''
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  render() {
    
    const inputData = [
      {title: 'Color', state: this.state.color, name: 'color'},
      {title: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun'},
      {title: 'Adjective', state: this.state.adjectiveOne, name: 'adjectiveOne'},
      {title: 'Name', state: this.state.nameOne, nameOne: 'nameOne'},
      
  
      {title: 'Adjective', state: this.state.adjectiveTwo, name: 'adjectiveTwo'},
      {title: 'Noun', state: this.state.nounOne, name: 'nounOne'},
      {title: 'Number', state: this.state.numberOne, name: 'numberOne'},
      {title: 'Number', state: this.state.numberTwo, name: 'numberTwo'},

      {title: 'Noun', state: this.state.nounTwo, name: 'nounTwo'},
      {title: 'Adjective', state: this.state.adjectiveThree, name: 'adjectiveThree'},
      {title: 'Name', state: this.state.nameTwo, name: 'nameTwo'},
      {title: 'Name', state: this.state.nameThree, name: 'nameThree'},

      {title: 'Adjective', state: this.state.adjectiveFour, name: 'adjectiveFour'},
      {title: 'Noun', state: this.state.nounThree, name: 'nounThree'},
      {title: 'Name', state: this.state.nameFour, name: 'nameFour'},
      {title: 'Adjective', state: this.state.adjectiveFive, name: 'adjectiveFive'},
      ]
    
    return (
      <div className="card">
        {
            inputData.map(data => Input( (data), this.handleInputChange))
        }
  
      </div>
      )
  }
}

export default Card;
