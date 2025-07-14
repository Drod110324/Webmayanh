import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import InputComponent from '../InputComponet/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInputSearch = (props) => {
    const { placeholder, size, textButton, bordered, colorButton, border, ...rest } = props
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, padding: '5px' }}>
            <InputComponent
                placeholder={placeholder}
                size={size}
                style={{
                    width: '750px',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderRight: 'none'
                }}
                {...rest}
            />
            <ButtonComponent
                size={size}
                icon={<SearchOutlined />}    
                bordered={bordered}
                style={{
                    backgroundColor: '#2e86c1 ',
                    color: '#fff',
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderLeft: 'none',
                    boxShadow: 'none',
                    border: border ? border : 'none'
                }}
                {...rest}
            ><span style={{ color: colorButton }}>{textButton}</span>
            </ButtonComponent>
        </div>
    )
}

export default ButtonInputSearch