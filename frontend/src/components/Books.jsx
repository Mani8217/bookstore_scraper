import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './book.scss'
import { Link } from 'react-router-dom';
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
      <h1 className='list-title'>Book List</h1>
      <ul>
        {books.length > 0 ? (

          books.map(book => (
            <div className="book-container" key={book.id}>
              <li>
                <Link to={book.url}>
                  <img src={`https://books.toscrape.com/${book.image}`} alt={book.name} />
                  <p>{book.name} </p>
                  <p>{book.price}</p>
                </Link>
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

