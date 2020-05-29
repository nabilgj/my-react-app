import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'abc123', name: 'Nabil', age: 34 },
      { id: 'abc456', name: 'Doe', age: 28 },
      { id: 'abc789', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };


  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                clicked={() => this.deletePersonHandler(index)}
            />
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        <p>This is amazing!</p>

        <button 
          style={buttonStyled}
          onClick={this.togglePersonHandler}> Toggle Person </button>
        
          {persons}
      
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
