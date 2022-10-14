import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/input";

var count = 0;
const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    dept: "",
    roll: "",
    year: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStudent({ ...student, [name]: value });
  };
  const getData = (e) => {
    count = count + 1;
    console.log(count);
    // newStudent =

    //arr.push();
    //console.log(arr);
  };
  return (
    <>
      <div className="capital-dev">
        <div className="main">
          <h2>Add Student</h2>
          <div className="main-dev">
            <div className="content">
              <h3>Name</h3>
              <div className="input-field name">
                <Input
                  name="name"
                  value={student.name}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="content">
              <h3>Department</h3>
              <div className="input-field dept">
                <Input
                  name="dept"
                  value={student.dept}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="content">
              <h3>Roll Number</h3>
              <div className="input-field roll">
                <Input
                  name="roll"
                  value={student.roll}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="content">
              <h3>Enrollment Year</h3>
              <div className="input-field year">
                <Input
                  name="year"
                  value={student.year}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="add-button-class">
              <Link
                to="/"
                state={{ ...student, id: count }}
                onClick={getData}
                className="add"
              >
                Submit Data
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
