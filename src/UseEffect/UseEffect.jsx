import React, {useState, useEffect} from "react";
import styles from './UseEffect.module.css'

function UseEffect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
//        document.title = `Count: ${count}`;//minden változáskor frissül
        document.title = `Count ${count} ${color}`;
    }, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c ==="green" ? "red" : "green");
    }

    return(
        <>
        UseEffect
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount} className={styles.useEffectButton}>+1</button>
        <button onClick={subtractCount} className={styles.useEffectButton}>-1</button>
        <button onClick={changeColor} className={styles.useEffectButton}>Szín</button>
        </>
    );
}

export default UseEffect