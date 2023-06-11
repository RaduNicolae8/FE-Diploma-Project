import {React, useState} from 'react'
import './Featured.scss'

function Featured() {

    const [search, setSearch] = useState('');

  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the perfect services for all your needs</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="src\images\search.png" alt="search" />
                        <input type="text" placeholder='Try "Building an arduino powered Smart Home"' value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyDown={event => {
                            if (event.key === 'Enter') {
                                window.location.href=`/services?search=${search}`;                            }}}
                        />
                    </div>
                        <button onClick={()=>{
                            window.location.href=`/services?search=${search}`;
                        }}>Search</button>
                    </div>
                    <div className="popular">
                        <span>Trending:</span>
                        <button onClick={()=>setSearch("Web Development")}>Web Development</button>
                        <button onClick={()=>setSearch("Circuit Diagnostic")}>Circuit Diagnostic</button>
                        <button onClick={()=>setSearch("Online Tutoring")}>Online Tutoring</button>
                        <button onClick={()=>setSearch("AI Services")}>AI Services</button>
                    </div>
                </div>
            <div className="right">
                <img src="src\images\man5.png" alt="man" />
            </div>
        </div>
    </div>
  )
}

export default Featured