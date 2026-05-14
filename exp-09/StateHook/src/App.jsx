import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (


    <>


<div style={{

  height : "100vh",
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
  flexDirection : "column",
  gap : 10,

}}>
  <h1 style={{

    fontSize : 60
  }}>Counter : {count}</h1>

  <div style={{

 
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
  flexDirection : "row",
  gap : 20,

}}>

    <div>

      <button style={{
      height : 50,
      width : 150 ,
      color : "white",
      background : "white",
      border : "none",
      borderRadius : 5,
      fontSize :20,
      backgroundColor : "black"



    }}onClick={()=>{
      setCount(count+1)
    }}>Increase</button>

    </div>

    

    <div>
      <button style={{
      height : 50,
      width : 150 ,
       backgroundColor : "black",
      color : "white",
      background : "white",
      border : "none",
      borderRadius : 5,
      fontSize :20



    }}onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
    </div>

    

    <div>
      <button style={{
      height : 50,
      width : 150 ,
      color : "white",
      background : "white",
      backgroundColor : "black",
      border : "none",
      borderRadius : 5,
      fontSize :20



    }}onClick={()=>{
      setCount(0)
    }}>Reset</button>
    </div>

    

  </div>
    
</div>
    
     
    </>
  )
}

export default App
