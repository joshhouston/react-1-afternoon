import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            answers: ['yes', 'no', 'maybe', 'perhaps', 'yellow', 'purple', 'negative'],
            userInput: '',
            filteredAnswers: []
        }
    }
    handleChange (val){
        this.setState({userInput: val})
    }

    filterAnswers (userInput){
        let answer = this.state.answers
        let filteredAnswers = []
        for(let i=0; i < answer.length; i++){
            if(answer[i].includes(userInput)) {
                filteredAnswers.push(answer[i])
            }
        }
        this.setState({filteredAnswers: filteredAnswers})
    }
    render(){
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Answers: {JSON.stringify(this.state.answers, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={ () => this.filterAnswers(this.state.userInput)}> Filter</button>
                <span className='resultsBox filterStringRB'>Filtered answers: {JSON.stringify(this.state.filteredAnswers, null)}</span>
            </div>
        )
    }
}

export default FilterString