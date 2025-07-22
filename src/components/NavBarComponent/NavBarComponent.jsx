import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextValue } from './style'

const NavBarComponent = () => {
  const renderContent = (type, options) => {
    switch (type) {
      case 'text':
        return options.map((option) => {
                return (
                <WrapperTextValue> {option}</WrapperTextValue>
                ) 
        })
      default:
        return null
    }
  }
  return (
    <div>
      <WrapperLabelText>
        labelText
      </WrapperLabelText>
      <WrapperContent>
        {renderContent('text', ['Camera', 'Lens', 'Phu Kien', 'Gimbal'])}
      </WrapperContent>
    </div>
  )
}

export default NavBarComponent
