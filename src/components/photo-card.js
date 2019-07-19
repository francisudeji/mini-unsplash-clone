import React from 'react'

function PhotoCard({ photo }) {
  return (
    <div
      style={{
        width: '30%',
        position: 'relative',
        marginBottom: '1.2rem'
      }}
      className='card'
    >
      <img
        className='card-img'
        style={{
          width: '100%',
          borderRadius: '.8rem',
          display: 'block'
        }}
        src={photo.urls.thumb}
        alt={photo.alt_description}
      />
      <div className='card-info'>
        <p>{photo.user.name}</p>
        <p>{photo.user.location}</p>
      </div>
    </div>
  )
}

export default PhotoCard
