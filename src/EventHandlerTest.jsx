import React, {useState} from "react";

function EventHandlerTest(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return (<div className="use-state-test">
                <input value={name} onChange={handleNameChange}></input>
                <p>Name: {name}</p>
                <input value={quantity} onChange={handleQuantityChange} type="number"></input>
                <p>Quantity: {quantity}</p>
                <textarea value={comment} onChange={handleCommentChange}></textarea>
                <p>Comment: {comment}</p>
                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="Maestro">Maestro</option>
                    <option value="GiftCard">GiftCard</option>
                </select>
                <p>Name: {payment}</p>
                <label>
                    <input type="radio" value="Pick Up" 
                            checked={shipping === "Pick Up"} 
                            onChange={handleShippingChange}/>
                    "Pick Up"
                </label><br/>
                <label>
                    <input type="radio" value="Delivery" 
                            checked={shipping === "Delivery"} 
                            onChange={handleShippingChange}/>
                </label>
            </div>

    )

}

export default EventHandlerTest