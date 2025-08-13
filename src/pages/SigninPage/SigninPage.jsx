import React, { useState } from 'react'
import { Input, Button, Modal, notification } from 'antd'
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
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setEmail('')
  }

  const handleSuccessModalClose = () => {
    setIsSuccessModalVisible(false)
  }

  const handleSendResetLink = async () => {
    if (!email) {
      notification.error({
        message: 'Lỗi',
        description: 'Vui lòng nhập email của bạn',
        duration: 0
      })
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      notification.error({
        message: 'Lỗi',
        description: 'Email không hợp lệ',
        duration: 0
      })
      return
    }

    setLoading(true)
    
    try {
      // Simulate API call - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo purposes, always show success message
      // In real app, check if email exists in database
      console.log('Success message sent')
      
      setIsModalVisible(false)
      setEmail('')
      setIsSuccessModalVisible(true)
    } catch {
      notification.error({
        message: 'Lỗi',
        description: 'Có lỗi xảy ra, vui lòng thử lại',
        duration: 0
      })
    } finally {
      setLoading(false)
    }
  }

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
            <WrapperTextLight 
              onClick={showModal}
              style={{cursor: 'pointer'}}
            >
              Quên mật khẩu?
            </WrapperTextLight>
        <p style={{fontSize: '14px', marginTop: '10px'}}>Bạn chưa có tài khoản? <Link to='/signup' style={{color: 'rgb(13, 92, 182)'}}>Đăng ký</Link></p>
        <p style={{fontSize: '14px', marginTop: '10px'}}><Link to='/' style={{color: 'rgb(13, 92, 182)'}}>Quay Lại Trang Chủ</Link></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
              <img src={Signin} alt="" style={{width: '100%', height: '100%', borderTopRightRadius: '6px', borderBottomRightRadius: '6px'}}/>
        </WrapperContainerRight>
      </div>

      {/* Forgot Password Modal */}
      <Modal
        title="Quên mật khẩu"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={400}
      >
        <div style={{ padding: '20px 0' }}>
          <p style={{ marginBottom: '20px', color: '#666' }}>
            Nhập email của bạn để nhận liên kết đặt lại mật khẩu
          </p>
          <Input
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '20px' }}
            onPressEnter={handleSendResetLink}
          />
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <Button onClick={handleCancel}>
              Hủy
            </Button>
            <Button 
              type="primary" 
              onClick={handleSendResetLink}
              loading={loading}
              style={{ background: 'rgb(255, 57, 69)', borderColor: 'rgb(255, 57, 69)' }}
            >
              Gửi
            </Button>
          </div>
        </div>
      </Modal>

      {/* Success Modal */}
      <Modal
        title="Thông báo"
        open={isSuccessModalVisible}
        onCancel={handleSuccessModalClose}
        footer={null}
        width={400}
      >
        <div style={{ padding: '20px 0' }}>
          <p style={{ marginBottom: '20px', color: '#666' }}>
            Nếu tồn tại tài khoản trùng khớp với email, chúng tôi sẽ gửi liên kết đặt lại mật khẩu, hãy kiểm tra email của bạn.
          </p>
          <Button 
            onClick={handleSuccessModalClose} 
            style={{ 
              background: 'rgb(255, 57, 69)', 
              borderColor: 'rgb(255, 57, 69)',
              color: '#fff'
            }}
          >
            Đóng
          </Button>
        </div>
      </Modal>
    </div>
  ) 
}

export default SigninPage
