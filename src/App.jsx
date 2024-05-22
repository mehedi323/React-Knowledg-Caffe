
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const handleBookMarks = blog =>{ 
    const newBookMarks = [...bookMarks , blog];
    setBookMarks(newBookMarks)
  }
  return (
    <>
      <Header></Header>
      <div className='md: flex max-w-7xl mx-auto gap-5'>
        <Blogs handleBookMarks={handleBookMarks}></Blogs>
        <BookMarks bookMarks={bookMarks}></BookMarks>
      </div>
    </>
  )
}

export default App
