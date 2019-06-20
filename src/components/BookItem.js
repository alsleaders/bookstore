import React, { useState } from 'react'
import axios from 'axios'

const MY_API = 'https://localhost:5001/api'

export default function BookItem(props) {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted)
  const [errorMessage, setErrorMessage] = useState('')

  const toggleCompletion = () => {
    setIsCompleted(oldIsCompleted => !oldIsCompleted)
    axios
      .put(`${MY_API}/items/${props.book}`, {
        completed: isCompleted,
        name: props.book
      })
      .then(resp => {
        console.log({ resp })
        console.log({ isCompleted })
        if (resp.status !== 200) {
          //handle the error here
          setErrorMessage('WARNING, change not saved')
        }
      })
  }

  return (
    <>
      <li className={isCompleted ? 'completed' : ''}>
        <h4 className="item-text">{props.book}</h4>
        <button onClick={toggleCompletion}>
          {isCompleted ? 'undo' : 'complete'}
        </button>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      </li>
    </>
  )
}
