import React from 'react';

const ProjectDetail = props => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            esse reprehenderit tenetur fugiat, facilis nemo doloribus porro fuga
            dignissimos hic nisi iure? Inventore deleniti aspernatur vel
            voluptatibus provident non reprehenderit!
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by the net NINJA</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
