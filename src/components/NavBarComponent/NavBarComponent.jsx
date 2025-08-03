import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextValue } from './style'
import { Checkbox } from 'antd'
import { Rate } from 'antd'

const NavBarComponent = () => {
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  const renderContent = (type, options) => {
    switch (type) {
      case 'text':
        return options.map((option) => {
                return (
                <WrapperTextValue> {option}</WrapperTextValue>
                ) 
        })
      case 'checkbox':
        return (    
            <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }} onChange={onChange}>
                {options.map((option) => {
                    return( 
                        <Checkbox style={{marginleft: '0px'}} value={option.value}>{option.label}</Checkbox>
                    )
                })}
            </Checkbox.Group>
            
        )
      case 'star':
        return options.map((option) => {
          console.log('check', option)
            return (
              <div style={{display: 'flex', gap: '4px'}}>
                <Rate style={{fontSize: '12px'}} disabled defaultValue={option} />
                <span>{`Từ ${option} sao`}</span>
              </div>
            )
          })
      case 'price':
        return options.map((option) => {
          return (
            <WrapperTextPrice>
              {option}
            </WrapperTextPrice>
          )}
        )
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
