import React, { useState, useEffect, useCallback } from 'react'
import Unsplash from 'unsplash-js'
import { FaSearch } from 'react-icons/fa'
import './App.css'
import PhotoCard from './components/photo-card'
import Modal from './components/modal'

const unsplash = new Unsplash({
  applicationId:
    '0c55ce46303974c54b2a67653b463ecfcf01f35facbf7af1445476b25ff17efe',
  // process.env.NODE_ENV === 'production'
  //   ? process.env.APP_ID
  //   : process.env.REACT_APP_APP_ID,
  secret: 'ebafa87e3761c19b11ea9b7effe375e6d93166b5599e242826e39a9d768babd2'
  // process.env.NODE_ENV === 'production'
  //   ? process.env.APP_SECRET
  //   : process.env.REACT_APP_APP_SECRET
})

function App() {
  const [photos, setPhotos] = useState([])
  const [count] = useState(6)
  const [keyWord, setKeyWord] = useState('')
  const [searchTerm, setSearchTerm] = useState(null)
  const [pages] = useState(Math.ceil(Math.random() * 9))
  const [isSearching, setSearching] = useState(false)
  const [image, setImage] = useState(null)

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
        .catch(err => console.log(err))
    },
    [count, pages]
  )

  useEffect(() => {
    fetchPhotos()
  }, [fetchPhotos])

  const handleSubmit = async e => {
    e.preventDefault()
    setSearchTerm(null)
    setSearching(true)
    await fetchPhotos(keyWord)
    setSearchTerm(keyWord)
  }

  return (
    <div className='App'>
      {image !== null && <Modal setImage={setImage} image={image} />}
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
          {isSearching}
          <h1 className='text'>
            {isSearching && `Searching for "${keyWord}" `}
            {!isSearching &&
              searchTerm !== null &&
              `Search results for "${searchTerm}" `}
          </h1>
        </div>
      </div>
      <div className='content'>
        <div className='container'>
          <div className='content__inner'>
            {photos.length > 0 &&
              photos.map(photo => (
                <PhotoCard key={photo.id} photo={photo} setImage={setImage} />
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
