import React from 'react'

function PhotoCard({ photo, setFullImgUrl }) {
  return (
    <div className='card'>
      <img
        onClick={e => {
          setFullImgUrl(e.target.dataset.full)
        }}
        className='card-image'
        src={photo.urls.small}
        alt={photo.alt_description}
        data-full={photo.urls.full}
      />
      <div className='card-info'>
        <p>{photo.user.name}</p>
        <p>{photo.user.location}</p>
      </div>
    </div>
  )
}

export default PhotoCard
