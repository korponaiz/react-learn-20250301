import PropTypes from "prop-types";


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
        <div className="food-list">
            <h3 className="list-category">{props.category}</h3>
            <ul className="list-items">{listItems}</ul>
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