import React from 'react';

import TopNav from './nav';
//import GrubForm from './grubForm';
//import UserStatus from './userStatus';

import './App.css';

export default class DreadPirate extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      grub: ['roadhouse', 'olive garden', 'old chicago', 'pizza hut', 'longhorn', 'red lobster', 'mcDonalds', 'burger king', 'subway', 'hardees', 'potbelly'],
      grubOffer: [],
      grubPlace:'',
      numPulls: 0,
      hangryTaunt: 'some text goes here',
      grubButton: <button type='submit' name='submit' id='selectGrubButton' className='show selectGrubButton'>Where shall ye eat?!?</button>

      }
  }

  newSearch() {
    this.setState({
      grub: ['roadhouse', 'olive garden', 'old chicago', 'pizza hut', 'longhorn', 'red lobster', 'mcDonalds', 'burger king', 'subway', 'hardees', 'potbelly'],
      grubOffer: [],
      grubPlace:'',
      numPulls: 0,
      hangryTaunt: 'some text goes here',
      grubButton: <button type='submit' name='submit' id='selectGrubButton' className='show selectGrubButton'>Where shall ye eat?!?</button>
    })
  }
  
  //method to select grub

  selectGrub(event){
    event.preventDefault();

    console.log('start selectGrub')
    
    let grubLength = this.state.grub.length-1;
    console.log('grubLength: ', grubLength)

    let random = Math.floor(Math.random() * parseInt(grubLength+1)) +0
    console.log('random: ', random)

    let grubPlace = this.state.grub[random];

      let numPulls = this.state.numPulls;
      numPulls++;
    console.log('passed numPulls: ', numPulls)

    this.setState({
      grubPlace,
      numPulls: numPulls,
      grubOffer: [...this.state.grubOffer, `'${grubPlace}' `]
    })

    if (numPulls < 3) {
      this.setState({
        hangryTaunt: `You're turn is almost up!`
      })
    }

    if (numPulls > 2) {
      this.setState({
        hangryTaunt: `You're turn is up!`,
        grubButton: <button type='submit' name='submit' id='selectGrubButton' className='hidden selectGrubButton'>Where shall ye eat?!?</button>
      })
    }
  }

  render() {
    console.log('state: ', this.state)

    return (
      <main>
        
        <TopNav onNewSearch = {() => this.newSearch()} />
        <br></br>
        <div className='grubForm'>
          <form onSubmit={event => this.selectGrub(event)}>
            {this.state.grubButton}
          </form>
        </div>
      <ul>
        {this.state.grubOffer}
      </ul>

      <ul>
        {this.state.hangryTaunt}
      </ul>
        
      </main>

    )

  }
}