import React from 'react'
import { useState } from 'react'
import './Add.scss'
import axios from 'axios'

const Add = () => {

  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);

      console.log(url);
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
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };


  return (
    <div className='add' >
      <div className="container">
        <h1>Add New Service</h1>
        <div className="sections">
          <form onSubmit={handleSubmit}>
          <div className="left">
            <label htmlFor="">Title</label>
            <input type="text" placeholder='e.g. I will do something...'/>
            <label htmlFor="">Category</label>
            <select name="cats" id="">
              <option value="Tutoring">Tutoring</option>
              <option value="Homework Assistance">Homework Assistance</option>
              <option value="Circuit Repair">Circuit Repair</option>
              <option value="Circuit Design">Circuit Design</option>
              <option value="Housekeeping">Housekeeping</option>
              <option value="Career Assistance">Career Assistance</option>
              <option value="General Services">General Services</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file"  onChange={(e) => setFile(e.target.files[0])} />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple/>
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="16" placeholder='Brief description to introduce your service to customers'></textarea>
            <button>Create</button>
          </div>
          <div className="right">

            <label htmlFor="">Service Title</label>
            <input type="text" placeholder='e.g. Algebra Tutoring' />
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" cols="30" rows="10" placeholder='Short description of your service'></textarea>
            <label htmlFor="">Delivery Time(e.g. 2 days)</label>
            <input type="number" min={1} />
            <label htmlFor="">Tags</label>
            <input type="text" placeholder='e.g. Algebra' />
            <input type="text" placeholder='e.g. Tutoring' />
            <input type="text" placeholder='e.g. Math' />
            <input type="text" placeholder='e.g. Integrals' />
            <label htmlFor="">Price</label>
            <input type="number" min={1} />

          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Add