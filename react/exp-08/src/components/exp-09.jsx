import React from 'react'

const Card = (props) => {
  return (
    <div style={{
      width: "400px",
      height: "400px",
      backgroundColor: "#e5e7eb",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      padding: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <img src={props.logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }}/>
    </div>
  )
}

export default Card