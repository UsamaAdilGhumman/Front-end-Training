import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";

const EditStudent = () => {
    const location = useLocation();
    //console.log(location);
    const {id} = useParams();
    const [student, setStudent] = useState({
        name: location.state.name,
        dept: location.state.dept,
        roll: location.state.roll,
        year: location.state.year,
      });
      const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setStudent({ ...student, [name]: value });
      };
      const getData = (e) => {
        // count = count + 1;
        // console.log(count);
        // newStudent =
        // setStudent({...student})
        // console.log(student);
        console.log("Submitted Data");
        //arr.push();
        //console.log(arr);
      };
    return(
        <>
        <div className="capital-dev">
            <div className="main">
            <h2>Edit Student</h2>
            <div className="main-dev">
                <div className="content" >
                    <h3>
                        Name
                    </h3>
                    <div className="input-field name">
                        <Input
                        name="name"
                        value={student.name}
                        onChange={handleInput}
                         />
                    </div>
                </div>
                <div className="content" >
                    <h3>
                        Department
                    </h3>
                    <div className="input-field dept">
                        <Input 
                        name="dept"
                        value={student.dept}
                        onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="content" >
                    <h3>
                        Roll Number
                    </h3>
                    <div className="input-field roll">
                        <Input 
                        name="roll"
                        value={student.roll}
                        onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="content" >
                    <h3>
                        Enrollment Year
                    </h3>
                    <div className="input-field year">
                        <Input 
                        name="year"
                        value={student.year}
                        onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="add-button-class">
              <Link to="/" state={{ ...student,id:id }} onClick={getData} className="add" >Submit Data</Link>
              </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default EditStudent;