import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const InputForm = (props = {}) => {
    const [valueInput, setValueInput] = useState('')
    const { placeholder = "Nhập Text", type = "text", style } = props || {}
    
    const handleChange = (e) => {
        setValueInput(e.target.value);
    };
    
    return (
        <WrapperInputStyle 
            placeholder={placeholder} 
            type={type} 
            style={style} 
            value={valueInput} 
            onChange={handleChange}
        />
    )
}

export default InputForm