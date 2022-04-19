import React from 'react'
import axios from 'axios'
import { Doughnut } from 'react-chartjs-2'
import { useEffect, useState, useContext } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { UserUidContext } from '../../context/Context'

import './Chart.css'

const Chart = () => {

const [seed, setSeed] = useState([])
const [irrigation, setIrrigation] = useState([])
const [fertilizer, setFertilizer] = useState([])
const [month, setMonth] = useState('')
const [data, setData] = useState([])
const {userUid, setUserUid} = useContext(UserUidContext)
const url = 'http://localhost:8081/api/v1/chart'


useEffect(() => {
  console.log('-----chart component-----')
  console.log(userUid)
  // declare the data fetching function
  const fetchData = async () => {
    const data = await fetch(`http://localhost:8081/api/v1/chart/${userUid}`)
    if (!data.ok) {
      throw Error('Could not fetch the data')
    }
    const json = await data.json()
    console.log(json)
    setIrrigation(json[0].irrigation)
    setFertilizer(json[0].fertilizer)
    setSeed(json[0].seeds)
    setData(json)
  }
  if(data.length === 0) {
    fetchData()
  }
    // make sure to catch any error
}, [])


const handleSubmit = async (e) => {
  e.preventDefault()
  const payload = {
    UserId: userUid,
    seed: seed,
    irrigation: irrigation,
    fertilizer: fertilizer
  }
  const response = await axios.post(url, payload)
  console.log(response)
  console.log(payload)
}


return (
  <div>
      <div className="chart-navbar">
 
      </div>
    <div className="Chart">
    <Doughnut
      data={{
        datasets: [
          {
            data: [irrigation, seed, fertilizer],
            backgroundColor: ['rgba(171, 220, 224, 3)', 'rgba(199, 232, 181, 1.5)', 'rgba(235, 188, 201, 3)'],
          },
        ],
        labels: ['Bevattning', 'Gräsfrö', 'Gräsgödsel'],
      }}      
      height={400}
      width={600}
      options={{
        maintainAspectRatio: false
      }   
    }
    />
    </div>
    <div className="chart-form">
    <form onSubmit={handleSubmit}>
    <label>Välj månad </label>
    <select id="month" name="month" onChange={(e) => setMonth(e.target.value)}>
    <option>Månad</option>
    <option value="jan">Januari</option>
    <option value="feb">Februari</option>
    <option value="mar">Mars</option>
    <option value="apr">April</option>
    <option value="maj">Maj</option>
    <option value="jun">Juni</option>
    <option value="jul">Juli</option>
    <option value="aug">Augusti</option>
    <option value="sep">September</option>
    <option value="okt">Oktober</option>
    <option value="nov">November</option>
    <option value="dec">December</option>
    </select>
    <div>
    <label>Kostnad gräsfrö </label>
    <input type="text" value={seed} 
          onChange={(e) => setSeed(e.target.value)}/>
          <label>Kostnad gödsel </label>
          <input type="text" value={fertilizer} 
          onChange={(e) => setFertilizer(e.target.value)}/>
          <label>Kostnad bevattning </label>
          <input type="text" value={irrigation} 
          onChange={(e) => setIrrigation(e.target.value)}/>
    <button type="submit">Lägg till</button>
    </div>
    </form>
    </div>
    </div>

  )
}

export default Chart
