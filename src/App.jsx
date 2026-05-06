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
        <input type="text" name="name" id="" /><br />
        <input type="email" name="email" id="" /><br />
        <input type="submit" name="" id="" />
      </form>
    </div>
    <div style={{marginTop:'10px'}}>
      {
        data.map(d=>
          <div key={d.id} style={{marginTop: '5px'}}>
            <p>Name: {d.name}</p>
            <p>Email: {d.email}</p>
          </div>)
      }
    </div>
    </>
  )
}

export default App
