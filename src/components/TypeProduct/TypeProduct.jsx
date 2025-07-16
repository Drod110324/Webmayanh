import React from 'react'

const TypeProduct = ({ name, onClick }) => {
  return (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '10px 20px',
        border: 'none',
        borderRadius: 8,
        background: '#fff',
        color: '#2e86c1',
        fontWeight: 'bold',
        fontSize: 16,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: 'scale(1)',
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
      }}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default TypeProduct
