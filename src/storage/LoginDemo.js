import React from 'react'

export const LoginDemo = () => {

    var loginData = {
        name:"raj",
        email:"raj@gmail.com"
    }
    const store = ()=>{

        localStorage.setItem('name',loginData.name);
        localStorage.setItem('email',loginData.email);
        localStorage.setItem('data',JSON.stringify(loginData));
    }

  return (
    <div>
            <button onClick = {store}>store</button>
    </div>
  )
}
