import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import BookList from './components/BookList'

class App extends Component {
  render() {
    return (
      <>
        <HelloWorld />
        <BookList />
      </>
    )
  }
}

export default App
