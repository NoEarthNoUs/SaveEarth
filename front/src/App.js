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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/place' component={Place} />
          <Route exact path='/place/:id' component={PlaceDetail} />
          <Route exact path='/story' component={Story} />
          <Route exact path='/story/:id' component={StoryDetail} />
        </Switch>
      </ThemeProvider>
    </div>
  );

export default App;
