import { element } from "prop-types";
import React, {useState} from "react";
import styles from './FoodArrayUpdate.module.css'

function FoodArrayUpdate(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));
    }

    return(<div className={styles.foodArrayUpdate}>
                <h2>List of food</h2>
                <ul>
                    {foods.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>)}
                </ul>
                <input type="text" id="foodInput" placeholder="Enter food name:"/>
                <button onClick={handleAddFood}>Add food</button>
            </div>);

}

export default FoodArrayUpdate