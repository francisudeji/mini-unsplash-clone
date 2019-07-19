import React, { useState, useEffect } from 'react'
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
  const [keyWord] = useState('African')
  const [pages] = useState(Math.ceil(Math.random() * 9))

  useEffect(() => {
    // console.log('rendered')
    unsplash.search
      .photos(keyWord, pages, count)
      .then(res => res.json())
      .then(({ results }) => {
        setPhotos(results)
        console.log(results)
      })
  }, [count, keyWord, pages])

  if (!photos.length) {
    return <p>Loading...</p>
  }

  return (
    <div className='App'>
      <div className='backdrop'>
        <div className='container'>
          <form>
            <div className='input-group'>
              <FaSearch className='search-icon' />
              <input
                type='search'
                className='search-field'
                placeholder='Search for photo'
              />
            </div>
          </form>
        </div>
      </div>
      <div className='content'>
        <div className='container'>
          <div className='content__inner'>
            {photos.map(photo => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
