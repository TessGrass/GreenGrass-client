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
        const response = await fetch('https://greengrass-backend.herokuapp.com/api/v1/todo/MsuDYdaCWeaygM6DPyncYBT08p62')
        const responseToJson = await response.json()
        console.log(responseToJson)
        if (responseToJson.length > 0) {
          console.log('responseToJson succeded')
          setTasks(responseToJson)
        }
      } catch (err) {
        console.log(err)
      }
    }
    getTodoData()
  }, [boolValue])

  const addTask = async (title) => {
    console.log(title)
    /* const newTasks = [...tasks, { title, completed: false }] */
    const payload = {
      userId: userUid,
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

  const completeTask = (task) => {
    const newTasks = [...tasks]
    newTasks.map((title) => {
      if (title === task) {
        title.completed ? title.completed = false : title.completed = true
        setTasks(newTasks)
        return true
      }
      return false
    })
  }

  const removeTask = async (task) => {
    console.log(task)

    const responseFromDelete = await fetch(url + task.id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    console.log(responseFromDelete)
    if (responseFromDelete.status === 204) {
      if (boolValue === true) {
        setBoolValue(false)
      } else {
        setBoolValue(true)
      }
    }
    /* const newTasks = [...tasks]
    newTasks.map((title) => {
      if (title === task) {
        newTasks.splice(newTasks.indexOf(title), 1);
        setTasks(newTasks)
        console.log(tasks)
        return true
      }
      return false
    }) */
  }
  return (
    <div className="todo-container">
      <div className="header">Kom ihåg</div>
      <div className="tasks">{tasks?.map((task) => (
        <div className="task" key={key++} style={{ textDecoration: task.completed ? 'line-through' : '' }}>
          {task.title}
          <button type="submit" className="remove-task-button" onClick={() => removeTask(task)}>X</button>
          <button type="submit" className="complete-task-button" onClick={() => completeTask(task)}>OK!</button>
        </div>
      ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="input-todo" value={value} placeholder="Lägg till en uppgift" onChange={(e) => setValue(e.target.value)} />
        <button type="submit" className="add-todo-button">Lägg till</button>
      </form>
    </div>
  )
}

export default Todo
