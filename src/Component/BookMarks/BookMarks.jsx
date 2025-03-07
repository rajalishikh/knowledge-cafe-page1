import React from 'react';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({user_name,time}) => {
    console.log("My All Book Mark :",user_name)
    
    return (
        <div className='sm:w-auto md:w-auto lg:w-1/3'>
            <div className='bg-[#6047EC1A] p-4 mb-2'>
                <h2 className='text-[#6047EC] font-bold'>Spent time on read :{time}  min</h2>
            </div>
            <div className='  bg-[#1111110D] p-2 '>
            <h1 className='text-2xl text-black font-medium'>Here is my BookMarks:{user_name.length} </h1>

            <div>
            {
                user_name.map(bookMark=><BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
            }

            </div>
            
           
            
            
        </div>
        </div>
    );
};

export default BookMarks;