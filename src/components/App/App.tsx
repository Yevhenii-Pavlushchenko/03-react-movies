// import { useState } from 'react'
import './App.module.css'

import SearchBar from '../SearchBar/SearchBar'
import  { toast, Toaster }from 'react-hot-toast'
import fetchMovies from '../../services/movieService'

function App() {

  const handleSearch = async (query: string) => {
    
    const data = await fetchMovies(query)
    if (data.length === 0 ) {
      toast("No movies found for your request.")
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <SearchBar onSubmit={handleSearch} />
    </>
  )
}

export default App
