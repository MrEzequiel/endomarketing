import React from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Post from './components/Post'

import GlobalStyles from './styles/GlobalStyles'

const App = () => {
  return (
    <>
      <Header />

      <Main>
        <Post />
      </Main>

      <GlobalStyles />
    </>
  )
}

export default App
