import styled from 'styled-components'

import { TitleProps } from '../../../styles/LayoutComponents'

export const ListPosts = styled.ul`
  margin-top: 10px;
`

export const PostCardStyle = styled.li`
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 14px;
  padding: 10px 15px;

  @keyframes show-left {
    from {
      opacity: 0;
      transform: translate3d(-40px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  animation: show-left ${props => props.time}ms forwards;

  img {
    width: 73px;
    height: 73px;
    object-fit: cover;
  }

  & + li {
    margin-top: 10px;
  }

  transition: box-shadow 500ms;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.16);
  }
`

export const InfoCardStyle = styled.div`
  h2 {
    ${TitleProps({ size: '1.6rem', weight: 'bold' })}
  }

  .info-card {
    margin: 5px 0;
    display: flex;

    p {
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 300;
      padding: 0 5px;

      &.invited-persons {
        cursor: pointer;
        color: #3489b1;
        text-decoration: underline;
        border-left: 1px solid #707070;
      }
    }
  }
`

export const TypePost = styled.span`
  text-transform: uppercase;
  font-size: 0.9rem;
  line-height: 0.8rem;
  font-family: 'Segoe UI', sans-serif;
  font-weight: bold;
  padding: 3px;
  color: #333;

  &.event {
    background: #ee8686;
  }

  &.comunication {
    background: #3489b1;
    color: #ffffff;
  }

  &.release {
    background: #707070;
    color: #fff;
  }
`

export const PostDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.8rem;
  max-width: 470px;
`

export const OptionButton = styled.button`
  cursor: pointer;
  background: #dbdbdb;
  width: 24px;
  height: 24px;
  align-self: center;
  justify-self: end;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 17px;
    height: 5px;
  }
`
