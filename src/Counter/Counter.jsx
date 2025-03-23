import React, {useState} from "react";
import styles from './Counter.module.css'
function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1); // setCount(count + 1) helyett
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1); // setCount(count - 1) helyett
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return( <div className={styles.counterContainer}>
                <p className={styles.counterDisplay}>{count}</p>
                <button className={styles.counterButton} onClick={decrement}>Decrement</button>
                <button className={styles.counterButton} onClick={reset}>Reset</button>
                <button className={styles.counterButton} onClick={increment}>Increment</button>
            </div>

    );

}

export default Counter