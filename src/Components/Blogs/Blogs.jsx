import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog"; 
import PropTypes from 'prop-types'


const Blogs = ({handleBookMarks, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('Cafe.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3 ">
            <h3 className="border-b-2 border-solid py-2 border-gray-200">Knowledg-Cage: {blogs.length} </h3>
            {
                blogs.map(blog =>
                     <Blog key={blog.id}
                     handleBookMarks={handleBookMarks} 
                     handleReadingTime={handleReadingTime}
                      blog={blog}> 
                      </Blog> )
            }
        </div>
    );
};

  Blog.propTypes = { 
    handleBookMarks : PropTypes.func.isRequired
  } 

export default Blogs;