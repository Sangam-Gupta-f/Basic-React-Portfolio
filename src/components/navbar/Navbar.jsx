import React from 'react';
import "./Navbar.scss";

const Navbar=()=>{
    return(
        <div className='navbar'>
            {/* sidebar */}
            <div className='wrapper'>
                <span>Sangam Gupta</span>
                <div className='social'>
                    <a href="/" ><img src="" alt="youtube" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;