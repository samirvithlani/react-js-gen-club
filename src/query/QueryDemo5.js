import axios from 'axios'
import React, { useState } from 'react'

export const QueryDemo5 = () => {
    const [city, setcity] = useState('')
    const [data, setdata] = useState('')
    

    const getWeatherData = async (e) => {

        e.preventDefault();

        var config = {
            method:'GET',
            url:"https://community-open-weather-map.p.rapidapi.com/weather",
            params:{
                q:city
            },
            headers:{
              
            }
        }

        axios(config).then(res=>{
            setdata(res.data)
        })

    }
    return (
        <div>

            <form>
                <input type="text" value={city} onChange={(e) => setcity(e.target.value)} />
                <input type="submit" onClick={(e)=>{getWeatherData(e)}} />
            </form>

            {
                data !== ''?
                data.weather[0].main
                :null
            }
            {
                data !== ''?
                data.main.humidity
                :null
            }
        </div>
    )
}
