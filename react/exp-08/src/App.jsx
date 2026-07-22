import Card from './components/Card'
import React from 'react'

const App = () => {

 const arr = [
  {
    logo: "https://static.vecteezy.com/system/resources/previews/011/598/471/original/google-logo-icon-illustration-free-vector.jpg",
    
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/027/127/473/large_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
   
  },
  {
    logo: "https://www.fineprintart.com/images/blog/amazon-logo/amazon_logo_history_5.jpg",
    
  },
];

  return (


    <div className="flex flex-row items-center justify-center gap-9 h-screen">

     

    {arr.map(function(elem,idx){

    return <div key={idx}>
      <Card logo={elem.logo}/>
      </div>
        
      

    })}
     
   </div>

  )
}
        
      
    
  

export default App