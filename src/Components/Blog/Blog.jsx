import { FaRegBookmark } from "react-icons/fa";
import PropTypes from 'prop-types';

const Blog = ({ blog, handleBookMarks }) => {
    // console.log(blog);
    const { cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;

    return (
        <div className="mb-14 space-y-4 mt-10">
            <img className="w-full rounded-2xl" src={cover} alt="" />
            <div >
                <div className="flex justify-between items-center mb-2">
                    <div className="flex justify-between items-center space-y-4">
                        <img className="w-[100px] rounded-full" src={author_img} alt="" />
                        <div>
                            <h4>{author}</h4>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <p>{reading_time} read</p>
                        <button onClick={() => handleBookMarks(blog)} className="font-bold text-red-500"><FaRegBookmark></FaRegBookmark></button>
                    </div>
                </div>
                <h2 className="text-4xl font-bold ">{title}</h2>
                <p>
                    {
                        hashtags.map((hash, idx) => <span key={idx} ><a href=""> {hash} </a></span>)
                    }
                </p>
                <button className="text-[#6047EC] font-bold">Mark as read </button>

            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleBookMarks: PropTypes.func
}

export default Blog;