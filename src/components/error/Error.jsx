import React from 'react'
import miImagen from "./404.jpg"





function Error(props) {
    
  return (
    <div>
        <h1>Soy el Error</h1>
        <img width="1200" src={miImagen} alt="Error 404" />
    </div>
  )
}

export default Error