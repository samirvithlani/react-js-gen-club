import React from 'react'

export const Landing = ({productName}) => {
    var x;
    if(productName === "gun"){
        throw new Error("Gun not allowed")
    }
  return (
    <div>
        {productName}
        
    </div>
  )
}
