import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/images/logo.svg'

export const StyledHeader = styled.header`
  padding-block: 20px;
  background-color: #032541;
`

export const StyledNav = styled.nav``

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0px;
  padding-left: 0px;
  list-style-type: none;
`

export const StyledListItem = styled.li``

export const StyledImg = styled.img`
  width: 154px;
  height: 20px;
  margin-right: 20px;
`
StyledImg.defaultProps = {
  src: Logo,
}

export const StyledListLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  margin-right: 20px;
`
