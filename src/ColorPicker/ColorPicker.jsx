import React, {useState} from "react";
import styles from './ColorPicker.module.css'

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return( <div className={styles.colorPickerContainer}>
                <h1>Color picker</h1>
                <div className={styles.colorDisplay} style={{backgroundColor: color}}>
                    <p>Selected Color: {color}</p>
                </div>
                <label>Select a Color:</label>
                <input type="color" value={color}onChange={handleColorChange}></input>
            </div>

    )

}

export default ColorPicker