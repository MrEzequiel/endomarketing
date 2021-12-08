import React from 'react'

import CardCommercial from './CardCommercial'

import {
  AdvertisingContainer,
  Title,
  Text,
  ConceptContainer,
  ButtonConcept,
  CommercialContainer
} from './Advertising.style'

function Advertising() {
  return (
    <AdvertisingContainer>
      <ConceptContainer>
        <Title>Endormarketing</Title>
        <Text>
          Endomarketing está relacionado às ações de treinamento ou qualificação
          dos colaboradores da empresa visando um melhor serviço para o cliente.
          Marketing interno, devido ao nome, é usualmente confundido com
          Endomarketing mesmo sendo conceitos diferentes.
        </Text>
        <ButtonConcept>Dispensar</ButtonConcept>
      </ConceptContainer>

      <CommercialContainer>
        <Title>Quadros de Gestão à Vista</Title>

        <CardCommercial title="Demonstrativo comercial" />
        <CardCommercial title="Demonstrativo comercial" />
        <CardCommercial title="Demonstrativo comercial" />
      </CommercialContainer>
    </AdvertisingContainer>
  )
}

export default Advertising
