import React, { Component } from 'react';
import classes from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxiliary from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App js] inside constructor');
  }

  state = {
    persons: [
      { id: 'abc123', name: 'Nabil', age: 34 },
      { id: 'abc456', name: 'Doe', age: 28 },
      { id: 'abc789', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changedCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App js] inside getDerivedStateFromProps', props);
    return state;
  };

  componentDidMount() {
    console.log('[App js] inside componentDidMount');
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App js] inside shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App js] inside componentDidUpdate');
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons, 
        changedCounter: prevState.changedCounter + 1 
      }
    });
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

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  render() {

    console.log('[App js] inside render');

    let persons = null;
    if(this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons}
        deleted={this.deletePersonHandler}
        clicked={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated} />
    }

    return (
      <Auxiliary>    
        <button 
          onClick={() => { this.setState({ showCockpit:  false })}}>
            Remove Cockpit
        </button>
        <AuthContext.Provider value={{
            authenticated: this.state.authenticated, 
            login: this.loginHandler 
            }}>
            
            {this.state.showCockpit ? <Cockpit 
                  title={this.props.appTitle}
                  personsLength={this.state.persons.length}
                  toggled={this.togglePersonHandler}
                  showPersons={this.state.showPersons} /> : null }
              {persons}
          </AuthContext.Provider>
      </Auxiliary>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work now!'));
  }
}

// will go into index
export default withClass(App, classes.App);


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
