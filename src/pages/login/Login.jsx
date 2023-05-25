// import React from 'react'
// import { useState, useContext } from 'react';
// import { Form, Button, Spinner, Alert } from 'react-bootstrap';
// import Context from '../../ContextStore'
// import { loginUser } from '../../services/UserData';
// import Textfield from '@mui/material/TextField';
// import './Login.scss'

// function Login() {

//   const [loading, setLoading] = useState(false);
//     const [alertShow, setAlertShow] = useState(false);
//     const [error, setError] = useState(null);
//     const [user, setUser] = useState({
//         username: "",
//         password: ""
//     });
//     // const { userData,setUserData } = useContext(Context)

//     const handleChanges = (e) => {
//         e.preventDefault();
//         setUser({ ...user, [e.target.name]: e.target.value });
//     }

//     const handleSubmitLogin = (e) => {
//         e.preventDefault();
//         setLoading(true);
//         loginUser(user)
//             .then(res => {
//                 if (!res.error) {
//                     setUserData(res.user)
//                     console.log(res)
//                     history.push('/')

//                 } else {
//                     setLoading(false);
//                     setError(res.error.message);
//                     setAlertShow(true);
//                 }
//             }).catch(err => console.error('error from login: ', err))
//     }

//   return (
//     <>
//         <div className="login">
//             <h1 className="auth-heading">Sign In</h1>
//             <Form className="col-lg-6" onSubmit={handleSubmitLogin}>
//                 {alertShow &&
//                     <Alert variant="danger" onClose={() => setAlertShow(false)} dismissible>
//                         <p>
//                             {error}
//                         </p>
//                     </Alert>
//                 }
//                 <Form.Group controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" name="username" placeholder="Enter email" onChange={handleChanges} required />
//                 </Form.Group>
//                 <Form.Group controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" name="password" placeholder="Password" onChange={handleChanges} required />
//                 </Form.Group>
//                 {loading ?
//                     <Button className="col-lg-12 btnAuth" variant="dark" disabled >
//                         Please wait... <Spinner animation="border" />
//                     </Button>
//                     :
//                     <Button variant="dark" className="col-lg-12 btnAuth" type="submit">Sign In</Button>
//                 }
//                 {/* <p className="bottom-msg-paragraph">Don't have an account? <Link to="/register">Sign Up</Link>!</p> */}
//             </Form>
//         </div>
//     </>
// )
// }

// export default Login

//variant 2:

// import { useState } from "react";
// import {
//   Flex,
//   Heading,
//   Input,
//   Button,
//   InputGroup,
//   Stack,
//   InputLeftElement,
//   chakra,
//   Box,
//   Link,
//   Avatar,
//   FormControl,
//   FormHelperText,
//   InputRightElement
// } from "@chakra-ui/react";
// import { FaUserAlt, FaLock } from "react-icons/fa";

// const CFaUserAlt = chakra(FaUserAlt);
// const CFaLock = chakra(FaLock);
// import React from 'react'

// function Login() {
//   const [showPassword, setShowPassword] = useState(false);

//   const handleShowClick = () => setShowPassword(!showPassword);

//   return (
//     <Flex
//       flexDirection="column"
//       width="100wh"
//       height="100vh"
//       backgroundColor="gray.200"
//       justifyContent="center"
//       alignItems="center"
//     >
//       <Stack
//         flexDir="column"
//         mb="2"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <Avatar bg="teal.500" />
//         <Heading color="teal.400">Welcome</Heading>
//         <Box minW={{ base: "90%", md: "468px" }}>
//           <form>
//             <Stack
//               spacing={4}
//               p="1rem"
//               backgroundColor="whiteAlpha.900"
//               boxShadow="md"
//             >
//               <FormControl>
//                 <InputGroup>
//                   <InputLeftElement
//                     pointerEvents="none"
//                     children={<CFaUserAlt color="gray.300" />}
//                   />
//                   <Input type="email" placeholder="email address"/>
//                 </InputGroup>
//               </FormControl>
//               <FormControl>
//                 <InputGroup>
//                   <InputLeftElement
//                     pointerEvents="none"
//                     color="gray.300"
//                     children={<CFaLock color="gray.300" />}
//                   />
//                   <Input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                   />
//                   <InputRightElement width="4.5rem">
//                     <Button h="1.75rem" size="sm" onClick={handleShowClick}>
//                       {showPassword ? "Hide" : "Show"}
//                     </Button>
//                   </InputRightElement>
//                 </InputGroup>
//                 <FormHelperText textAlign="right">
//                   <Link>forgot password?</Link>
//                 </FormHelperText>
//               </FormControl>
//               <Button
//                 borderRadius={0}
//                 type="submit"
//                 variant="solid"
//                 colorScheme="teal"
//                 width="full"
//               >
//                 Login
//               </Button>
//             </Stack>
//           </form>
//         </Box>
//       </Stack>
//       <Box>
//         New to us?{" "}
//         <Link color="teal.500" href="#">
//           Sign Up
//         </Link>
//       </Box>
//     </Flex>
//   );
// }

// export default Login



//variant 3:

import React from 'react'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest'
import {Button, Center, Input, Stack, Text} from "@chakra-ui/react";
import { useContext } from 'react';
import { AuthContext } from '../../App';

function Login() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState(null)

  const navigate = useNavigate()
  const {setIsLoggedIn} = useContext(AuthContext);



  const handleSubmit = async (e) => {
    e.preventDefault()
    


    try{
      const res = await newRequest.post('/api/auth/login', {username, password})
      //localStorage.setItem("currentUser", JSON.stringify(res.data));
      setIsLoggedIn(true);
      navigate('/');
    }catch(err){
      setError(err.response.data.errorMessage);
      console.log(err.response.data.errorMessage);
    }
    
  }

  return (
    <Center className='login' height ={"100vh"}>
      <form onSubmit={handleSubmit}>
          <Stack gap={"0.5rem"}>

      <label htmlFor="username">Username</label>
      <Input name="username" type="text" placeholder='youremail@gmail.com' value={username} onChange={e=>setUsername(e.target.value)}/>

      <label htmlFor="password">Password</label>
      <Input name="password" type="password" placeholder='********' value={password} onChange={e=>setPassword(e.target.value)}/>

      <Button type='submit' bg={"#CEE5D0"}>Sign in</Button>
      {error && <p className='error'>{error}</p>}
              {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Text>Don't have an account? <Link to="/register" className='link'>Sign up</Link></Text>
          </Stack>
      </form>
    </Center>
  )
}

// <InputGroup size='md'>
//       <Input
//         pr='4.5rem'
//         type={show ? 'text' : 'password'}
//         placeholder='Enter password'
//       />
//       <InputRightElement width='4.5rem'>
//         <Button h='1.75rem' size='sm' onClick={handleClick}>
//           {show ? 'Hide' : 'Show'}
//         </Button>
//       </InputRightElement>
//     </InputGroup>


export default Login