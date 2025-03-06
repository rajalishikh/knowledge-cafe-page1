import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMarks from './Component/BookMarks/BookMarks'
import Header from './Component/Header/Header'
function App() {
  return (
    <>
      <Header></Header>
      <div className='sm:block md:flex lg:flex p-4 mx-4'>
      <Blogs></Blogs>
      <BookMarks></BookMarks>
      </div>
      
    </>
  )
}

export default App
