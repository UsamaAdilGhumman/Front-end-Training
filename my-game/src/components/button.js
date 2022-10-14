

const Button = (props) =>{
    console.log(props);
    return (
        <>
        <button onClick={props.onClick} disabled={props.disable ? true : false}  >Implement Score</button>
        </>
    )
}


export default Button;