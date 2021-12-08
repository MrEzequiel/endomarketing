import React from 'react'

import arrowDown from '../../assets/arrow-down.svg'
import plus from '../../assets/plus.svg'

import PostList from './PostList'

import {
  EntryContainer,
  TitleSection,
  TypeButton,
  CreateButton
} from './Post.style'

function Post() {
  return (
    <section>
      <EntryContainer>
        <TitleSection>Endomarketing</TitleSection>

        <div>
          <TypeButton>
            Tipo
            <img src={arrowDown} alt="icone para expandir" />
          </TypeButton>

          <CreateButton>
            Criar
            <img src={plus} alt="icone para criar" />
          </CreateButton>
        </div>
      </EntryContainer>

      <PostList />
    </section>
  )
}

export default Post
