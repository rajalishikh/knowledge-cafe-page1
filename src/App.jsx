import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMarks from './Component/BookMarks/BookMarks'
import Header from './Component/Header/Header'
function App() {
  const [bookMark,setBookMark2]=useState([]);
  const [time_total,setTimeTotal]=useState(0)

  const handleBookMark=(blog)=>{
    console.log(blog)
    const newArray=[...bookMark,blog]
    setBookMark2(newArray)
   
  }
  // const set time 
  const handleTime=(time,id)=>{
    
    setTimeTotal(time_total+time)
    console.log("Set Time",id)
    const remove_bookMark=bookMark.filter(mark=>mark.id!= id)
    setBookMark2(remove_bookMark)
    
  }
  return (
    <>
      <Header></Header>
      <div className='sm:block md:flex lg:flex p-4 lg:max-w-7xl lg:mx-auto gap-4'>
      <Blogs setBookMark={handleBookMark}  setTime={handleTime}></Blogs>
      <BookMarks time={time_total} user_name={bookMark}></BookMarks>
     
      
      </div>
      
    </>
  )
}

export default App
