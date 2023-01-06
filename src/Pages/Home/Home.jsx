import React, { useEffect, useState } from 'react'
import { api } from '../../../API/Api'
import { Container, List } from '../../App.style'
import { Card } from '../../Components/Card/Card'
import ReactPaginate from 'react-paginate'

export const Home = () => {
  const [page, setPage] = useState(1)

  const [movies, setMovies] = useState({
    isLoading: true,
    data: [],
    isError: false,
  })
  const getMovies = async () => {
    const data = await api.getPopularMovies(page)
    if (data) {
      setMovies({
        isLoading: false,
        data: data.data,
        isError: false,
      })
    }
  }
  useEffect(() => {
    getMovies()
  }, [page])
  return (
    <>
      <Container>
        {movies.isLoading ? <h1>Loading...</h1> : ''}
        {movies.isError ? <h1>Error...</h1> : ''}
        {movies.data.results ? (
          <List>
            {movies.data.results.map((item) => (
              <Card
                key={item.id}
                img={item.poster_path}
                title={item.title}
                rate={item.vote_average}
                time={item.release_date}
                id={item.id}
              />
            ))}
          </List>
        ) : (
          ''
        )}
        <ReactPaginate
          className="pagination justify-content-center my-5 gap-3 text-bg-light py-3 rounded-pill"
          forcePage={page === 1 ? 0 : page - 1}
          previousLinkClassName="btn btn-secondary"
          nextLinkClassName="btn btn-secondary"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          activeClassName="active"
          pageCount={movies.data?.total_pages}
          previousLabel="prev"
          nextLabel="next"
          onPageChange={(data) => {
            setPage(data.selected + 1)
          }}
        />
      </Container>
    </>
  )
}
