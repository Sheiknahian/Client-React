import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://first-react-server.onrender.com/users').then(res=>res.json()).then(data=>setData(data))
  },[])
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const newUser = {name: name, email: email}
    fetch('https://first-react-server.onrender.com/users', {
      method: 'POST',
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(newUser)
    })
    .then(res=>res.json()).then(newData=>{
      const users = [...data, newData];
      setData(users);
    })
    
  }
  return (
    <>
    <div style={{marginTop:'100px'}}>
      <form onSubmit={handleSubmit}>
        <p>Your Name</p>
        <input placeholder='Type Your Name' required style={{width:'300px', height: '30px', backgroundColor:'white', color:'black'}} type="text" name="name" id="" /><br /><br />
        <p>Your Email</p>
        <input placeholder='Type Your Email' required style={{width:'300px', height: '30px', backgroundColor:'white', color:'black'}} type="email" name="email" id="" /><br /><br />
        <input style={{width:'200px', height: '30px', backgroundColor:'aqua', color:'black', border: 'none', fontWeight:'bold', borderRadius: '20px', fontSize:'18px'}} value='Submit' type="submit" name="" id="" />
      </form>
    </div>
    </>
  )
}

export default App
