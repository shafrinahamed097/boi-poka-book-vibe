import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = ({bookId}) => {
    const param = useParams();
    console.log(param);
  return (
    <div>
      <h2>Book Details: {bookId}</h2>
    </div>
  );
};

export default BookDetails;