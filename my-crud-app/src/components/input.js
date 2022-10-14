


const Input = (props) => {
    return(
        <>
            <input type="text" name={props.name} value={props.value} autoComplete="off" onChange={props.onChange} />
        </>
    )
}

export default Input;