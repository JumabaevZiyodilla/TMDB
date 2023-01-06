import React from 'react'
import styled from 'styled-components'

export const SingleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 50px;
  padding: 30px 0px;
  background-image: linear-gradient(
    to right,
    rgba(31.5, 31.5, 94.5, 1) calc((50vw - 170px) - 340px),
    rgba(31.5, 31.5, 94.5, 0.84) 30%,
    rgba(31.5, 31.5, 94.5, 0.84) 100%
  );
`
export const SingleStyle = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  max-width: 1200px;
  height: 510px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
`
export const SingleStyleImg = styled.img`
  margin-right: 40px;
`

export const SingleTitleBox = styled.div``

export const SingleTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
`
export const SingleDate = styled.time`
  margin-right: 4px;
  color: #fff;
`
export const SingleLang = styled.p`
  display: inline-block;
  margin-right: 20px;
  color: #fff;
`
export const SingleGenresList = styled.ul`
  display: inline-flex;
  margin: 0px;
  padding-left: 0px;
  list-style-type: none;
`
export const SingleGenresItem = styled.li`
  position: relative;

  display: flex;
  margin-right: 5px;
  &:first-child::before {
    position: absolute;
    bottom: 25px;
    left: -12px;
    width: 5px;
    height: 5px;
    background-color: #fff;
    border-radius: 50%;
    content: '';
  }
  /* &:not(:last-child):after {
    content: ',';
    color: #fff;
  } */
  &:last-child::after {
    position: absolute;
    bottom: 25px;
    right: -12px;
    width: 5px;
    height: 5px;
    background-color: #fff;
    border-radius: 50%;
    content: '';
  }
`

export const SingleGenres = styled.p`
  color: #fff;
`
export const SingleRuntime = styled.p`
  display: inline-block;
  margin-left: 20px;
  color: #fff;
`

export const SingleOverviewText = styled.p`
  margin: 0px 0px 8px 0px;
  font-weight: 600;
  font-size: 1.3em;
  color: #fff;
`
export const SingleOverview = styled.p`
  margin: 0px;
  color: #fff;
`
export const SinglePlayVideo = styled.button`
    color: #fff;
`
