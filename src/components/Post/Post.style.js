import styled, { css } from 'styled-components'

export const EntryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitleSection = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
`

const ButtonProps = () => css`
  cursor: pointer;
  text-transform: uppercase;
  font-family: 'Segoe UI', sans-serif;
  font-size: 1.4rem;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
  padding: 0 8px;

  border-radius: 4px;
`

export const TypeButton = styled.button`
  ${ButtonProps()}
  border: 1px solid #B4B4B4;
  background: #fff;
  width: 95px;
`

export const CreateButton = styled.button`
  ${ButtonProps()}
  background: #3489B1;
  color: #fff;
  font-weight: bold;
  width: 103px;
  margin-left: 8px;
`
