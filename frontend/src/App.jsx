import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

import Navbar from './components/Navbar';
import Contact from './pages/Contact';





function App() {
  return (
     
    <Router>
      <div>
         <Header />
         <Navbar />
         <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />} ></Route>
         </Routes>
         
      </div>


    </Router>
     

        
  );
}


export default App;

