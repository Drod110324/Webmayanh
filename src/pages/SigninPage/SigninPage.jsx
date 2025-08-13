import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import { WrapperContainerLeft } from './style'
import { WrapperContainerRight } from './style'
import { WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import Signin from '../../assets/images/Signin.png'
import { EyeFilled, EyeInvisibleOutlined } from '@ant-design/icons'

const SigninPage = () => {
  const [IsshowPassword, setIsShowPassword] = useState(false)
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', height: '100vh'}}>
      <div style={{width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex'}}>
        <WrapperContainerLeft>
        <h1 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '10px'}}>Xin Chào</h1>
        <p style={{fontSize: '14px', marginBottom: '20px'}}>Đăng nhập để tiếp tục</p>
          <InputForm style={{marginBottom: '10px'}} placeholder='Email' type='email'/>
          <div style={{position: 'relative'}}>
            <span style={{
              zIndex: '10',
              position: 'absolute',
              top: '50%',
              right: '12px',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              fontSize: '18px',
              color: '#999'
            }}>
              {IsshowPassword ? 
                <EyeFilled 
                  onClick={() => setIsShowPassword(!IsshowPassword)} 
                  style={{ fontSize: '18px' }}
                /> : 
                <EyeInvisibleOutlined 
                  onClick={() => setIsShowPassword(!IsshowPassword)} 
                  style={{ fontSize: '18px' }}
                />
              }
            </span>
            <InputForm 
              style={{
                marginBottom: '10px',
                paddingRight: '40px'
              }} 
              placeholder='Password' 
              type={IsshowPassword ? 'text' : 'password'}
            />
          </div>
          <ButtonComponent 
              size={40} 
              styleButton={{
                  height: '48px',
                  width: '220px',
                  borderRadius: '4px',
                  border: 'none',
                  background: 'rgb(255, 57, 69)',
                  fontSize: '15px',
                  fontWeight: '700',
                  margin: '26px 0 10px'
              }}
              textButton='Đăng Nhập'
              StyleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700'}}
            />
            <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
        <p style={{fontSize: '14px', marginTop: '10px'}}>Bạn chưa có tài khoản? <Link to='/signup' style={{color: 'rgb(13, 92, 182)'}}>Đăng ký</Link></p>
        <p style={{fontSize: '14px', marginTop: '10px'}}><Link to='/' style={{color: 'rgb(13, 92, 182)'}}>Quay Lại Trang Chủ</Link></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
              <img src={Signin} alt="" style={{width: '100%', height: '100%', borderTopRightRadius: '6px', borderBottomRightRadius: '6px'}}/>
        </WrapperContainerRight>
      </div>
    </div>
  ) 
}

export default SigninPage
