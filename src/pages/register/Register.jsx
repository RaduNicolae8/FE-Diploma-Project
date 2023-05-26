import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest'
import {Button, Center, Input, Stack, Text} from "@chakra-ui/react";
import './Register.scss'



function Register() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')

  const [error, setError] = React.useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const roleId = 2; // user role

    try{
      const res = await newRequest.post('/api/auth/register', {email, password,firstName,lastName,phoneNumber,roleId})
      navigate('/login');
    }catch(err){
      setError(err.response.data.errorMessage);
      console.log(err.response.data.errorMessage);
    }
    
  }

  return (
    
    <Center className='login' height ={"100vh"}>
    
      <form onSubmit={handleSubmit}>
          <Stack gap={"0.1rem"}>

      <img src="src\images\login.jpg" alt="Register" width="75" height="75" className='man'/>

      <label htmlFor="username">Username</label>
      <Input name="username" type="text" placeholder='youremail@gmail.com' value={email} onChange={e=>setEmail(e.target.value)}/>

      <label htmlFor="password">Password</label>
      <Input name="password" type="password" placeholder='********' value={password} onChange={e=>setPassword(e.target.value)}/>

      <label htmlFor="First Name">First Name</label>
      <Input name="First Name" type="text" placeholder='' value={firstName} onChange={e=>setFirstName(e.target.value)}/>

      <label htmlFor="Last Name">Last Name</label>
      <Input name="Last Name" type="text" placeholder='' value={lastName} onChange={e=>setLastName(e.target.value)}/>

      <label htmlFor="Phone Number">Phone Number</label>
      <Input name="Phone Number" type="text" placeholder='' value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)}/>

      <Button type='submit' bg={"#CEE5D0"}>Sign in</Button>
      {error && <p className='error'>{error}</p>}
      <Text>Already have an account? <Link to="/login" className='link'>Login</Link></Text>
          </Stack>
      </form>
    </Center>
  )
}

export default Register