import React from 'react';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({user_name}) => {
    console.log("My All Book Mark :",user_name)
    
    return (
        <div className='sm:w-auto md:w-auto lg:w-1/3  bg-[#1111110D] p-2 '>
            <h1 className='text-2xl text-black font-medium'>Here is my BookMarks:{user_name.length} </h1>

            <div>
            {
                user_name.map(bookMark=><BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
            }

            </div>
            
           
            
            
        </div>
    );
};

export default BookMarks;