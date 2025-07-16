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
            maxWidth: 500,        // hoặc giá trị bạn muốn, ví dụ 100% hoặc 500px
            boxSizing: 'border-box'
        }}>
            <InputComponent

                size={size}
                placeholder={placeholder}
                style={{
                    flex: 1, // input chiếm hết phần còn lại
                    minWidth: 450, // không nhỏ hơn 120px
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
                    minWidth: 40, // không nhỏ hơn 40px
                    backgroundColor: '#2e86c1',
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