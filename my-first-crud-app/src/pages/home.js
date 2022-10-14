import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Student from "../components/student";



const Home = () => {
    var history = useNavigate();
    const handleDelete = (id) =>{
        var index = Student.map((e)=>{
            return e.id;
        }).indexOf(id);

        Student.splice(index,1)

        history("/")
    }
  return (
    <>
      <div className="div-flex">
        <div className="flex-1">
          <div>
            <Link to="/new" >
            <button className="add-button">Add</button>
            </Link>
          </div>
          <div className="table-div">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Roll Number</th>
                  <th>Year</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                    Student && Student.length>0
                    ?
                    Student.map((item)=>{
                        return(
                            <>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.dept}</td>
                                    <td>{item.roll}</td>
                                    <td>{item.year}</td>
                                    <td>
                                        <Link to={`/edit/${item.id}`} >
                                        <button className="edit-button">Edit</button>
                                        </Link>
                                        <button onClick={()=>handleDelete(`${item.id}`)} className="delete-button" >Delete</button>
                                    </td>
                                </tr>
                             </>
                        )
                    })
                    :
                    "No data Available"
                    
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
