import styled from 'styled-components'
import { TitleProps } from '../../styles/LayoutComponents'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 20px;

  margin-top: 30px;

  h4 {
    ${TitleProps({ size: '1.8rem', weight: 'bold' })}

    a {
      text-decoration: underline;
      color: #3489b1;
    }
  }
`
