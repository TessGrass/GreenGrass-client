import { Doughnut } from 'react-chartjs-2'
import React, { useEffect, useState, useContext } from 'react'
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { UserUidContext, tokenContext } from '../../context/Context'
import './Chart.css'

/**
 * Represents a Chart component.
 * @returns {*} - returns a chart component.
 */
function Chart() {
  const [seed, setSeed] = useState([])
  const [irrigation, setIrrigation] = useState([])
  const [fertilizer, setFertilizer] = useState([])
  const [period, setPeriod] = useState('')
  const [bool, setBool] = useState(false || true)
  // eslint-disable-next-line no-unused-vars
  const { userUid, setUserUid } = useContext(UserUidContext)
  // eslint-disable-next-line no-unused-vars
  const { token, setToken } = useContext(tokenContext)
  const url = 'https://greengrass-backend.herokuapp.com/api/v1/chart/'

  useEffect(() => {
    console.log('-----Chart Component-----')
    const fetchData = async () => {
      try {
        const data = await fetch(url + userUid)
        if (!data.ok) {
          throw Error('Could not fetch the data')
        }
        if (data.ok) {
          const json = await data.json()
          setIrrigation(json[0].irrigation)
          setFertilizer(json[0].fertilizer)
          setSeed(json[0].seeds)
          setPeriod(json[0].period)
        } else {
          throw new Error('No data could be fetched')
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [userUid, bool])

  const handleOnClick = async (e) => {
    e.preventDefault()
    const payload = {
      UserId: userUid,
      period,
      seed,
      irrigation,
      fertilizer
      /* UserId: userUid,
      period: period,
      seed: seed,
      irrigation: irrigation,
      fertilizer: fertilizer */
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

  const calculateSum = () => {
    const irr = parseInt(irrigation, 10)
    const see = parseInt(seed, 10)
    const fer = parseInt(fertilizer, 10)
    return (irr + see + fer)
  }

  return (
    <div className="all">
      <div className="Chart">
        {/*  <div className="Chart"> */}
        <Doughnut
          data={{
            datasets: [
              {
                data: [irrigation, seed, fertilizer],
                backgroundColor: ['rgba(130,179,174, 1)', 'rgba(209,242,165, 0.8)', 'rgba(205,187,153, 1)'],
              },
            ],
            /* labels: ['Bevattning', 'Gräsfrö', 'Gräsgödsel'], */
          }}
          height={400}
          width={600}
          plugins={[ChartDataLabels]}
          options={{
            maintainAspectRatio: false
          }}
        />
        {/*    </div> */}
        {/* <div className="chart-color-wrapper">
          <div className="chart-color-box-irrigation"><p className="chart-color-text-irrigation">Gödsel</p></div>
          <div className="chart-color-box-irrigation"><p className="chart-color-text-irrigation">Gräsfrö</p></div>
          <div className="chart-color-box-irrigation"><p className="chart-color-text-irrigation">Bevattning</p></div>
        </div> */}
        <p className="chart-month-text">
          Din budget för
          {' '}
          { period }
          {' '}
          {/*  är
            {' '}
            {calculateSum()}
            {' '}
            kr */}
        </p>
        <p className="chart-month-calculateSum">{calculateSum()} kr</p>
      </div>
      <div className="chart-wrapper">
        <div className="chart-container">
          <form className="form-wrapper" onSubmit={handleOnClick}>
            <input
              type="text"
              placeholder="Gräsfrö"
              className="chart-input-seed"
              required
              onChange={(e) => setSeed(e.target.value)}
            />
            {/*  <label className="chart-label">Kostnad gräsfrö </label> */}
            <input
              type="text"
              placeholder="Gödsel"
              className="chart-input-fertilizer"
              required
              // value={fertilizer}
              onChange={(e) => setFertilizer(e.target.value)}
            />
            {/* <label className="chart-label">Kostnad gödsel </label> */}
            <input
              type="text"
              placeholder="Bevattning"
              className="chart-input-irrigation"
              required
              // value={irrigation}
              onChange={(e) => setIrrigation(e.target.value)}
            />
            <input
              type="text"
              placeholder="Period"
              className="chart-input"
              required
             // value={period}
              onChange={(e) => setPeriod(e.target.value)}
            />
            {/*   <label className="chart-label">Kostnad bevattning </label> */}
            <button className="chart-button" type="submit">Sätt ny budget</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chart

/* const data = await fetch(`https://greengrass-backend.herokuapp.com/api/v1/chart/${userUid}`) */