import React from 'react'

import options from '../../../assets/options.svg'

import {
  InfoCardStyle,
  PostCardStyle,
  TypePost,
  PostDescription,
  OptionButton
} from './Posts.style'

function PostCard({ item, keyIndex, timeAnimation }) {
  const getTypePost = () => {
    if (item.type === 'event') {
      return 'Evento'
    } else if (item.type === 'release') {
      return 'Publicação'
    } else if (item.type === 'comunication') {
      return 'Comunicação'
    }
  }

  const getPersonsConfirmed = () => {
    const invitedPeople = item.common.invited_people
    const personsInvited = invitedPeople.length

    const personsAccepted = invitedPeople.reduce((acc, item2) => {
      if (item2.confirmed) {
        return (acc = acc + 1)
      }
      return acc
    }, 0)

    return `${personsAccepted} confirmações de ${personsInvited}`
  }

  return (
    <PostCardStyle key={keyIndex} time={timeAnimation}>
      <img src={item.files[0].file} alt={item.title + ' - imagem'} />

      <InfoCardStyle>
        <h2>{item.title}</h2>

        <div className="info-card">
          <TypePost className={item.type}>{getTypePost()}</TypePost>
          <p className="date-info">{item.date}</p>
          {!!Object.keys(item.common).length && (
            <p className="invited-persons">{getPersonsConfirmed()}</p>
          )}
        </div>

        <PostDescription>{item.description}</PostDescription>
      </InfoCardStyle>

      <OptionButton>
        <img src={options} alt="ícone de opções" />
      </OptionButton>
    </PostCardStyle>
  )
}

export default PostCard
