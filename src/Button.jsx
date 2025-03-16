
function Button(props){

    let count = 0;

    const simpleHandleClick = (e) => {
        count++;
        e.target.textContent = "Au! " + count;
    }

    const doubleHandleClick = (e) => {
        count = 0;
        e.target.textContent = props.name;
    }

    if(props.isButton)
    return(
        <button className="button" 
                onDoubleClick={(e) => doubleHandleClick(e)}
                onClick={(e) => simpleHandleClick(e)} 
                >{props.name} 
                </button>
    );
}

export default Button