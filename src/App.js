import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Footer, Navbar } from './components';
import ScrollToTop from './components/ScrollToTop';
import GlobalStyles from './globalStyles';
import Home from './pages/HomePage/Home';

function App() {
  return (
    
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
          <Footer />
      </Router>
        
    
  );
}

export default App;
