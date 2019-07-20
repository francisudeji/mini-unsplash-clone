import React from 'react'

function PhotoCard({ photo, setImage }) {
  return (
    <div className='card'>
      <img
        onClick={e => {
          document.body.style.overflow = 'hidden'
          const {
            dataset: { url, alt, name, location }
          } = e.target
          setImage({
            url,
            alt,
            name,
            location
          })
        }}
        className='card-image'
        src={photo.urls.small}
        alt={photo.alt_description}
        data-name={photo.user.name}
        data-location={photo.user.location}
        data-url={photo.urls.full}
        data-alt={photo.alt_description}
      />
      <div className='card-info'>
        <p>{photo.user.name}</p>
        <p>{photo.user.location}</p>
      </div>
    </div>
  )
}

export default PhotoCard
