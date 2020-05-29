import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Nabil', age: 34 },
      { name: 'Doe', age: 28 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('button clicked');
    this.setState({ persons: [
      { name: newName, age: 34 },
      { name: 'Doe', age: 28 },
      { name: 'Stephanie', age: 25 }
    ]})
  };

  nameChangedHandler = e => {
    this.setState({persons: [
      { name: 'Nabil', age: 34 },
      { name: e.target.value, age: 28 },
      { name: 'Stephanie', age: 27 }
    ]})
  };

  render() {
    const buttonStyled = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid #222',
      padding: '16px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        <p>This is amazing!</p>

        <button 
          style={buttonStyled}
          onClick={() => this.switchNameHandler("Nabil Ahmed!")}> Switch Name </button>
        
        <Person 
          clicked={this.switchNameHandler.bind(this, 'Baba!')}
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />

        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>My hobby: Cooking</Person>
        
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work now!'));
  }
}

// will go into index
export default App;


/*

import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const App = props => {
   const [personsState, setPersonsState] = useState({
      persons: [
        { name: 'Nabil', age: 34 },
        { name: 'Doe', age: 28 },
        { name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value'
    });

    const switchNameHandler = () => {
      // console.log('button clicked');
      setPersonsState({ persons: [
        { name: 'Baba', age: 34 },
        { name: 'Doe', age: 28 },
        { name: 'Stephanie', age: 25 }
      ]})
    };

    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        <p>This is amazing!</p>

        <button onClick={switchNameHandler}> Switch Name </button>
        
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}/>

        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}>My hobby: Cooking</Person>
        
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work now!'));
  
};

// will go into index
export default App;

*/
