import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  ListGroupItem,
  ListGroup,
  Button,
} from 'react-bootstrap';
import { deleteTodo } from '../actions/index';

class TodoList extends Component {
  handleDelete(item) {
    this.props.deleteTodo(item);
  }

  handleTodoList() {
    return this.props.todo.map((item, index) => {
      return (
        <ListGroupItem
          key={index}
        >
          {item}
          <Button
            className="finished"
            bsStyle="success"
            bsSize="xsmall"
            onClick={() => this.handleDelete(item)}
          >
          finished </Button>
        </ListGroupItem>

      );
    });
  }
  render() {
    if (!this.props.todo) {
      return <div>add something to the list! </div>;
    }
    return (
      <div>
        <ListGroup>
          {this.handleTodoList()}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state.newTodo,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
