import React, { useState, useEffect, useCallback } from 'react'
import Unsplash from 'unsplash-js'
import { FaSearch } from 'react-icons/fa'
import './App.css'
import PhotoCard from './components/photo-card'

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_APP_ID,
  secret: process.env.REACT_APP_APP_SECRET
})

function App() {
  const [photos, setPhotos] = useState([])
  const [count] = useState(6)
  const [keyWord, setKeyWord] = useState('')
  const [pages] = useState(Math.ceil(Math.random() * 9))
  const [isSearching, setSearching] = useState(false)
  const [fullImgUrl, setFullImgUrl] = useState(null)

  const fetchPhotos = useCallback(
    (searchTerm = 'African') => {
      unsplash.search
        .photos(searchTerm, pages, count)
        .then(res => res.json())
        .then(({ results }) => {
          setSearching(false)
          setPhotos(results)
          console.log(results)
        })
    },
    [count, pages]
  )

  useEffect(() => {
    fetchPhotos()
  }, [fetchPhotos])

  const handleSubmit = e => {
    e.preventDefault()
    setSearching(true)
    fetchPhotos(keyWord)
  }

  return (
    <div className='App'>
      <div className='backdrop'>
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <div className='input-group'>
              <FaSearch className='search-icon' />
              <input
                type='search'
                className='search-field'
                placeholder='Search for photo'
                value={keyWord}
                onChange={e => setKeyWord(e.target.value)}
                autoFocus
              />
            </div>
          </form>
        </div>
      </div>
      <div className='content'>
        <div className='container'>
          <div className='content__inner'>
            {photos.length > 0 &&
              photos.map(photo => (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  setFullImgUrl={setFullImgUrl}
                />
              ))}

            {!photos.length || isSearching ? (
              <>
                <div className='card-loading' />
                <div className='card-loading' />
                <div className='card-loading' />
                <div className='card-loading' />
                <div className='card-loading' />
                <div className='card-loading' />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
