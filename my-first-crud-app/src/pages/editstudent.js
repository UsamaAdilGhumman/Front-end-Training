import React, { useEffect, useState } from "react";
import { useNavigate,Link, useLocation, useParams } from "react-router-dom";
import Input from "../components/input";
import Student from "../components/student";


const EditStudent = () => {
    const location = useLocation();
    const {id} = useParams();
    const [student, setStudent] = useState({
        id: Student[id-1].id,
        name: Student[id-1].name,
        dept: Student[id-1].dept,
        roll: Student[id-1].roll,
        year: Student[id-1].year,
      });
      const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setStudent({ ...student, [name]: value });
      };

      var history = useNavigate();

      var index = Student.map((e)=>{
        return e.id;
        }).indexOf(id);

      const handleSubmit = (e) => {
        e.preventDefault();

        Student[id-1].id = student.id
        Student[id-1].name = student.name
        Student[id-1].dept = student.dept
        Student[id-1].roll = student.roll
        Student[id-1].year = student.year

        history("/")
      }

  return (
    <>

<div className="form-div">

    <form>
      <h2>Edit Student</h2>

      <h3>Name</h3>

      <Input name="name" value={student.name} onChange={handleInput} type="text" />

      <h3>Department</h3>

      <Input name="dept" value={student.dept} onChange={handleInput} type="text" />

      <h3>Roll Number</h3>

      <Input name="roll" value={student.roll} onChange={handleInput} type="number" />

      <h3>Enrollment Year</h3>

      <Input name="year" value={student.year} onChange={handleInput} type="number" />

      <button type="submit" onClick={handleSubmit} > Edit Student </button>
      </form>

</div>
    </>
  )
}

export default EditStudent