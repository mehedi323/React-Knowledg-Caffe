import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({ bookMarks, readinTime }) => {
    return (
        <div className="md:w-1/3">
            <h2 className="text-xl font-bold">Spent time on read : {readinTime} min</h2>
            <div className=' bg-gray-200 rounded-2xl mt-10 p-4  '>
                <h2 className='text-xl font-bold'>BookMarks: {bookMarks.length}</h2>
            </div>

            {
                bookMarks.map(bookMark => <BookMark key={bookMark.id} bookMarks={bookMark}></BookMark>)
            }
        </div>
    );
};

BookMarks.propTypes = {
    bookMarks: PropTypes.object,
    readinTime: PropTypes.object
}

export default BookMarks;