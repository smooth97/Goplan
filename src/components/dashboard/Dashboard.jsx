import React, { Component } from 'react';
import Notifications from './Notification';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class Dashboard extends Component {
  render() {
    const { projects } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1"></div>
          <Notifications />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
  };
};

export default compose(
  firestoreConnect([{ collection: 'projects' }]),
  connect(mapStateToProps),
)(Dashboard);
