import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    handleChange(val) {
        this.setState({ userInput: val });
    }

    assignEvenAndOdds(userInput) {
        let myArr = userInput.split(',')
        let evens = []
        let odds = []
        for(let i=0; i < myArr.length; i++){
            if(myArr[i] % 2 === 0) {
                evens.push( parseInt(myArr[i], 10))
            }else {
                odds.push( parseInt(myArr[i], 10))
            }
        }
        this.setState({ evenArray: evens, oddArray: odds})
    }


    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odd</h4>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

