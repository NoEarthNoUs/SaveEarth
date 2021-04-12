import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home, About, Place, Story, StoryDetail, PlaceDetail } from './pages';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        {/* <Route path='/place' component={Place} /> */}
        <Route path='/story' component={Story} />
        {/* <Route exact path='/place/detail/:id' component={PlaceDetail} /> */}
        <Route exact path='/story/detail/:id' component={StoryDetail} />
      </ThemeProvider>
    </div>
  );
}

export default App;
