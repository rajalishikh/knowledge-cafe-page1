import React from 'react';

const BookMark = ({bookMark}) => {
    const {title}=bookMark
    return (
        <div className='bg-[#FFFFFF] gap-2 m-3 rounded-xl p-1'>
            <p className='text-sm mb-2'>{title}</p>
            
        </div>
    );
};

export default BookMark;