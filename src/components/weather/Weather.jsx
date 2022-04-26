import React, { useState } from 'react'
import axios from 'axios'
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
  const country = 'SE'
  let forecastArray = []

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},${country}&exclude=hourly,daily&appid=f09f9a63decd0dc322a3ecb1f9f1a181&units=metric`
  /* const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${location},${country}&exclude=hourly&appid=f09f9a63decd0dc322a3ecb1f9f1a181&units=metric` */
  const coordinates = `http://api.openweathermap.org/geo/1.0/direct?q=${location},${country}&limit=1&appid=f09f9a63decd0dc322a3ecb1f9f1a181`

  /*  const filterForecastArray = () => {
    console.log('-----filterForecastArray-----')
    console.log(forecastArray)
    if (true) {
      let newArr = forecastArray.map((currElement, index) => {
        if(index > 0 && index < 6) {
        newArr.push(currElement)
        }
      })
      console.log(newArr)
      setForecastData(newArr)
    }
  } */

  const searchLocation = (event) => {
    console.log('-----searchLocation-----')
    // console.log(response.data)
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        console.log(response.data)
        setData(response.data)
      })

      axios.get(coordinates).then((response) => {
        if (response.status === 200) {
          const latitude = response.data[0].lat
          const longitude = response.data[0].lon
          const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,hourly,minutely,alerts&units=metric&appid=e652f10deab03ee65306cfc45b13dca9`
          axios.get(forecastUrl).then((response) => {
            console.log('axios')
            forecastArray = [...response.data.daily]
            /* filterForecastArray() */
            const arr = []
            forecastArray.map((currElement, index) => {
              if (index > 0 && index < 6) {
                arr.push(currElement)
              }
              return arr
            })
            console.log(arr[0].weather[0].icon)
            setForecastData(arr)
            // const test = JSON.stringify(response.data.daily)
            /* const test = JSON.parse(response.data.daily)
            console.log(test) */
            // console.log(response.data.daily)
            // setForecastData(response.data.daily)
            // console.log(response.data.daily)
          })
        }
      })
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
        {data.name ? <p className="city">{data.name}</p> : <p className="city">Stockholm</p> }
        {/* <p className="city">{data.name}</p> */}
        {data.main ? <h2 className="temperature"> {Math.floor(data.main.temp)}°C </h2> : <h2 className="temperature">32°C</h2>}
        <div className="bottom">
          <div className="humidity">
            {data.wind ? <p className="topDesc">{data.wind.speed} m/s</p> : <p className="topDesc">5.23 m/s</p>}
            <p className="desc">Vindstyrka</p>
          </div>
          <div className="wind">
            {data.main ? <p className="topDesc">{data.main.humidity}%</p> : <p className="topDesc">62%</p>}
            <p className="desc">Luftfuktighet</p>
          </div>
        </div>
      </div>
      <section className="forecast-section">
        <div className="forecast-container">
          <p className="forecast-five-days-text">5 dygnsprognos</p>
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
