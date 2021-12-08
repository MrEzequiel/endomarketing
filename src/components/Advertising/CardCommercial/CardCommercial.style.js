import styled from 'styled-components'
import { TitleProps } from '../../../styles/LayoutComponents'

export const CardCommercialContainer = styled.div`
  background: rgba(52, 137, 177, 0.1);
  padding: 10px 6px;
`

export const TitleCommercial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    ${TitleProps({ size: '1.3rem', weight: '400' })}
  }
`

export const IconCommercial = styled.div`
  display: flex;
  gap: 3px;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #ffffff;
    width: 16px;
    height: 16px;
    border-radius: 50%;

    &:last-child img {
      width: 11px;
      height: 3px;
    }
  }
`

export const ImageCommercial = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 5px;

  img {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }
`
