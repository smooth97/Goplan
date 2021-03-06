import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import Profile from '../../scss/images/white.JPG';

class Dashboard extends Component {
  render() {
    // 프로젝트와 인증 상태
    const { projects, auth } = this.props;

    // 로그인 하지 않으면 signin 페이지만 보여준다.
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboardContainer">
        <div className="profile">
          <div className="image">
            <img src={Profile} alt="" />
          </div>
          <div>
            <h1>Goplan</h1>
            <p>
              Post the things <br />
              you need to challenge!
            </p>
          </div>
        </div>
        <div className="lists">
          <ProjectList projects={projects} />
        </div>
      </div>
    );
  }
}

// 프로젝트와 인증 상태 가져오기
const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
  };
};

export default compose(
  firestoreConnect([{ collection: 'projects' }]),
  connect(mapStateToProps),
)(Dashboard);
