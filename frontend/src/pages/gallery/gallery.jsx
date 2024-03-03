import React from "react";
import Header from "../../components/navHeader/navHeader.jsx";
import Footer from "../../components/Footer/footer";
import GalleryExperience from "./galleryExperience.jsx";
import GalleryExperienceInfo from "../../mocks/imagesGallery.json";
import "./gallery.scss";

export default function gallery() {
  return (
    <>
      <Header />
      <div className="galleryExperience">
        <div className="galleryText">
          <h2 className="galleryTitle">Gallery</h2>
          <p className="text">Exploring the world through images.</p>
        </div>
        <div className="galleryExamples">
          {Object.values(GalleryExperienceInfo.elements).map((element) => {
            return element.imageSize === "big" ? (
              <GalleryExperience
                key={element.id}
                imgUrl={element.img_Url}
                size={element.imageSize}
              />
            ) : (
              <div>
                <GalleryExperience
                  key={element.id}
                  imgUrl={element.img_Url}
                  size={element.imageSize}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
