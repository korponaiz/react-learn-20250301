import React, {useState} from "react";
import styles from './UseStateTest.module.css'

function UseStateTest(){

    const [name, setName] = useState("Vendég");
    const [age, setAge] = useState(0);
    const [isEmployeed, setIsEmployeed] = useState(false);

    const updateName = () => {
        setName("SpongeBob");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployeedStatus = () => {
        setIsEmployeed(!isEmployeed);
    }

    return( <div className={styles.useStateTest}>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set name</button>
                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>
                <p>Is employeed: {isEmployeed ? "Yes" : "Nop"}</p>
                <button onClick={toggleEmployeedStatus}>Toggle status: </button>
            </div>

    );

}

export default UseStateTest