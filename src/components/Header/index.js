import React from 'react'

import logo from '../../assets/logo.svg'

import { HeaderContainer } from './Header.style'

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo InCicle" />
    </HeaderContainer>
  )
}

export default Header
