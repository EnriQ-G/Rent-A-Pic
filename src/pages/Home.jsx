import { useState, useEffect } from 'react'
import MovieCards from '../components/MovieCard'
import SearchBar from '../components/SearchBar'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [searchPerformed, setSearchPerformed] = useState(false)
  const [search, setSearch] = useState('')
  const APIKEY = import.meta.env.VITE_MB_KEY

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results)
      }).catch(err => console.log(err))
  }, [])

  const sendSearch = (search) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${search}&page=1&include_adult=false`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results)
        setSearchPerformed(true)
        setSearch(search)
      }).catch(err => console.log(err))
  }
  return (
    <>
      <SearchBar handleSearch={sendSearch} />
      <div style={{ textAlign: 'center' }}>
        {searchPerformed ? <>
          <h1>Resultados de tu busqueda para {search} </h1>
        </> : <>
          <h1>Estrenos </h1>
        </>}
        
      </div>
        {movies.map((movie) => (
          <MovieCards key={movie.id} {...movie} />
        ))}
    </>
  )
}

export default Home