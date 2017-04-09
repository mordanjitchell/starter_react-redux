import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findTerm, addTODO } from '../actions/index';
import {
  FormGroup,
   Form,
   Button,
   FormControl,
  } from 'react-bootstrap';

class SearchBar extends Component {
  handleSearch(event) {
    this.props.findTerm(event.target.value);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTODO(this.props.term);
    this.props.findTerm('');
  }

  render() {
    return (
      <Form
        inline
        className="searchBar"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <FormGroup
          controlId="formBasicText"
        >
          <FormControl
            className="form-group"
            onChange={this.handleSearch.bind(this)}
            placeholder="Add To List"
            type="search text"
            value={this.props.term}
          />
          <Button
            className="form-group"
            type="submit"
            bsStyle="primary"
            bsSize="small"
          >
          Add
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    term: state.termReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ findTerm, addTODO }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
