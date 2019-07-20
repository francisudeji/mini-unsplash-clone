import React from 'react'

function PhotoCard({ photo, setFullImage }) {
  return (
    <div className='card'>
      <img
        onClick={e => {
          setFullImage({
            url: e.target.dataset.full,
            alt: e.target.dataset.alt
          })
        }}
        className='card-image'
        src={photo.urls.small}
        alt={photo.alt_description}
        data-full={photo.urls.full}
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
