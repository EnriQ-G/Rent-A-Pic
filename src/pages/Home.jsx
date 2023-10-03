import { useState, useEffect } from 'react'
import MovieCards from '../components/MovieCard'
import SearchBar from '../components/SearchBar'

const Home = () => {
  const [movies, setMovies] = useState([])
  const APIKEY = import.meta.env.VITE_MB_KEY

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      }).catch(err => console.log(err))
  }, [])

  const sendSearch = (search) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${search}&page=1&include_adult=false`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      }).catch(err => console.log(err))
  }
  return (
    <>
      <SearchBar handleSearch={sendSearch} />
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ backgroundColor: 'orangered', color: 'black', display: 'inline-block' }}>Peliculas</h1>
      </div>
        {movies.map((movie) => (
          <MovieCards key={movie.id} {...movie} />
        ))}
    </>
  )
}

export default Home