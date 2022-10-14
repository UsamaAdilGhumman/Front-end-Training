
import { useEffect, useState } from 'react';
import './App.css';
import AddUser from './pages/AddUser';

const App = () => {

  
  const [name,setName] = useState("Osama Tariq");
  const [age,setAge] = useState(23);
  const [fatherName,setfatherName] = useState("Tariq mahmood ghumman")


  useEffect(()=>{

    return ()=> console.log("first-class");

  },[])



  return (
    <>
    <AddUser
    
      name={name}
      age={age}
      fatherName={fatherName}
      setName={setName}
      setAge={setAge}
      setfatherName={setfatherName}
    
    />
    </>
  );
}

export default App;
