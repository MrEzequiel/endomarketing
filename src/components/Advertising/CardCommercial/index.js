import React from 'react'

import {
  CardCommercialContainer,
  TitleCommercial,
  IconCommercial,
  ImageCommercial
} from './CardCommercial.style'

import worldIcon from '../../../assets/world.svg'
import optionsIcon from '../../../assets/options.svg'

import commercial1 from '../../../assets/commercial1.jpg'
import commercial2 from '../../../assets/commercial2.jpg'
import commercial3 from '../../../assets/commercial3.jpg'
import commercial4 from '../../../assets/commercial4.jpg'

function CardCommercial({ title }) {
  return (
    <CardCommercialContainer>
      <TitleCommercial>
        <h4>{title}</h4>

        <IconCommercial>
          <button>
            <img src={worldIcon} alt="ícone de mundo para botão" />
          </button>

          <button>
            <img src={optionsIcon} alt="ícone do botão de opções" />
          </button>
        </IconCommercial>
      </TitleCommercial>

      <ImageCommercial>
        <img src={commercial1} alt="comercial imagem 1" />
        <img src={commercial2} alt="comercial imagem 2" />
        <img src={commercial3} alt="comercial imagem 3" />
        <img src={commercial4} alt="comercial imagem 4" />
      </ImageCommercial>
    </CardCommercialContainer>
  )
}

export default CardCommercial
