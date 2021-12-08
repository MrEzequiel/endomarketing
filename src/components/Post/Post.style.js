import styled, { css } from 'styled-components'
import { ButtonProps } from '../../styles/LayoutComponents'

export const EntryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`

export const TitleSection = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
`

const ButtonPropsEntry = () => css`
  ${ButtonProps({ size: '1.4rem', padding: '0 8px' })}

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
`

export const TypeButton = styled.button`
  ${ButtonPropsEntry()}
  border: 1px solid #B4B4B4;
  background: #fff;
  width: 95px;
`

export const CreateButton = styled.button`
  ${ButtonPropsEntry()}
  background: #3489B1;
  color: #fff;
  font-weight: bold;
  width: 103px;
  margin-left: 8px;
`
