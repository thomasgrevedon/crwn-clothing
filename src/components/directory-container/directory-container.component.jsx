import { BackgroundImage, DirectoryBodyContainer, DirectoryContainerStyle } from "./directory-container.styles.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";

const DirectoryContainer = ({ category: { title, imageUrl, route } }) => {
  const navigation = useNavigate();

  const handleNavigate = () => navigation(route);
  return (
    <DirectoryContainerStyle onClick={handleNavigate}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now!</p>
      </DirectoryBodyContainer>
    </DirectoryContainerStyle>
  );
};

export default DirectoryContainer;
