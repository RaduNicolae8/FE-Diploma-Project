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
                        <input type="text" placeholder='Try "Building an arduino powered Smart Home"' onChange={e=>setSearch(e.target.value)}/>
                    </div>
                        <button>Search</button>
                    </div>
                    <div className="popular">
                        <span>Trending:</span>
                        <button>Web Development</button>
                        <button>Circuit Diagnostic</button>
                        <button>Graphic Design</button>
                        <button>AI Services</button>
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