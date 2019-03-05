import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import client from './apolloClient';
import Home from './Home';
import Details from './Details';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Route exact={true} path='/' component={Home} />
          <Route path='/details/:movieId' component={Details} />
        </div>
      </Router>
      </ApolloProvider>
    );
  }
}

export default App;
