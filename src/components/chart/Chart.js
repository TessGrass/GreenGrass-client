import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useEffect, useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import Navbar from '../navbar/Navbar'
import './Chart.css'


const Chart = () => {

const [seed, setSeed] = useState([])
const [month, setMonth] = useState('')
const [data, setData] = useState([])

useEffect(() => {
  // declare the data fetching function
  const fetchData = async () => {
    const data = await fetch('http://localhost:8000/userData/1');
    if (!data.ok) {
      throw Error('Could not fetch the data')
    }
    const json = await data.json()
    console.log(json)
    setData(json)
  }
  if(data.length === 0) {
    fetchData()
  }
    // make sure to catch any error
}, [])


const handleSubmit = (e) => {
  e.preventDefault()
  console.log('här')
  console.log(e.target)
  console.log(seed)
  console.log(month)
}

return (
  <div>
      <div className="chart-navbar">
      <Navbar />
      </div>
    <div className="Chart">
    <Doughnut
      data={{
        datasets: [
          {
            data: [data.irregation, data.seeds, data.fertilizer],
            backgroundColor: ['rgba(199, 232, 181, 1.5)', 'rgba(171, 220, 224, 3)', 'rgba(235, 188, 201, 3)'],
          },
        ],
        labels: ['Gräsfrö', 'Bevattning', 'Gräsgödsel'],
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
    <label>Kostnad gräsfrö </label>
    <input type="text" value={seed} 
          onChange={(e) => setSeed(e.target.value)}/>
    <button type="submit" value={seed}>Lägg till</button>
    </form>
    </div>
    </div>

  )
}

export default Chart
