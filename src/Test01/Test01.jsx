import React, { useState } from "react";

function Test01(){

    const [inputText, setInputText] = useState();

    function handleInputText(event){
        setInputText(event.target.value);
    }

    return(
        <div>
            <p>Szöveg: {inputText}</p>
            <input value={inputText} placeholder="Ide írj!" onChange={handleInputText}/>
        </div>
    );

}

export default Test01