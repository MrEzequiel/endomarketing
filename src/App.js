import React from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Post from './components/Post'
import Advertising from './components/Advertising'
import Footer from './components/Footer'

import GlobalStyles from './styles/GlobalStyles'

const App = () => {
  return (
    <>
      <Header />

      <Main>
        <Post />
        <Advertising />
      </Main>

      <Footer />

      <GlobalStyles />
    </>
  )
}

export default App
