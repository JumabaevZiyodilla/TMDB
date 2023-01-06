import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api, BASE_IMG_URL } from '../../../API/Api'
import { Container } from '../../App.style'
import YouTube from 'react-youtube'
import {
  SingleDate,
  SingleGenres,
  SingleGenresItem,
  SingleGenresList,
  SingleLang,
  SingleOverview,
  SingleOverviewText,
  SinglePlayVideo,
  SingleRuntime,
  SingleStyle,
  SingleStyleImg,
  SingleTitle,
  SingleTitleBox,
  SingleWrapper,
} from './Single.style'

export const Single = () => {
  const { id } = useParams()

  const [movies, setMovies] = useState({
    isLoading: true,
    data: [],
    isError: false,
  })

  const getSingleMovies = async () => {
    const data = await api.getSinglePageMovies(id)

    if (data) {
      setMovies({
        isLoading: false,
        data: data.data,
        isError: false,
      })
    }
  }


  useEffect(() => {
    getSingleMovies()
  }, [id])
  return (
    <>
      <Container>
        <SingleStyle
          style={{
            backgroundImage: `url(${BASE_IMG_URL}${movies.data.backdrop_path})`,
          }}
        ></SingleStyle>
        <SingleWrapper>
          <SingleStyleImg
            src={`${BASE_IMG_URL}${movies.data.poster_path}`}
            width={300}
            height={450}
            alt=""
          />
          <SingleTitleBox>
            <SingleTitle>{movies.data.title}</SingleTitle>
            <SingleDate>{movies.data.release_date}</SingleDate>
            {movies.data.production_countries?.map((item, index) => (
              <SingleLang key={index}>({item.iso_3166_1})</SingleLang>
            ))}
            <SingleGenresList>
              {movies.data.genres?.map((item, index) => (
                <SingleGenresItem key={index}>
                  <SingleGenres>{item.name},</SingleGenres>
                </SingleGenresItem>
              ))}
            </SingleGenresList>
            <SingleRuntime>
              {Math.floor(movies.data.runtime / 60) + 'h'}
              {Math.floor(movies.data.runtime % 60) + 'm'}
            </SingleRuntime>
            <SingleOverviewText>Overview</SingleOverviewText>
            <SingleOverview>{movies.data.overview}</SingleOverview>
          </SingleTitleBox>
        </SingleWrapper>
      </Container>
    </>
  )
}
