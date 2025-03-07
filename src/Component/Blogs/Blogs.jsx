import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';


const Blogs = ({setBookMark,setTime}) => {
    const [blog,setBlog]=useState([])
    
    useEffect(()=>{
        fetch('Blog.json')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])
    return (
        <div className='sm:w-full md:w-2/3 lg:w-2/3'>
            
            {
                blog.map((item)=><Blog key={item.id} blog={item} setBookMark={setBookMark} setTime={setTime}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;