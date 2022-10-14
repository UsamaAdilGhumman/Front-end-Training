import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import Books from './pages/books';
import Home from './pages/home';
import Book from './pages/book';
import NotFound from './pages/notfound';
import BookLayout from './pages/booklayout';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books' element={<BookLayout/>}> 
          <Route index element={Books} />
          <Route path=':id' element={<Book/>} />
      </Route>
      <Route path='/about' element={<About/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </>
  );
}

export default App;
 