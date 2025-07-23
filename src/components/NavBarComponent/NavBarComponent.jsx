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
            <div style={{padding: '4px',color: 'rgb(56, 56, 61)', borderRadius: '10px', backgroundColor: '#e0e0e0 ', width: 'fit-content'}}>
              {option}
            </div>
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
          <WrapperContent>
            {renderContent('checkbox', [
            {value: 'a', label: 'A'},
            {value: 'b', label: 'B'},
          ])}
          </WrapperContent>
          <WrapperContent>
            {renderContent('star', ['1', '2', '3', '4', '5'])}
          </WrapperContent>
          <WrapperContent>
            {renderContent('price', ['duoi 40tr', 'duoi 30tr', 'duoi 20tr'])}
          </WrapperContent>
      
    </div>
  )
}

export default NavBarComponent
