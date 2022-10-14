
import Input from "../components/input";
import Button from "../components/button";

const AddUser = (props) => {
    
    return (
        <>
        <div className="card">
            <div className="card-content">
            <h1>Enter User Data </h1>
            <h3>Name: </h3>
            <Input type="text" name="name" inputValue={props.name} setValue={props.setName}      />
            <h3>Father Name: </h3>
            <Input type="text" name="father_name"  inputValue={props.fatherName} setValue={props.setfatherName}   />
            <h3>Age: </h3>
            <Input type="number" name="age" inputValue={props.age} setValue={props.setAge} />
            <Button/>
            </div>
        </div>
        </>
    )
}

export default AddUser;