import React, {useState, useEffect, useRef} from "react";
import styles from './UseRef.module.css';

function UseRef(){

    const inputRef1 = useRef(0);
    const inputRef2 = useRef(0);
    const inputRef3 = useRef(0);

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return(
        <div>
            <div className={styles.userContainer}>
                <button className={styles.button} onClick={handleClick1}>
                    Click me!
                </button>
                <input ref={inputRef1} className={styles.input}></input>
            </div>
            <div className={styles.userContainer}>
                <button className={styles.button} onClick={handleClick2}>
                    Click me!
                </button>
                <input ref={inputRef2} className={styles.input}></input>
            </div>
            <div className={styles.userContainer}>
                <button className={styles.button} onClick={handleClick3}>
                    Click me!
                </button>
                <input ref={inputRef3} className={styles.input}></input>
            </div>
        </div>
    );
}

export default UseRef