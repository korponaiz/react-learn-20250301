import profilePic from './JLH2003.jpg'
import Button from '../Button.jsx'
import PropTypes from 'prop-types'
import styles from './Card.module.css'

function Card(props){

    const handleClick = (e) => e.target.style.display = "none";

    return(
        <div className={styles.card}>
            <img className={styles.cardImage} onClick={(e) => handleClick(e )} src={profilePic} alt="JLH 2003"></img>
            <h2  className={styles.cardTitle} >Név: {props.title}</h2>
            <p className={styles.cardText} >Foglalkozás: {props.description}</p>
            <p className={styles.cardAge} >Kor: {props.age}</p>
            <p className={styles.cardText} >Senior: {props.isSenior?"Igen":"Nem"}</p>
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