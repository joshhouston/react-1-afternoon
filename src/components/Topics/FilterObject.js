import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            shinobis: [
                {
                    name: 'naruto',
                    title: 'hokage',
                    age: 30
                }, 
                {
                    name: 'sasuke',
                    age: 30,
                    eyeColor: 'red'
                },
                {
                    name: 'rock lee',
                    title: 'bushy brows'
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }
     handleChange(e) {
        this.setState({ userInput: e})
    }
    filterShinobis(val) {
        let ninja = this.state.shinobis
        let filteredArray = []
        for(let i=0; i < ninja.length; i++){
            if( ninja[i].hasOwnProperty(val)) {
                filteredArray.push(ninja[i])
            }
        }
        this.setState({ filteredArray: filteredArray})
    }



    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.shinobis, null, 10)}</span>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.filterShinobis(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'> Filtered: { JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject