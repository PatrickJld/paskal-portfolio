import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { title, imageSrc, description, skills, gallery } = project;

  const handleViewClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < gallery.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <button className={styles.link} onClick={handleViewClick}>
          View
        </button>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={handleClose}></div>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={handleClose}>
              X
            </button>
            <img
              src={getImageUrl(gallery[currentIndex].imageSrc)}
              alt={gallery[currentIndex].description}
              className={styles.modalImage}
            />
            <p className={styles.imageDescription}>
              {gallery[currentIndex].description}
            </p>
            <div className={styles.navigation}>
              <button onClick={handleBack} disabled={currentIndex === 0}>
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === gallery.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
