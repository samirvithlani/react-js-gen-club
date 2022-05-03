import React from 'react'

export const TryDemo = () => {

    var x ;

    const data = ()=>{

        try{
            console.log(x.length)

        }
        catch(e){
            console.error(e)
        }
    }

  return (
    <div>

        <button onClick={() => {data()} }>DATA</button>
    </div>
  )
}
