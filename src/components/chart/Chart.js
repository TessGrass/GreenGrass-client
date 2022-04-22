import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useEffect, useState, useContext } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { UserUidContext } from '../../context/Context'
import { tokenContext } from '../../context/Context'
import './Chart.css'

const Chart = () => {

const [seed, setSeed] = useState([])
const [irrigation, setIrrigation] = useState([])
const [fertilizer, setFertilizer] = useState([])
const [month, setMonth] = useState('')
const [bool, setBool] = useState(false || true)
const {userUid, setUserUid} = useContext(UserUidContext)
const {token, setToken} = useContext(tokenContext)
const url = 'https://greengrass-backend.herokuapp.com/api/v1/chart/'


useEffect(() => {
  console.log('-----chart component-----')
  const fetchData = async () => {
    try {
    const data = await fetch(url + userUid)
    if (!data.ok) {
      throw Error('Could not fetch the data')
    }
    if(data.respons === 200) {
    const json = await data.json()
    console.log(json)
    setIrrigation(json[0].irrigation)
    setFertilizer(json[0].fertilizer)
    setSeed(json[0].seeds)
    setMonth(json[0].month)
    } else {
      throw new Error('No data could be fetched')
    }
  } catch (err) {
    console.log(err)
  }
}
  fetchData()
  return
}, [userUid, bool])


const handleOnClick = async (e) => {
  e.preventDefault()
  const payload = {
    UserId: userUid,
    month: month,
    seed: seed,
    irrigation: irrigation,
    fertilizer: fertilizer
  }

  await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  })

   if (bool) {
    setBool(false)
  } else {
    setBool(true)
  }
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
    <p>Din budget för {month} </p>
    <div className="chart-wrapper">
      <div className="chart-container">
    <form className="form-wrapper" onSubmit={handleOnClick}>
    <input type="text" placeholder="Gräsfrö" className="chart-input" required value={seed} 
          onChange={(e) => setSeed(e.target.value)}/>
          {/*  <label className="chart-label">Kostnad gräsfrö </label> */}
          <input type="text" placeholder="Gödsel" className="chart-input" required value={fertilizer} 
          onChange={(e) => setFertilizer(e.target.value)}/>
          {/* <label className="chart-label">Kostnad gödsel </label> */}
          <input type="text" placeholder="Bevattning" className="chart-input"required value={irrigation} 
          onChange={(e) => setIrrigation(e.target.value)}/>
        {/*   <label className="chart-label">Kostnad bevattning </label> */}
          {/* <label>Välj månad </label>
    <select id="month" name="month" required onChange={(e) => setMonth(e.target.value)}>
    <option></option>
    <option value="Januari">Januari</option>
    <option value="Februari">Februari</option>
    <option value="Mars">Mars</option>
    <option value="April">April</option>
    <option value="Maj">Maj</option>
    <option value="Juni">Juni</option>
    <option value="Juli">Juli</option>
    <option value="Augusti">Augusti</option>
    <option value="September">September</option>
    <option value="Oktober">Oktober</option>
    <option value="November">November</option>
    <option value="December">December</option>
    </select> */}
    <button className="chart-button" type="submit">Lägg till</button>
    </form>
    </div>
    </div>
    </div>
  
  )
}

export default Chart


  /* const data = await fetch(`https://greengrass-backend.herokuapp.com/api/v1/chart/${userUid}`) */