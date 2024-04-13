import React from "react";
import "./work.scss";
import Header from "../../components/navHeader/navHeader.jsx";
import Footer from "../../components/Footer/footer.jsx";

//Imports components to diffferentes experience job work done  :
import WorkOne from "./workOne.jsx";
//import WorkTwo from "./workTwo.jsx";
//import WorkThree from "./workThree.jsx";
import workExperienceImages from "../../mocks/workExperienceImages.json";

export default function Work(props) {
  //const [selectedElement, setSelectedElement] = useState("bathurst");
  const { selectedElement } = props;
  //console.log(workExperienceImages.elements_2.holderTester.holderTesterProcess);

  const selectedWork = () => {
    switch (selectedElement) {
      case "bathurst":
        return (
          <WorkOne
            experienceProcessObject={
              workExperienceImages.elements_2.holderTester.holderTesterProcess
            }
          />
        );
      case "pickering":
        return (
          <WorkOne
            experienceProcessObject={
              workExperienceImages.elements_2.demoPLC.holderTesterProcess
            }
          />
        );
      case "etobicoke":
        return (
          <WorkOne
            experienceProcessObject={
              workExperienceImages.elements_2.labview.holderTesterProcess
            }
          />
        );
      default:
        return <div>Nothing to display, try again later or call us !</div>;
    }
  };

  return (
    <>
      <Header />
      {selectedWork()}
      <Footer />
    </>
  );
}
