import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createProject(this.state);
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="create-container">
        <form onSubmit={this.handleSubmit} className="white">
          <h1 className="grey-text text-darken-3">Create New Project</h1>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={this.handleChange}
              placeholder="What challenges do you have?"
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              className="textContent"
              id="content"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToprops = dispatch => {
  return {
    createProject: project => dispatch(createProject(project)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(CreateProject);
