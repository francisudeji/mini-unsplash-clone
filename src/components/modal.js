import React from 'react'

function Modal({ image, setImage }) {
  return (
    <div className='modal'>
      {console.log(image)}
      <div className='container'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button className='modal-btn' onClick={e => setImage(null)}>
              &times;
            </button>
          </div>
          <div className='modal-body'>
            <img
              src={image.url}
              alt={image.alt}
              style={{
                display: 'block',
                width: '100%',
                borderRadius: '7px 7px 0 0',
                margin: 0
              }}
            />
            <div className='modal-info'>
              <p>{image.name}</p>
              <p>{image.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
