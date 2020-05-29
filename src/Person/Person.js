import React from 'react';
import classes from './Person.module.css';

const person = props => {
    return (
        <div className={classes.Person}>
            <p onClick={props.clicked}> I'm a {props.name} and I'm {props.age} years old</p>
            <p> {props.children} </p>
            <input 
                type="text" 
                onChange={props.changed}
                value={props.name} />
        </div>
    );
};

// will go into App
export default person;