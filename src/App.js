import React, { Component } from 'react';
import './App.css';
import apiTransactions from './constants'
import { sortByDate, filterResults } from './libraries/libraries'
import { Results } from './components/Results'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {transactions: sortByDate(apiTransactions), search: ''};
  }
  componentDidMount() {
    this.setState({transactions: sortByDate(apiTransactions)})
  }
  triggerSearch = (event) => {
    this.setState({search: event.target.value});
  }
  render() {
    const validSearch = filterResults(this.state.transactions, this.state.search)
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Transaction search
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          id="search"
          label="search"
          value={this.state.search}
          onChange={this.triggerSearch}
          margin="normal"
        />
        {
          validSearch ?
            <Results data={validSearch} /> :
            <span>Invalid character! search just accept numbers, ':', '-' and, '.'</span>
        }
      </div>
    );
  }
}

export default App;
