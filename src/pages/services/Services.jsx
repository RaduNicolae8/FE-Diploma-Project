import React from 'react'
import './Services.scss'
import ServiceCard from '../../components/serviceCard/ServiceCard';
import { services } from '../../data';

function Services() {

  const [open, setOpen] = React.useState(false);
  const [sort, setSort] = React.useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  }

  const [pageable,setpagebable] = React.useState({
  size : '',
  page : '',
  sort : '',
  
  });
  //get request to get -> services
  // check data.jsx for data structure

  return (
    <div className='services'>
      <div className="container">

        <h1>Category Name</h1>
        <p>
          Category description Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min'/>
            <input type="text" placeholder='max'/>
            <button>Apply</button>

          </div>
          <div className="right">
            <span className='sortBy'>Sort by</span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src="src\images\down.png" alt="" onClick={()=>setOpen(!open)}/>
            {open && <div className="rightMenu">
              {sort === "sales" ? ( <span onClick={()=>reSort("createdAt")}>Newest</span> ) : 
              ( <span onClick={()=>reSort("sales")}>Best Selling</span> )}
            </div>}
          </div>
        </div>
        <div className="cards">
          {services.map(service => (
            <ServiceCard key={service.id} item={service}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services