import React, { PureComponent } from 'react';
// import classes from './Persons.module.css';

import Person from './Person/Person';


class Persons extends PureComponent {

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps', props );
  //   return state;
  // };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if(nextProps.persons !== this.props.persons ||
  //     nextProps.deleted !== this.props.deleted ||
  //     nextProps.clicked !== this.props.clicked) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'snapshot'};
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot)
  };

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }


  render() {
    console.log('[Persons js] persons rendering');

    return (
      this.props.persons.map((person, index) => {
        return (
          <Person 
              key={person.id}
              name={person.name}
              age={person.age}
              changed={(event) => this.props.clicked(event, person.id)}
              clicked={() => this.props.deleted(index)} />
        );
      })
    );
  }
};


// will go into App
export default Persons;


/*
import React from 'react';
import classes from './Persons.module.css';

import Person from './Person/Person';

const persons = props => {

  console.log('[Persons js] persons rendering');

  return props.persons.map((person, index) => {
    return (
      <Person 
          key={person.id}
          name={person.name}
          age={person.age}
          changed={(event) => props.clicked(event, person.id)}
          clicked={() => props.deleted(index)}
      />
    )
  });
 }


// will go into App
export default persons;
*/