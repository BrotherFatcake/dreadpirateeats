import React from 'react';

import './grubForm.css';

import App from './App';

//export default function GrubForm (props) {
    let numPulls = 0;
  //  let selectGrubButton = <button type='submit' name='submit' id='selectGrubButton' className='show selectGrubButton'>Where shall ye eat?!?</button>;
   console.log('statee: ', this.props) 
    export default class GrubForm extends React.Component {
       
    onSubmit(event) {
        event.preventDefault();

    //    numPulls = numPulls +1;
        //console.log('numPulls: ', numPulls)
        
        if(numPulls < 3) {
            //selectGrubButton = <button type='submit' name='submit' id='selectGrubButton' className='show selectGrubButton'>Where shall ye eat?!?</button>
        }

        else {
            //selectGrubButton = <button type='submit' name='submit' id='selectGrubButton' className=' hidden selectGrubButton'>Where shall ye eat?!?</button>
        }

        this.props.selectGrub()
    }

    render() {

        return(
            <div className='grubForm'>
                <form onSubmit={event => this.onSubmit(event)}>
                    This is a test
                </form>
            </div>
        )
        
    }
}

//                 <button type='submit' name='submit' id='selectGrubButton' className='selectGrubButton'>What shall ye eat?!?</button>
