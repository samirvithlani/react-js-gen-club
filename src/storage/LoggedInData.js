import React, { useEffect } from 'react'

export const LoggedInData = () => {
    const getData = ()=>{

        alert(`Name = ${localStorage.getItem('name')} \nEmail = ${localStorage.getItem('email')}`);

    }
    useEffect(() => {
      
    getData();
      return () => {
        
      }
    }, [])
    
  return (
    <div>


    </div>
  )
}
