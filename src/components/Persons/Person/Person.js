import React, { Component } from 'react';
import classes from './Person.module.css';

import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        // document.querySelector('input').focus();
        this.inputElementRef.current.focus();
    };

    render() {
        console.log('[Person js] person rendering');
        return (
            <Auxiliary>
            <AuthContext.Consumer>
                {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please log in!</p>}
            </AuthContext.Consumer>
                
                <p onClick={this.props.clicked}> I'm a {this.props.name} and I'm {this.props.age} years old</p>
                <p> {this.props.children} </p>
                <input 
                    type="text"
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Auxiliary>
        );
    }
};

// will go into App
export default withClass(Person, classes.Person);

/*
import React from 'react';
import classes from './Person.module.css';

const person = props => {
    console.log('[Person js] person rendering');
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
*/