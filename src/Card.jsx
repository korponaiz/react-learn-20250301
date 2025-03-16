import profilePic from './assets/JLH2003.jpg'
import Button from './Button.jsx'
import PropTypes from 'prop-types'

function Card(props){

    const handleClick = (e) => e.target.style.display = "none";

    return(
        <div className="card">
            <img className="card-image" onClick={(e) => handleClick(e )} src={profilePic} alt="JLH 2003"></img>
            <h2  className="card-title" >Név: {props.title}</h2>
            <p className="card-text" >Foglalkozás: {props.description}</p>
            <p className="card-age" >Kor: {props.age}</p>
            <p className="card-text" >Senior: {props.isSenior?"Igen":"Nem"}</p>
            <Button name={props.buttonName} isButton={props.isButton}></Button>
        </div>
    );
}
Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    age: PropTypes.number,
    isSenior: PropTypes.bool,
    buttonName: PropTypes.string,
    isButton: PropTypes.bool,
}
Card.defaultProps = {
    title: "Valaki",
    description: "Itt egy szöveg",
    age: 11,
    isSenior: true,
    buttonName: "Gomb",
    isButton: true,
}

export default Card