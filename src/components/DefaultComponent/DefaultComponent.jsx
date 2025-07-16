import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'

export default function DefaultComponent({ children }) {
  return (
    <div>
        <HeaderComponent />
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          {children}
        </div>
    </div>
  )
}
