import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookMarks}) => {
    console.log(bookMarks);
    return (
        <div className="md:w-1/3 p-4 bg-gray-200 rounded-2xl mt-14 ">
            <h2 className='text-xl font-bold'>BookMarks: {bookMarks.length}</h2>
            {
                bookMarks.map(bookMark=> <BookMark key={bookMark.id} bookMarks={bookMark}></BookMark>)
            }
        </div>
    );
};

BookMarks.propTypes = {
    bookMarks: PropTypes.object
}

export default BookMarks;