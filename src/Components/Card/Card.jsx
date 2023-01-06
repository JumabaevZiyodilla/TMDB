import React from 'react'
import './card.scss'
import { BASE_IMG_URL } from '../../../API/Api'
import {
  StyledCard,
  StyledCardBox,
  StyledCardImg,
  StyledCardLink,
  StyledCardRate,
  StyledCardTime,
  StyledCardTitle,
} from './Card.style'

export const Card = ({ id, img, title, time, rate }) => {
  return (
    <StyledCard>
      <StyledCardLink to={`/popular/${id}`}>
      <StyledCardImg src={`${BASE_IMG_URL}/${img}`} />
      <StyledCardBox>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardTime>{time}</StyledCardTime>
        <StyledCardRate className={rate >= 7 ? 'green' : 'yellow'}>
          {rate}
        </StyledCardRate>
      </StyledCardBox>
      </StyledCardLink>
    </StyledCard>
  )
}
