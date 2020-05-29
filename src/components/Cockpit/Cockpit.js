import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';

import AuthContext from '../../context/auth-context';

const Cockpit = props => {

    const toggleButtonRef = useRef(null);
    

    useEffect(() => {
        console.log('[Cockpit] useEffect');
        // http req can be made

        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000)

        toggleButtonRef.current.click();

        return () => {
            // clearTimeout(timer);
            console.log('[Cockpit] cleanup work in useEffect');
        };

    }, []);

    useEffect(() => {
        console.log('[Cockpit] 2nd useEffect');

        return () => {
            console.log('[Cockpit] cleanup work in 2nd useEffect');
        };
    });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.personsLength <=2) {
        assignedClasses.push(classes.red);
    }
    if(props.personsLength <=1) {
        assignedClasses.push(classes.bold);

    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>
                This is amazing!
            </p>

            <button 
                ref={toggleButtonRef}
                className={btnClass}
                onClick={props.toggled}> 
                Toggle Person 
            </button>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}> Login </button>}
            </AuthContext.Consumer>
            
        </div>
    );
};

// will go into App
export default React.memo(Cockpit);