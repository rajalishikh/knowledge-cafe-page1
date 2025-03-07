import React from 'react';
import profile from "../../assets/images/profile.png";


const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center border-b-2 p-4  max-w-7xl mx-auto'>
            <h2 className='text-2xl font-medium'>Knowledge Cafe</h2>
            <img src={profile} alt="" srcset="" />
          </div>
       </div>
    );
};

export default Header;