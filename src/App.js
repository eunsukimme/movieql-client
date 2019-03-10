import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import client from './apolloClient';
import Home from './Home';
import Details from './Details';
import { GlobalStyle } from './globalStyles';


class App extends Component {
  constructor(props){
    super(props);
  }

  handleScroll(e){
    let heightBound = window.height * 0.8
    if (heightBound > window.scrollY) {
        // Probably you want to load new cards?
        console.log('hi');
    } 
  }

  render() {
    return (
      <ApolloProvider client={client}>
      <Router>
        <main onScroll={this.handleScroll.bind(this)}>
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
