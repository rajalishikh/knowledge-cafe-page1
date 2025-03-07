import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMarks from './Component/BookMarks/BookMarks'
import Header from './Component/Header/Header'
function App() {
  const [bookMark,setBookMark2]=useState([]);

  const handleBookMark=(blog)=>{
    
    console.log(blog)
    const newArray=[...bookMark,blog]
    setBookMark2(newArray)
   
  }
  return (
    <>
      <Header></Header>
      <div className='sm:block md:flex lg:flex p-4 lg:max-w-7xl lg:mx-auto gap-4'>
      <Blogs setBookMark={handleBookMark} ></Blogs>
      <BookMarks user_name={bookMark}></BookMarks>
     
      
      </div>
      
    </>
  )
}

export default App
