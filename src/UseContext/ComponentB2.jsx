import React from "react";
import styles from './UseContext.module.css'
import ComponentC2 from './ComponentC2.jsx';

function ComponentB2(props){
    return(
        <div className={styles.box}>
            <h1>ComponentB2</h1>
            <ComponentC2 user={props.user}></ComponentC2>
        </div>
    );
}

export default ComponentB2