import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { post } from '../../../helpers/api_helper'
import { ADMIN_LOGIN } from '../../../helpers/url_helper'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [loginError, setLoginError] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    // Reset errors
    setEmailError('')
    setPasswordError('')
    setLoginError('')

    // Validate inputs
    if (!email) {
      setEmailError('Please Enter Your email')
    }
    if (!password) {
      setPasswordError('Please Enter Your password')
    }
    if (!email || !password) {
      return
    }

    try {
      const response = await post(ADMIN_LOGIN, { email, password })
      const { email: userEmail, tokens } = response
      const { accessToken, refreshToken, accessTokenExp, refreshTokenExp } = tokens

      // Store tokens in localStorage and sessionStorage
      const authUser = {
        email: userEmail,
        tokens: {
          access: { token: accessToken, expires: accessTokenExp },
          refresh: { token: refreshToken, expires: refreshTokenExp },
        },
      }
      localStorage.setItem('authUser', JSON.stringify(authUser))
      sessionStorage.setItem('accessToken', JSON.stringify(accessToken))

      // Navigate to the dashboard
      navigate('/dashboard')
    } catch (error) {
      console.error('Error logging in:', error)
      // Handle error (e.g., show an error message)
      if (error.response && error.response.status === 401) {
        setLoginError('An unexpected error occurred. Please try again.')
      } else {
        setLoginError('Incorrect email or password')
      }
    }
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleLogin}>
                    <h1 className="primary">Login</h1>
                    <p className="primary">Sign In to your account</p>
                    {emailError && <p className="text-danger">{emailError}</p>}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </CInputGroup>
                    {passwordError && <p className="text-danger">{passwordError}</p>}
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    {loginError && <p className="text-danger">{loginError}</p>}
                    <CRow>
                      <CCol xs={12} className="d-flex justify-content-center">
                        <CButton type="submit" className="login-button px-5">
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
