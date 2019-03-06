import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import client from './apolloClient';
import Home from './Home';
import Details from './Details';
import { GlobalStyle } from './globalStyles';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router>
        <main>
          <GlobalStyle />
          <Route exact={true} path='/' component={Home} />
          <Route path='/details/:movieId' component={Details} />
        </main>
      </Router>
      </ApolloProvider>
    );
  }
}

export default App;
