import axios from "axios"
import { useEffect, useState } from "react"

const App = () =>{
  const [isError, setisError] = useState([])
  const [myData, setMyData] = useState([])


  const getDataApi = async () =>{
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setMyData(res.data)
    } catch (error) {
      setisError(error.message)
    }
    
  }



  useEffect(() => {
    
    // axios
    // .get("https://jsonplaceholder.typicode.com/posts")
    // .then((res)=>{
    //   setMyData(res.data)
    // })
    // .catch((error)=>{
    //   setisError(error.message)
    // })

    getDataApi()


    axios.post('https://jsonplaceholder.typicode.com/posts', {
      id: '100',
      title: 'testing',
      body: 'testing is successfull'
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
    <h1>Axios Tutorial</h1>
    { isError !== "" && <h2>{isError}</h2>}
    {
      myData.slice(0,5).map((posts)=>{
        const {id,title,body} = posts;
        return(
          <div key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        )
      })
    }
    </>
  )
}

export default App
