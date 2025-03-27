import React, {useContext} from 'react';
import styles from './UseContext.module.css'
import {UserContext} from './ComponentA2.jsx';
import ComponentD2 from './ComponentD2.jsx';

function ComponentC2(){
    const user = useContext(UserContext);
    return(
        <div className={styles.box}>
            <h1>ComponentC2</h1>
            <h2>Hello {user}</h2>
            <ComponentD2 user={user}></ComponentD2>
        </div>
    );
}

export default ComponentC2