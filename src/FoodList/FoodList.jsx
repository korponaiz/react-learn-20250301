import PropTypes from "prop-types";
import styles from './FoodList.module.css'

function FoodList(props){

    const foods = props.items

    foods.sort((a,b) => a.name.localeCompare(b.name));
    //fruits.sort((a,b) => a.calories - b.calories);
    const lowCalFruits = foods.filter(fruit => fruit.calories<100)
    const listItems = lowCalFruits.map(fruit => <li key={fruit.id}>
                                {fruit.name}: &nbsp;
                                <b>{fruit.calories}</b>
                                </li>);
    return(
        <div className={styles.foodList}>
            <h3 className={styles.listCategory}>{props.category}</h3>
            <ul className={styles.listItems}>{listItems}</ul>
        </div>
    );
}
FoodList.protTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number})),
}
FoodList.defaultProps = {
    category: "Kategória",
    items: [],
    fruits: [],
}

export default FoodList