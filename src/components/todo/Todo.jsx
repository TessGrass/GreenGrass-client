import {
  React, useState, useEffect, useContext
} from 'react'
import { UserUidContext, tokenContext } from '../../context/Context'
import './Todo.css'

/**
 * Represents a Todo component.
 *
 * @returns {*} returns the Todo component.
 */
function Todo() {
  let key = 1
  const url = 'https://greengrass-backend.herokuapp.com/api/v1/todo/'
  const { userUid } = useContext(UserUidContext)
  const { token } = useContext(tokenContext)
  const [value, setValue] = useState('')
  const [boolValue, setBoolValue] = useState(false)
  const [tasks, setTasks] = useState([
    {
      title: '',
      completed: false
    },
  ])

  useEffect(() => {
    console.log('-----Todo UseEffect Component-----')
    const getTodoData = async () => {
      try {
        const response = await fetch(url + userUid, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
          },
        })
        const responseToJson = await response.json()
        if (responseToJson.length > 0) {
          setTasks(responseToJson)
        } else if (responseToJson.status_code === 404) {
          console.log('Could not fetch the data')
        }
      } catch (err) {
        console.log(err)
      }
    }
    return getTodoData()
  }, [boolValue, token, userUid])

  const addTask = async (title) => {
    console.log(title)
    const payload = {
      UserId: userUid,
      title,
      completed: false
    }
    const responseFromPost = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    })
    if (responseFromPost.status === 204) {
      if (boolValue === true) {
        setBoolValue(false)
      } else {
        setBoolValue(true)
      }
    }
  }

  const handleSubmit = (e) => {
    console.log(value)
    e.preventDefault()
    if (!value) {
      return
    }
    addTask(value)
    setValue('')
  }

  const completeTask = async (task) => { // add.userId in payload
    let taskStatus = true;
    if (task.completed) {
      taskStatus = false
    }
    const payload = {
      UserId: userUid,
      completed: taskStatus
    }
    const responseFromPatch = await fetch(url + task.id, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    })
    console.log(responseFromPatch)
    if (responseFromPatch.status === 204) {
      if (boolValue === true) {
        setBoolValue(false)
      } else {
        setBoolValue(true)
      }
    }
  }

  const removeTask = async (task) => { // add userid in payload
    const payload = {
      UserId: userUid
    }
    const responseFromDelete = await fetch(url + task.id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    })
    console.log(responseFromDelete)
    if (responseFromDelete.status === 204) {
      if (boolValue === true) {
        setBoolValue(false)
      } else {
        setBoolValue(true)
      }
    }
  }
  return (
    <div className="todo-container">
      <div className="header">Kom ihåg</div>
      <div className="task-map-wrapper">
        <div className="tasks">{tasks.map((task) => (
        // eslint-disable-next-line no-plusplus
          <div className="task" key={key++} style={{ textDecoration: task.completed ? 'line-through' : '' }}>
            {task.title}
            <button type="submit" className="remove-task-button" onClick={() => removeTask(task)}>X</button>
            <button type="submit" className="complete-task-button" onClick={() => completeTask(task)}>OK!</button>
          </div>
        ))}
        </div>
      </div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input type="text" className="input-todo" value={value} placeholder="Lägg till en uppgift" onChange={(e) => setValue(e.target.value)} />
        <button type="submit" className="add-todo-button">Lägg till</button>
      </form>
    </div>
  )
}

export default Todo
