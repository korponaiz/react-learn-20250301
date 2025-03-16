import React, {useState} from "react";

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

    return( <div className="use-state-test">
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