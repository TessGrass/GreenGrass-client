import React, { useState } from 'react'
/* import axios from 'axios' */
import './Weather.css'

/**
 * Represents a weather component.
 *
 * @returns {*} - returns a weather component.
 */
function Weather() {
  const [data, setData] = useState({})
  const [forecastData, setForecastData] = useState([])
  const [location, setLocation] = useState('')
  const [error, setError] = useState(false)
  const country = 'SE'
  let forecastArray = []

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},${country}&exclude=hourly,daily&appid=f09f9a63decd0dc322a3ecb1f9f1a181&units=metric`

  const searchLocation = async (event) => {
    console.log('-----searchLocation-----')
    if (event.key === 'Enter') {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          setError(true)
        }
        if (response.status === 200) {
          setError(false)
          const fetchedData = await response.json()
          setData(fetchedData)
          console.log(fetchedData)
          /*  const latitude = fetchedData.coord.lat
          const longitude = fetchedData.coord.lon */
          const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${fetchedData.coord.lat}&lon=${fetchedData.coord.lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=e652f10deab03ee65306cfc45b13dca9`
          const responseForecast = await fetch(forecastUrl)

          if (responseForecast.status === 200) {
            const fetchedData = await responseForecast.json()
            forecastArray = [...fetchedData.daily]
            const arr = []
            forecastArray.map((currElement, index) => {
              if (index > 0 && index < 6) {
                arr.push(currElement)
              }
              return arr
            })
            setForecastData(arr)
            /* axios.get(forecastUrl).then((response) => {
              forecastArray = [...response.data.daily]
              const arr = []
              forecastArray.map((currElement, index) => {
                if (index > 0 && index < 6) {
                  arr.push(currElement)
                }
                return arr
              })
              setForecastData(arr)
            }) */
          }
        }
        /*  axios.get(url).then((response) => {
          if (!response.ok) {
            setError(true)
            console.log(error)
          }
          if (response.status === 200) {
            setData(response.data)
            const latitude = response.data.coord.lat
            const longitude = response.data.coord.lon
            console.log(latitude)
            console.log(longitude)
            const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,hourly,minutely,alerts&units=metric&appid=e652f10deab03ee65306cfc45b13dca9`
            axios.get(forecastUrl).then((response) => {
              forecastArray = [...response.data.daily]
              const arr = []
              forecastArray.map((currElement, index) => {
                if (index > 0 && index < 6) {
                  arr.push(currElement)
                }
                return arr
              })
              setForecastData(arr)
            })
          } else {
            setError(true)
            console.log(error)
          }
        }) */
      } catch (err) {
        console.log(err)
      }
    }
  }

  /**
   * Calculates the weekday.
   *
   * @param {string} dt - fetched date from openweathermap api.
   * @returns {string} - the weekday.
   */
  function createDate(dt) {
    console.log('-----createDate-----')
    const day = new Date(dt * 1000)
    // return day.toLocaleString("en-us", options);
    return day.toLocaleString('sv-SE', { weekday: 'long' })
  }

  return (
    <div className="weather-parent">
      <div className="weather-wrapper">
        <div className="search-field">
          <input value={location} onChange={(event) => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder="Sök din stad" type="text" />
        </div>
        {error ? <div className="error-city-input">Inga sökträffar</div> : false }
        {data.name ? <p className="city">{data.name}</p> : <p className="city">Stockholm</p> }
        {/* <p className="city">{data.name}</p> */}
        {data.main ? <span className="temperature"> {Math.floor(data.main.temp)}°C {/*  <img className="forecast-today-img" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon" /> */} </span> : <span className="temperature">32°C</span>}
        {/*   {data.main ? <img className="forecast-today-img" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon" /> : null} */}
        <div className="bottom">
          {data.main ? <img className="forecast-today-img" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="icon" /> : null}
          <div className="humidity">
            {data.wind ? <p className="topDesc">{data.wind.speed} m/s</p> : <p className="topDesc">5.23 m/s</p>}
            <p className="desc">Vindstyrka</p>
          </div>
          <div className="wind">
            {data.main ? <p className="topDesc">{data.main.humidity}%</p> : <p className="topDesc">62%</p>}
            <p className="desc">Luftfuktighet</p>
          </div>
          <div className="rain">
            {data.rain ? <p className="topDesc">{data.rain['1h']} mm</p> : <p className="topDesc"> 0 mm</p>}
            <p className="desc">Nederbörd</p>
          </div>
        </div>
      </div>
      <section className="forecast-section">
        <div className="forecast-container">
          <p className="forecast-five-days-text">5-dygnsprognos</p>
          <div className="forecast-wrapper">
            {forecastData.map((c) => (
              <div className="forecast-box" key={c.dt}>
                {/* <p>{console.log(c.weather[0].icon)}</p> */}
                <p className="forecast-weekday">{createDate(c.dt)}</p>
                <div className="forecast-img-wrapper">
                  <img className="forecastImg" src={`http://openweathermap.org/img/wn/${c.weather[0].icon}@2x.png`} alt="icon" />
                </div>
                <p className="forecast-temp">Dag {Math.floor(c.temp.day)}°C </p>
                <p className="forecast-temp">Natt {Math.floor(c.temp.night)}°C </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Weather