import React, { useState } from 'react'

const SearchBar = ({ handleSearch}) => {
  const [search, setSearch] = useState('')
  return (
    <div className='form-control'>
      <input
        className='search-input'
        type='text'
        placeholder='Busca tu pelicula favorita'
        name='search'
        value={search}
        onChange={(event) => {
          setSearch(event.target.value)
        }}
      />
      <button
        className='search-button' onClick={() => {
          handleSearch(search)
        }}
      >
        Buscar
      </button>

    </div>
  )
}

export default SearchBar
