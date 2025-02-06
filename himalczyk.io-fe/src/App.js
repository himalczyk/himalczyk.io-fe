import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BooksCard from './components/BooksCard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/books" element={<BooksCard />} />
          <Route path="/" element={
            <header className="App-header">
              <p>Welcome to my website</p>
            </header>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
