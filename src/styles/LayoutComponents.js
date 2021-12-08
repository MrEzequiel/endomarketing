import { css } from 'styled-components'

export const TitleProps = ({ size, weight }) => css`
  font-family: Segoe UI, sans-serif;
  font-size: ${size};
  font-weight: ${weight};
`

export const ButtonProps = ({ size, padding }) => css`
  cursor: pointer;
  text-transform: uppercase;
  font-family: 'Segoe UI', sans-serif;
  font-size: ${size};

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
  padding: ${padding};

  border-radius: 4px;
`
