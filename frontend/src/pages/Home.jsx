import React from 'react';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2'
import Book from '../components/Books';
import "./home.scss"

function Home() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <div className='books_box'>
        <Book />
      </div>

    </div>
  )
}

export default Home;