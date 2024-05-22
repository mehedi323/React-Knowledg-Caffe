import React from 'react';
import PropTypes from 'prop-types';

const BookMark = ({bookMarks}) => { 
    const {title} = bookMarks;
    return (
        <div className='mt-4 '>
            <h3 className='font-bold  bg-gray-100 p-4 mb-2 rounded-xl '>{title}</h3>
        </div>
    );
};

BookMark.propTypes = {
    
};

export default BookMark;