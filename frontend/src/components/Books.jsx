import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Book() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/books/')
      .then(response => {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Book List</h1>
      <ul>
        {books.length > 0 ? (
          books.map(book => (
            <div className="book-container" key={book.id}>
              <li>
                <img src={`http://127.0.0.1:8000/${book.image}`} alt={book.name} />
                {book.name} - {book.price}
              </li>
            </div>
          ))
        ) : (
          <p>No books available</p>
        )}
      </ul>
    </div>


  );
}

export default Book;

