import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const InputForm = (props = {}) => {
    const [valueInput, ] = useState('')
    const { placeholder = "Nhập Text", type = "text", style } = props || {}
    return (    
    <WrapperInputStyle placeholder={placeholder} type={type} style={style} value={valueInput} />

  )
}

export default InputForm