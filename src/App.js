import React, { Component } from 'react';
import axios from 'axios';

const url = 'https://swapi.co/api/people/'

class App extends Component {
  state = { data: {} }

  componentDidMount() {
    // just getting people first
    // may add redux later
    axios.get(url)
    .then(function (resp) {
      console.log(resp)
      this.setState({results: resp.data.results})
      console.log(this.state.results);
    })
    .catch(function (err) {
      console.log(err)
    })
  }

  render() {
    let { results } = this.state
    return (
      <div>
        hey
      </div>
    );
  }
}

export default App;