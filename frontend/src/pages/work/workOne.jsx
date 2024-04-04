import React from "react";

const WorkOne = () => {
  return (
    <div className="projectHomePage">
      <div className="projectPresentation">
        <h2>Holder Tester</h2>
        <p>Removing obsacles to make the Set Up faster and easily</p>
        <img src="/images/machine3.jpg" alt="" />
      </div>
      <div className="context">
        <div className="text">
          <h3>Context</h3>
          <p>
            Prior to implementing this verification equipment, the only way to
            check holders was on the production line, leading to downtime due to
            repairs of defective holders. With the new machine, maintenance
            teams can repair and verify holders before they reach production,
            reducing downtime and increasing production line efficiency.
          </p>
        </div>
        <div className="projectInfo">
          <div className="role">
            <h3>Role</h3>
            <p>Design Lead</p>
          </div>
          <div className="team">
            <h3>Team</h3>
            <p>2 Designers</p>
            <p>2 Engineers</p>
          </div>
          <div className="timeline">
            <h3>TimeLine</h3>
            <p>Apr/15 - May/01 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOne;
