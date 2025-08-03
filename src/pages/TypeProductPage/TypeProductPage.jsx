import React, { Fragment } from 'react'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Row, Col, Pagination } from 'antd'
import { WrapperProduct, WrapperNavBar } from './style.js'

const TypeProductPage = () => {
  const onChange = (page) => {
    console.log(page)
  }
  return (
    <div style={{padding: '0 120px', backgroundColor: '#e0e0e0'}}>
    <Row style={{flexWrap: 'nowrap', paddingTop: '10px'}}>
        <WrapperNavBar span={4}>
         <NavBarComponent />
        </WrapperNavBar>
        <Col span={20}>
            <WrapperProduct>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
              <Pagination defaultCurrent={1} total={20} onChange={onChange} />
            </div>
            </WrapperProduct>
            </Col>
    </Row>
    
      </div>
  )
}

export default TypeProductPage
