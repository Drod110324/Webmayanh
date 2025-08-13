import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import InputComponent from '../InputComponet/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInputSearch = (props) => {
    const { placeholder, size, textButton, bordered, colorButton, border, ...rest } = props
    return (
        <div style={{
            display: 'flex',
            gap: 0,
            padding: '5px',
            width: '100%',        // chiếm hết chiều ngang cha
            maxWidth: 650,        // tăng từ 550 lên 650
            boxSizing: 'border-box'
        }}>
            <InputComponent

                size={size}
                placeholder={placeholder}
                style={{
                    flex: 1, // input chiếm hết phần còn lại
                    minWidth: 600, // tăng từ 500 lên 600
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderRight: 'none',
                }}
                {...rest}
            />
            <ButtonComponent
                size={size}
                icon={<SearchOutlined />}    
                bordered={bordered}
                style={{
                    minWidth: 50, // giữ nguyên 50
                    backgroundColor: '#0a5d87',
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