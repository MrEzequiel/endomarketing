import React from 'react'

import { MainContainer } from './Main.style'

function Main({ children }) {
  return (
    <MainContainer gutter="30px" container="1206px">
      {children}
    </MainContainer>
  )
}

export default Main
