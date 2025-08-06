import React from 'react'
import { Card } from 'antd'
import { StyleNameProduct, WrapperCardStyle, WrapperPrice, WrapperReportText, WrapperContent, WrapperStyledTextSell } from './style'
import { StarFilled } from '@ant-design/icons'

const CardComponent = () => {
  return (
    <WrapperCardStyle 
        hoverable
        style={{ width: 170 }}
        cover={<img alt="example" src="https://imagedelivery.net/ZeGtsGSjuQe1P3UP_zk3fQ/29cf3907-f005-4fdb-c9cb-0fdf2377ac00/storedata"/>}
        >
            <WrapperContent>
                <StyleNameProduct>Canon EOS R8 Body</StyleNameProduct>
                <WrapperReportText>
                    <span  style={{marginRight: '4px'}}>
                        <span>4.5</span>
                        <StarFilled style={{color: '#faad14', fontSize: '10px'}} />
                    </span>
                    <WrapperStyledTextSell>| Đã bán 1k+</WrapperStyledTextSell>
                </WrapperReportText>
                <WrapperPrice>21.299.000đ</WrapperPrice>
            </WrapperContent>
    </WrapperCardStyle>
    )
}

export default CardComponent