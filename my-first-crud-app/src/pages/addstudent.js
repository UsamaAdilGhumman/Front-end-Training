import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import Student from "../components/student";

var count = 0;
const AddStudent = () => {
  
  const [isSubmit, setisSubmit] = useState(false)
  const [student, setStudent] = useState({
    id: "",
    name: "",
    dept: "",
    roll: "",
    year: "",
  });
  const [fromErrors, setfromErrors] = useState(student)
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStudent({ ...student, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    count = count + 1;


    setfromErrors(validateDate(student))
    console.log(student);
    console.log(fromErrors);
    setisSubmit(true)
   

  }
  useEffect(() => {

    if(Object.keys(fromErrors).length === 0 && isSubmit){
       student.id = count;
      Student.push({...student});
      history("/");
    }
    
  }, [fromErrors])
  

  const validateDate = (value)=>{
    const errors = {};
    if(!value.name){
      errors.name = "Name is Required"
    }
    if(!value.dept){
      errors.dept = "Department is Required"
    }
    if(!value.roll){
      errors.roll = "Roll Number is Required"
    }
    if(!value.year){
      errors.year = "Enrollment Year is Required"
    }
    return errors;
  }
  var history = useNavigate();
  return (
    <>
    <div className="form-div">

    
    <form>
      <h2>Add Student</h2>

      <h3>Name</h3>

      <Input name="name" value={student.name} onChange={handleInput} type="text" />

      <p>{fromErrors.name}</p>
      <h3>Department</h3>

      <Input name="dept" value={student.dept} onChange={handleInput} type="text" />

      <p>{fromErrors.dept}</p>
      <h3>Roll Number</h3>

      <Input name="roll" value={student.roll} onChange={handleInput} type="number" />
      
      <p>{fromErrors.roll}</p>
      <h3>Enrollment Year</h3>

      <Input name="year" value={student.year} onChange={handleInput} type="number" required="required"/>

      <p>{fromErrors.year}</p>
      <button type="submit" onClick={handleSubmit}> Add Student </button>
      </form>



      <pre>{
      JSON.stringify(student,undefined,2)
      }</pre>
      </div>
    </>
  );
};

export default AddStudent;
