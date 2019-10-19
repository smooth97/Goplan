import React from 'react';

const ProjectSummary = ({ project }) => {
  return (
    <div className="card project-summary z-depth-2">
      <div id="details" className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
