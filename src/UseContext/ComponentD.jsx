import React from "react";
import styles from './UseContext.module.css'

function ComponentD(props){
    return(
        <div className={styles.box}>
            <h1>ComponentD</h1>
            <h2>Csá {props.user}</h2>
            <h2>{`Csá ${props.user}`}</h2>
        </div>
    );
}

export default ComponentD