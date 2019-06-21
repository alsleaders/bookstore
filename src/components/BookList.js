import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BookItem from './BookItem'

const MY_API = 'https://localhost:5001/api'

export default function BookList() {
  const [tome, SetTome] = useState('')
  const [tomeList, SetTomeList] = useState([])

  useEffect(() => {
    axios.get(`${MY_API}/items`).then(resp => {
      console.log(resp.data)
      SetTomeList(resp.data)
    })
  }, [])

  const addBookToList = e => {
    e.preventDefault()
    console.log({ tome })
    axios
      .post(`${MY_API}/items`, {
        name: tome
      })
      .then(resp => {
        console.log({ resp })
        SetTomeList(oldList => oldList.concat(resp.data))
        SetTome('')
      })
  }

  return (
    <section class="content">
      <form class="form-center" onSubmit={addBookToList}>
        <div>
          <input
            type="text"
            placeholder="Did you buy another book?"
            value={tome.name}
            onChange={e => {
              SetTome(e.target.value)
            }}
          />
        </div>
        {/* <div>
          <input
            type="text"
            placeholder="Who wrote this doorstop?"
            value={tome.}
            onChange={e => {
              SetTome(e.target.value)
            }}
          />
        </div> */}
        <button>+</button>
      </form>
      <ul>
        {tomeList.map(item => {
          return (
            <BookItem
              key={item.id}
              id={item.id}
              book={item.name}
              isCompleted={item.isCompleted}
            />
          )
        })}
      </ul>
    </section>
  )
}
