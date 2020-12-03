import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './component/Home';
import Discover from './component/Discover';
import Me from './component/Me';
import BlogListPage from './component/blog/blogListPage'
import NewsListPage from './component/news/newsListPage'
import './index.css';

function App() {
  return (
      <Router>
        <ul className='routeStyle'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Discover/'>Discover</Link></li>
          <li><Link to='/Me/'>Me</Link></li>
        </ul>
        <Route path='/' exact component={Home} />
        <Route path='/Discover/' component={Discover} />
        <Route path='/Me/' component={Me} />
        
      </Router>
  );
}

export default App;
