import axios from "axios";
import { useEffect } from "react";



function App() {

  useEffect(() => {

    axios.post('http://localhost:3000/posts', {
      "id": 34,
        "title": "json-server",
        "author": "typicode"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    return () => {
      
    }
  }, [])
  

  return (
    <>
    

    </>
  );
}

export default App;
