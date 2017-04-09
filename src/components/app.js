import React, { Component } from 'react';
import SearchBar from './SearchBar';
import TodoList from './TodoList';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <Row>
          <Col xs={12}>
            <h1>starter</h1>
            <SearchBar />
            <TodoList />
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default App;
