
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readinTime, setReadinTime] = useState(0);
 

  const handleBookMarks = blog =>{ 
    const newBookMarks = [...bookMarks , blog];
    setBookMarks(newBookMarks)
  }

  const handleReadingTime = time =>{
    const newReadingTime = readinTime + time;
    setReadinTime(newReadingTime)
  }

  
  return (
    <>
      <Header></Header>
      <div className='md: flex max-w-7xl mx-auto gap-5'>
        <Blogs handleBookMarks={handleBookMarks} handleReadingTime={handleReadingTime} ></Blogs>
        <BookMarks bookMarks={bookMarks} readinTime={readinTime}></BookMarks>
      </div>
    </>
  )
}

export default App
