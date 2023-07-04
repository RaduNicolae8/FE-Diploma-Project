import React from 'react'
import { useState } from 'react'
import './Add.scss'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../App'
import newRequest from '../../utils/newRequest'
import { useNavigate } from 'react-router-dom'


const Add = () => {

  const navigate = useNavigate()
  const context = useContext(AuthContext);
  const authUser = context.authUser;

  const [file, setFile] = useState(null);
  const [files, setFiles] = useState(null);
  const [service, setService] = useState({
    title: 'Service title here',
    description: '',
    shortDescription: 'short description here .................',
    tags: 'tags',
    price: 50,
    categoryId: 1,
    userId: '',
    coverImage: '',
    isRequest: false
  });


  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}


  const handleSubmit = async (e) => {
    e.preventDefault();

     const url = await upload(file);
      service.coverImage = url;
    

      //console.log(service);

    try{
      service.userId = authUser.id;
      const res = await newRequest.post('/api/service/save', {...service})

     // console.log(res);

      
        const filesArray = Array.from(files);
        filesArray.forEach(async (file) => {
      

        const url = await upload(file);
       // console.log(url);
       // console.log(res.data.id);
        const image ={
          url:url,
          serviceId: res.data.id
        }
        const old_description = service.description.replace(/\\n/g, '<br>');
        service.description = old_description;

        const res2 = await newRequest.post('/api/images/save', {...image})
        //console.log(res2);
        //console.log(url);
        // after posting the service, post the images from the ID of the returned service
        
      
      });


        await timeout(1000);
      navigate('/service/'+res.data.id);

    }catch(err){
      console.log(err);
    }
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

  const handleChange = (e) => {
    setService((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const url = await upload(file);
  //   user.img = url;
  //   console.log(user.img);
  //   console.log(url);
  //   try{
  //     const res = await newRequest.post('/api/auth/register', {...user})
  //     navigate('/login');
  //   }catch(err){
  //     setError(err.response.data.errorMessage);
  //     console.log(err.response.data.errorMessage);
  //   }
    
  // }

   const handleRequest = (e) => {
    setService((prev) => {
      return { ...prev, isRequest: e.target.checked };
    });
  
  };


  return (
    <div className='add' >
      <div className="container">
        <h1>Add New Service</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input name="title" type="text" placeholder='e.g. I will do something...' onChange={handleChange}/>
            <label htmlFor="">Cover Image</label>
            <input type="file"  onChange={(e) => setFile(e.target.files[0])} />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple onChange={(e) => setFiles(e.target.files)}/>
            <label htmlFor="">Description</label>
            <textarea name="description" id="" cols="30" rows="16" placeholder='A description to introduce your service to customers' onChange={handleChange}></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>
          <div className="right">

            {/* <label htmlFor="">Are you requesting this service?</label> */}
            <div className="toggle">
              <label htmlFor="">Is this service a request? </label>
              <label className="switch">
                <input type="checkbox" onChange={handleRequest} />
                <span className="slider round"></span>
              </label>
            </div>
            <label htmlFor="">Category</label>
            <select name="categoryId" id="" onChange={handleChange}>
              <option value="1">Tutoring</option>
              <option value="2">Homework Assistance</option>
              <option value="3">Circuit Repair</option>
              <option value="4">Circuit Design</option>
              <option value="5">Housekeeping</option>
              <option value="6">Career Assistance</option>
              <option value="7">General Services</option>
            </select>
            <label htmlFor="">Short Description</label>
            <textarea name="shortDescription" id="" cols="30" rows="10" placeholder='Brief description of your service' onChange={handleChange} ></textarea>
            <label htmlFor="">Delivery Time</label>
            <input type="number" min={1}  placeholder='e.g. 2 days' onChange={handleChange}/>
            <label htmlFor="">Tags</label>
            <input name="tags" type="text" placeholder='e.g. Algebra,Tutoring,Math,etc' onChange={handleChange} />
            <label htmlFor="">Price</label>
            <input name="price" type="number" min={1} onChange={handleChange} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Add