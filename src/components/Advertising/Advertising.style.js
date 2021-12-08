import styled from 'styled-components'
import { TitleProps } from '../../styles/LayoutComponents'

export const AdvertisingContainer = styled.section`
  display: flex;
  gap: 20px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: start;

  @media (max-width: 900px) {
    flex-direction: row-reverse;
  }
`

export const Title = styled.h3`
  ${TitleProps({ size: '1.6rem', weight: 'bold' })}
`

export const Text = styled.p`
  font-size: 1.4rem;
  line-height: 2.1rem;
  font-weight: 300;
  margin-top: 10px;
`

export const ConceptContainer = styled.aside`
  flex: 1;
  height: min-content;
  background: #fff2de;
  border: 1px solid #dcd1c0;
  padding: 30px 20px;
`

export const ButtonConcept = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  border: 1px solid #707070;
  border-radius: 4px;
  margin-top: 16px;
  padding: 10px 20px;

  ${TitleProps({ size: '1.3rem', weight: 'bold' })}
`

export const CommercialContainer = styled.aside`
  background: #fdfdfd;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  padding: 20px 10px;

  h3 {
    margin-bottom: 10px;
  }
`
