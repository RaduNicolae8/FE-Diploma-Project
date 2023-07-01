import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest'
import {Button, Center, Input, Stack, Text} from "@chakra-ui/react";
import { useState } from 'react';
import axios from 'axios';
import './Register.scss'



function Register() {
  // const [email, setEmail] = React.useState('')
  // const [password, setPassword] = React.useState('')
  // const [firstName, setFirstName] = React.useState('')
  // const [lastName, setLastName] = React.useState('')
  // const [phoneNumber, setPhoneNumber] = React.useState('')

  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    email: "",
    password: "",
    img: "",
    firstName: "",
    lastName: "",
    isSeller: false,
    phoneNumber: "",
    description: "",
    roleId: 2
  });

  const [error, setError] = React.useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = await upload(file);
    user.img = url;
    console.log(user.img);
    console.log(url);
    try{
      const res = await newRequest.post('/api/auth/register', {...user})
      navigate('/login');
    }catch(err){
      setError(err.response.data.errorMessage);
      console.log(err.response.data.errorMessage);
    }
    
  }

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "EasyService");

    try{
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/di0ub0hhl/image/upload",
        data
      );
      return res.data.url;
    }catch(err){
      console.log(err);
    }
  };

  return (
    
    // <Center className='login' height ={"100vh"}>
    
    //   <form onSubmit={handleSubmit}>
    //       <Stack gap={"0.1rem"}>

    //   <img src="src\images\login.jpg" alt="Register" width="75" height="75" className='man'/>

    //   <label htmlFor="username">Username</label>
    //   <Input name="username" type="text" placeholder='youremail@gmail.com' value={email} onChange={e=>setEmail(e.target.value)}/>

    //   <label htmlFor="password">Password</label>
    //   <Input name="password" type="password" placeholder='********' value={password} onChange={e=>setPassword(e.target.value)}/>

    //   <label htmlFor="First Name">First Name</label>
    //   <Input name="First Name" type="text" placeholder='' value={firstName} onChange={e=>setFirstName(e.target.value)}/>

    //   <label htmlFor="Last Name">Last Name</label>
    //   <Input name="Last Name" type="text" placeholder='' value={lastName} onChange={e=>setLastName(e.target.value)}/>

    //   <label htmlFor="Phone Number">Phone Number</label>
    //   <Input name="Phone Number" type="text" placeholder='' value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)}/>

    //   <Button type='submit' bg={"#CEE5D0"}>Sign in</Button>
    //   {error && <p className='error'>{error}</p>}
    //   <Text>Already have an account? <Link to="/login" className='link'>Login</Link></Text>
    //       </Stack>
    //   </form>
    // </Center>

    <div className="register">
    <form onSubmit={handleSubmit}>
      <div className="left">
        <h1>Create a new account</h1>
        <label htmlFor="">Email</label>
        <input
          name="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
        />
        <label htmlFor="">Password</label>
        <input name="password" type="password" onChange={handleChange} />
        <label htmlFor="">Profile Picture</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <label htmlFor="">First Name</label>
        <input
          name="firstName"
          type="text"
          placeholder="John"
          onChange={handleChange}
        />
        <label htmlFor="">Last Name</label>
        <input
          name="lastName"
          type="text"
          placeholder="Doe"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </div>
      <div className="right">
        <h1>I want to become a seller</h1>
        <div className="toggle">
          <label htmlFor="">Activate the seller account</label>
          <label className="switch">
            <input type="checkbox" onChange={handleSeller} />
            <span className="slider round"></span>
          </label>
        </div>
        <label htmlFor="">Phone Number</label>
        <input
          name="phoneNumber"
          type="text"
          placeholder="072 627 8816"
          onChange={handleChange}
        />
        <label htmlFor="">Description</label>
        <textarea
          placeholder="A short description of yourself"
          name="description"
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
      </div>
    </form>
  </div>
  )
}

export default Register