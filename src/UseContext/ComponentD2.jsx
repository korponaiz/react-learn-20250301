import React, {useContext} from 'react';
import styles from './UseContext.module.css'
import {UserContext} from './ComponentA2.jsx';

function ComponentD2(){
    const user = useContext(UserContext);
    return(
        <div className={styles.box}>
            <h1>ComponentD2</h1>
            <h2>Csá {user}</h2>
            <h2>{`Csá ${user}`}</h2>
        </div>
    );
}

export default ComponentD2