import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import GlobalStyles from './components/common/GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Route path='/' component={Home} exact={true} />
      <Route path='/about' component={About} />
    </div>
  );
}

export default App;
