import React from 'react';

const ProjectSummary = ({ project }) => {
  return (
    <div className="project-summary">
      <div className="summary-container">
        <p className="summary-day">3rd September, 2am</p>
        <div className="summary-contens">
          <span className="summary-title">{project.title}</span>
          <p className="summary-content">{project.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
