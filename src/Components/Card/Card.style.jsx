import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledCard = styled.li`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 180px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  background-color: #fff;
`

export const StyledCardLink = styled(Link)`
  text-decoration: none;
`

export const StyledCardImg = styled.img`
  width: 180px;
  height: 273px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
export const StyledCardBox = styled.div`
  padding: 26px 10px 12px 10px;
`
export const StyledCardTitle = styled.h3`
  margin: 0px 0px 6px 0px;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  `

export const StyledCardRate = styled.span`
  position: absolute;
  top: 250px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 2px;
  color: #fff;
  background-color: #081c22;
  border-radius: 50%;
`

export const StyledCardTime = styled.time`
  color: #00000099;
`
