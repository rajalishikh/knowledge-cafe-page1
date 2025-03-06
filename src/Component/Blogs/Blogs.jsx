import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';


const Blogs = () => {
    const [blog,setBlog]=useState([])
    useEffect(()=>{
        fetch('Blog.json')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])
    return (
        <div>
            <p>Length:{blog.length}</p>
            {
                blog.map((item)=><Blog key={item.id} blog={item} ></Blog>)
            }
            
        </div>
    );
};

export default Blogs;