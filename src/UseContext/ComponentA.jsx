import React, { useState } from "react";
import styles from './UseContext.module.css'
import ComponentB from './ComponentB.jsx';

function ComponentA(){

    const [user, setUser] = useState("Zozó");

    return(
        <div className={styles.box}>
            <h1>ComponentA</h1>
            <h2>{`Szia ${user}`}</h2>
            <h2>Szia {user}</h2>
            <ComponentB user={user}></ComponentB>
        </div>
    );
}

export default ComponentA