import React, {useState, createContext} from "react";
import styles from './UseContext.module.css'
import ComponentB2 from './ComponentB2.jsx';

export const UserContext = createContext();

function ComponentA2(){

    const [user, setUser] = useState("Zozó");

    return(
        <div className={styles.box}>
            <h1>ComponentA2</h1>
            <h2>{`Szia ${user}`}</h2>
            <h2>Szia {user}</h2>
            <UserContext value={user}>
                <ComponentB2 user={user}></ComponentB2>
            </UserContext>
        </div>
    );
}

export default ComponentA2