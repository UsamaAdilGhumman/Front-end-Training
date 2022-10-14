import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
// const arr = [];
const MainPage = (props) => {
  const location = useLocation();
  const [studentArr, setStudentArr] = useState([]);
  //console.log(studentArr);
  const deleteitem = (id) => {
    const arrs = studentArr.filter((obj) => obj.id != id);
    setStudentArr([...arrs]);
    //console.log("delete item");
  };
  //console.log(location);
  //console.log(studentArr);
//   const addstudent = ()=>{
//     setStudentArr((studentArr) => [...studentArr, location.state]);
//   }
//var flag;
const newElement = location.state;
  useEffect(()=>{
    if(!(studentArr.includes(location.state.id))){
        setStudentArr([ ...studentArr, newElement])
    }
    location.state = null;
  },[])
  console.log(location);
  console.log(studentArr);
  //setStudentArr((studentArr) => [...studentArr, location.state]);
  return (
    <>
      <div className="flex-div">
        <div>
          <div className="add-button">
            <Link to="/new" className="new" >
              Add Student
            </Link>
          </div>
          <table>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>Department</th>
              <th>Roll Number</th>
              <th>Year</th>
              <th>Buttons</th>
            </tr>
            {studentArr.map((item) => {
               //const {id,name,dept,roll,year} = item;
              return (
                <>
                  <tr>
                    <td>{item?.id}</td>
                    <td>{item?.name}</td>
                    <td>{item?.dept}</td>
                    <td>{item?.roll}</td>
                    <td>{item?.year}</td>
                    <td>
                      <Link
                        to={`/edit/${item?.id}`}
                        className="edit"
                        state={{ ...item }}
                      >
                        Edit
                      </Link>
                      <button
                        className="delete"
                        onClick={() => deleteitem(`${item?.id}`)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default MainPage;
