import React from "react";
import "./work.scss";
import Header from "../../components/navHeader/navHeader.jsx";
import Footer from "../../components/Footer/footer.jsx";

//Imports components to diffferentes experience job work done  :
import WorkOne from "./workOne.jsx";
import WorkTwo from "./workTwo.jsx";
import WorkThree from "./workThree.jsx";

export default function Work(props) {
  //const [selectedElement, setSelectedElement] = useState("bathurst");
  const { selectedElement } = props;

  const selectedWork = () => {
    switch (selectedElement) {
      case "bathurst":
        return <WorkOne />;
      case "pickering":
        return <WorkTwo />;
      case "etobicoke":
        return <WorkThree />;
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
