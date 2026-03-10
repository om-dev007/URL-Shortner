import { useState } from "react";
import axios from 'axios';

const App = () => {

  const [inputVal, setInputVal] = useState("")
  const [shortenUrl, setShortenUrl] = useState("")

  const formHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5000/short", inputVal)
      console.log("Success: ", res.data);
      getUrl()
    } catch (err) {
      console.log("Error: ", err)
    }
    setInputVal("")
  }

  const getUrl = async () => {
    try {
      const res = await axios.get("http://localhost:5000/shorten")
      console.log(res.data)
    } catch (err) {
      console.log("Error: ", err)
    }
  }

  const handleChange = (e) => {
    setInputVal({...inputVal, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <form onSubmit={(e) => formHandler(e)} >
        <input onChange={handleChange} value={inputVal.name} type="text" name="originalUrl" placeholder='Please enter the original url' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
