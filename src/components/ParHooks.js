import React from "react";
import styled from "styled-components";
import "../styles/ParHooks.scss";

const ContentHeading = styled.div`
  display: flex;
  justify-content: center;
  width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  margin-top: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

function ParHooks() {
  const renderContent = () => (
    <>
      <div className="Parallax__content__heading">
        <h1 className="Parallax__content__heading__text">Closure</h1>
        <h2 className="Parallax__content__heading__caption">
          Your one-stop source of Web Development tricks
        </h2>
      </div>
      <div className="Parallax__content__cta">
        <p>
          <b>1. Like the video.</b> Because it helps me and my channel
        </p>
        <p>
          <b>2. Like the video.</b> To see more content like that!
        </p>
        <p>
          <b>3. Follow the Github link.</b> And play with this code yourself!
        </p>
      </div>
    </>
  );

  return (
    <section className="Parallax">
      <div
        className="Parallax__background"
        // style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />
      <div
        className="Parallax__background-triangles"
        // style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      />
      <div className="Parallax__content">{renderContent()}</div>
    </section>
  );
}

export default ParHooks;
