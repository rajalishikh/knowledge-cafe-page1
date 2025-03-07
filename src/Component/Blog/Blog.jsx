import React from 'react';

const Blog = ({blog}) => {
    console.log(blog)
    const{cover_picture,author_img,tags,heading,reading_time,posted_date,Author_Name}=blog
    return (
        <div className='mb-2 border border-2px'>
            <img className='h-96 w-[400px] mb-2' src={cover_picture} alt="" srcset="" />
            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <div>
                        <img className='w-14 rounded-xl h-17' src={author_img} alt="" srcset="" />
                        </div>
                        <div>
                            <p>{Author_Name}</p>
                            <p>{posted_date}</p>

                        </div>
                    </div>
                    <div>
                        {reading_time}
                    </div>
                </div>
                <div>
                    <h2 className='text-3xl font-medium text-black'>{heading}</h2>
                    {
                        tags.map(item=><a href='#'>#{item}</a>)
                    }
                    <br />
                    <button className='text-blue-700 border-blue-700 border-b-2 text-sm mb-6'>Mark AS read</button>
                </div>


            </div>
           
            
        </div>
    );
};

export default Blog;