import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

const ProjectDetail = props => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="project-details">
        <div className="detail-cotainer">
          <h2>2nd September, 2am</h2>

          <h1 className="detail-title">{project.title}</h1>
          <p>{project.content}</p>
          <h3>
            Posted by -{' '}
            <span>
              {project.authorFirstName} {project.authorLastName}
            </span>
          </h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loding project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }]),
)(ProjectDetail);
