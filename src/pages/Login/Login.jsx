import { Modal, Input, Row, Checkbox, Button, Text, Image } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'

import { Password } from '../../components/Password/Password'
import { Mail } from '../../components/Mail/Mail'
import useAuth from '../../hooks/useAuth'

const Login = () => {
  const navigate = useNavigate()
  const { handleSignInWithPopup } = useAuth()

  const onSignIn = () => {
    const test = false
    handleSignInWithPopup()
    if (test) navigate('/home')
  }

  return (
    <div>
      <Modal
        blur
        aria-labelledby='modal-title'
        open
      >
        <Modal.Header>
          <Text id='modal-title' size={18}>
            Welcome to
            <Text b size={18}>
              Firebase Client
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='Email'
            contentLeft={<Mail fill='currentColor' />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='Password'
            contentLeft={<Password fill='currentColor' />}
          />
          <Row justify='space-between'>
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>

          <Button auto onPress={onSignIn}>
            Sign in
          </Button>
          <Button
            auto color='secondary' onPress={onSignIn} icon={<Image
              width={26}
              height={26}
              src={require('../../assets/images/google-icon.png')}
              alt='Default Image'
                                                            />}
          >
            Google
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Login
