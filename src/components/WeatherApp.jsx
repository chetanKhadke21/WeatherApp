import React, { useEffect } from 'react'
import { useState } from 'react'
import SearchBar from './SearchBar'
import WeatherInfo from './WeatherInfo'

const WeatherApp = () => {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/forecast?"
  let API_KEY = "4821937b51a01d5809377db14eed7445"

    async function searchWeather(){
        setLoading(true)
        let jsonResponse = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`)
        let data = await jsonResponse.json();
       
        
        setLoading(false)

        let weatherData = {
            city: data.city.name,
            temp : data.list[0].main.temp,
            humidity : data.list[0].main.humidity,
            tempMin : data.list[0].main.temp_min,
            tempMax : data.list[0].main.temp_max,
            feelsLike : data.list[0].main.feels_like,
            description : data.list[0].weather[0].description,
            code : data.cod

        }

        setWeather(weatherData);
        
        

    }

    useEffect(() => {
        async function searchWeather(){
          let jsonResponse = await fetch(`${API_URL}q=Delhi&appid=${API_KEY}&units=metric`)
          let data = await jsonResponse.json();
          

          let weatherData = {
              city: data.city.name,
              temp : data.list[0].main.temp,
              humidity : data.list[0].main.humidity,
              tempMin : data.list[0].main.temp_min,
              tempMax : data.list[0].main.temp_max,
              feelsLike : data.list[0].main.feels_like,
              description : data.list[0].weather[0].description,
              code : data.cod
          }

          setWeather(weatherData);
          

      }

      searchWeather();
    }, [])
    

  return (
    <div>
        <SearchBar city={city} setCity={setCity} weather={weather} setWeather={setWeather} searchWeather={searchWeather}/>
        <WeatherInfo weather={weather} setWeather={setWeather} loading={loading}/>
    </div>
  )
}

export default WeatherApp