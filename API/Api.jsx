import axios from 'axios'

export const BASE_URL = 'https://api.themoviedb.org/3'
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500'
export const API_KEY = '6e821a48ede53d575dbbb762dc2945ac'

export const api = {
  getPopularMovies: (page) =>
    axios.get(BASE_URL + '/movie/popular', {
      params: {
        api_key: API_KEY,
        page: page,
      },
    }),
  getTopRatedMovies: () =>
    axios.get(BASE_URL + '/movie/popular', {
      params: {
        api_key: API_KEY,
      },
    }),

  getSinglePageMovies: (id) =>
    axios.get(BASE_URL + `/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    }),
  
}
