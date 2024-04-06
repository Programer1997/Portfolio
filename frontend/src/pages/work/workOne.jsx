import React from "react";

const WorkOne = () => {
  return (
    <>
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
              check holders was on the production line, leading to downtime due
              to repairs of defective holders. With the new machine, maintenance
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
      <div className="projectSummary">
        <div className="summaryText">
          <p>SUMMARY</p>
          <h3>Quickly and reliably find solutions to repair your equipment.</h3>
          <p className="summaryText-text">
            The project involved the development of a holder verification
            equipment for Fakra coaxial connectors. A Siemens S7-1200 PLC and a
            Siemens HMI, both communicated over Ethernet (Profinet), were used
            to verify the condition of the holders. Electrical signals from
            holder sensors such as color, presence, and piece insertion were
            evaluated, along with manual verification of holder locks using
            pneumatic actuators.
          </p>
        </div>
        <div className="summaryImages">
          <img
            className="summaryImageIndividual"
            src="/images/machine1.jpg"
            alt="machine1"
          />
          <img
            className="summaryImageIndividual"
            src="/images/summary_1.png"
            alt="summary1"
          />
          <img
            className="summaryImageIndividual"
            src="/images/solution1.jpg"
            alt="solution1"
          />
        </div>
      </div>
      {/*///////////////////////////////////////*/}
      <div className="projectProblem">
        <div className="problemText">
          <h3>Issue</h3>
          <p>
            The main issue was the lack of an efficient system to verify holder
            condition before they reached the production line, resulting in
            downtime and costly repairs during production.
          </p>
        </div>
        <div className="problemImages">
          <img src="/images/problem1.jpg" alt="" />
          <img src="/images/problem2.jpg" alt="" />
        </div>
      </div>
      {/*///////////////////////////////////////*/}
      <div className="projectSolution">
        <div className="solutionText">
          <h3>Solution</h3>
          <p>
            The solution was the design and construction of an automated
            verification equipment using a Siemens PLC and HMI, which allowed
            for evaluation of electrical signals from holder sensors and manual
            verification of pneumatic locks, ensuring holders were in good
            condition before production started.
          </p>
        </div>
        <div className="solutionImages">
          <img
            className="solutionImageIndividual"
            src="/images/solution1.jpg"
            alt=""
          />
          <img
            className="solutionImageIndividual"
            src="/images/solution2.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default WorkOne;
