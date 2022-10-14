

const Input = (props) => {
    return (
        <>
        <input type={props.type}  name={props.name} value={props.inputValue} onChange={(e)=>props.setValue(e.target.value)} />
        </>
    )
}


export default Input;