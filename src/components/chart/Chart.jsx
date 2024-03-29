import { Doughnut } from 'react-chartjs-2'
import React, { useEffect, useState, useContext } from 'react'
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { UserUidContext, tokenContext } from '../../context/Context'
import './Chart.css'

/**
 * Represents a Chart component.
 *
 * @returns {*} - returns a chart component.
 */
function Chart() {
  const [seed, setSeed] = useState([])
  const [irrigation, setIrrigation] = useState([])
  const [fertilizer, setFertilizer] = useState([])
  const [period, setPeriod] = useState('')
  const [bool, setBool] = useState(false || true)
  const [isLoading, setIsLoading] = useState(false)
  const { userUid } = useContext(UserUidContext)
  const { token } = useContext(tokenContext)
  const url = 'https://greengrass-backend.herokuapp.com/api/v1/chart/'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url + userUid, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        if (!data.ok) {
          throw Error('No data could be fetched')
        }
        const json = await data.json()
        if (json.length > 0) {
          setIrrigation(json[0].irrigation)
          setFertilizer(json[0].fertilizer)
          setSeed(json[0].seeds)
          setPeriod(json[0].period)
          setIsLoading(true)
        } else {
          throw new Error('No data could be fetched')
        }
      } catch (err) {
        console.log(err)
      }
    }
    return fetchData()
  }, [userUid, bool, token])

  const handleOnClick = async (e) => {
    e.preventDefault()
    const payload = {
      UserId: userUid,
      period,
      seed,
      irrigation,
      fertilizer,
    }
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })

    if (bool) { // Makes the useEffect run everytime the fetch runs. That means that the data that is posted is also retrieved almost instantly.
      setBool(false)
    } else {
      setBool(true)
    }
  }

  const calculateSum = () => {
    let irr = parseInt(irrigation, 10)
    let see = parseInt(seed, 10)
    let fer = parseInt(fertilizer, 10)
    if (Number.isNaN(irr)) { irr = 0 }
    if (Number.isNaN(see)) { see = 0 }
    if (Number.isNaN(fer)) { fer = 0 }
    const sum = irr + see + fer
    return sum
  }

  return (
    <div className="all">
      <div className="chart">
        <Doughnut
          data={{
            datasets: [
              {
                data: [irrigation, seed, fertilizer],
                backgroundColor: ['rgba(130,179,174, 1)', 'rgba(136, 183, 119, 0.8)', 'rgba(205,187,153, 1)'],
              },
            ],
          }}
          height={400}
          width={600}
          plugins={[ChartDataLabels]}
          options={{
            maintainAspectRatio: false,
          }}
        />
        { isLoading ? (
          <p className="chart-month-text"> Din budget för
            {' '}
            {period || 'vecka 31' }
            {' '}
          </p>
        ) : <p className="chart-month-text">Ingen budget finns i databasen</p> }
        <p className="chart-month-calculateSum">{calculateSum()} kr</p>
      </div>
      <div className="chart-wrapper">
        <div className="chart-container">
          <form className="form-wrapper" onSubmit={handleOnClick}>
            <input
              type="string"
              placeholder="Gräsfrö"
              className="chart-input-seed"
              required
              onChange={(e) => setSeed(e.target.value)}
            />
            <input
              type="text"
              placeholder="Gödsel"
              className="chart-input-fertilizer"
              required
              onChange={(e) => setFertilizer(e.target.value)}
            />
            <input
              type="text"
              placeholder="Bevattning"
              className="chart-input-irrigation"
              required
              onChange={(e) => setIrrigation(e.target.value)}
            />
            <input
              type="text"
              placeholder="Period"
              className="chart-input"
              required
              onChange={(e) => setPeriod(e.target.value)}
            />
            <button className="chart-button" type="submit">Sätt ny budget</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chart
