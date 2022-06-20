import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Page/Home/Home'
import Article from './Page/Article/Article';

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Article" element={<Article />} exact />
      </Routes>
    </Router>
  );
}

export default App;
