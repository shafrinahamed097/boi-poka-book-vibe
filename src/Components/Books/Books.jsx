import React, { useState, useEffect } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('./booksData.json')
    .then(res=>res.json())
    .then(data=>setBooks(data))

  }, []);
  return (
    <div>
      <h2 className="playfair font-bold text-4xl text-center">Books</h2>
      <p>{books.length}</p>
    </div>
  );
};

export default Books;

/*

1. state to store books
2. use Effect
3. fetch to load data
4. set the data to the books state

*/
