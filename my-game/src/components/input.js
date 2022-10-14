import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";



const Input = (props) => {

    return (
        <>
        <input 
        type="number" 

        value={props.inputvalue}

        />
        </>
    )
}

export default Input;