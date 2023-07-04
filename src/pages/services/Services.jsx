import React from 'react'
import './Services.scss'
import ServiceCard from '../../components/serviceCard/ServiceCard';
import { services } from '../../data';
import { useState } from 'react';
import { useQuery } from 'react-query';
import newRequest from '../../utils/newRequest';
import { useParams } from 'react-router-dom';
import downImage from '../../images/down.png';
import { Outlet } from 'react-router-dom';





function Services() {

  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("Newest");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10000);
  const [category, setCategory] = useState({});
  const [service, setService] = useState([]);

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  }


  //get request to get -> services
  // check data.jsx for data structure

  const { isLoading, error, data } = useQuery({
    queryKey: ["category", "services"],
    queryFn: async () =>{
      console.log("hahahaa");
      newRequest.get('/api/category/'+id).then((res) => {
          
          setCategory(res.data);
          console.log(res);
          console.log(category);

      })
  
      newRequest.get('/api/service/get/sorted', {params : {categoryId: id, sort: sort, min: min, max:max}}).then((res) => {
          
        setService(res.data);
        console.log(res);
        console.log(service);


    })
    await timeout(500);
    
    },
  });

   const handleChange = ()=>{

    const res =newRequest.get('/api/service/get/sorted', {params : {categoryId: id, sort: sort, min: min, max:max}}).then((res) => {
          
      setService(res.data);
      console.log('1');
   }
    )};



  return (
    <div className='services'>
      <div className="container">

        <h1>{category.name}</h1>
        <p>
          {category.description}
        </p>

        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input name="min" type="text" placeholder='min' onChange={(e) => setMin(e.target.value)}/>
            <input name="max" type="text" placeholder='max' onChange={(e) => setMax(e.target.value)}/>
            <button onClick={handleChange}>Apply</button>

          </div>
          <div className="right">
            <span className='sortBy' >Sort by</span>
            <span className="sortType" onClick={()=>setOpen(!open)}>{sort}</span>
            <img src={downImage} alt="" onClick={()=>setOpen(!open)}/>
            {open && <div className="rightMenu">
               <span onClick={()=>reSort("Newest")}>Newest</span>   
               <span onClick={()=>reSort("Oldest")}>Oldest</span> 
               <span onClick={()=>reSort("Cheapest")}>Ascending Price</span> 
               <span onClick={()=>reSort("Expensive")}>Descending Price</span> 
            </div>}
          </div>
        </div>
        <div className="cards">
          {service == [] ? <h1>loading</h1> :
            service.map(servic => (
              <ServiceCard key={servic?.id} item={servic}/>
            ))
          }
          
        </div>
      </div>
      <Outlet/>
    </div>
    
  )
}

//cheapest, expensive, newest, oldest
export default Services