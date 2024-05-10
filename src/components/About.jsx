import React, { useState } from "react";
import "../styles/About.css";

const About = () => {
  return (
    <>
      {/* <hr className="about__hr" /> */}
      <section className="about container section">
        <h3 id="about" className="about__title">About</h3>
        <div className="about__wrapper">
          <div className="container">
            <span className="about__description">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio accusantium ullam repellendus eveniet quibusdam
                corrupti, voluptate in alias at adipisci?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                eligendi suscipit reiciendis rem pariatur sapiente. Quia soluta
                alias possimus ad quisquam fugit, doloremque a pariatur nam
                atque, totam vitae.
              </p>
              <hr className="hero__desc_hr"/>
            </span>
            <h4 id="featured" className="about__subtitle">Technologies</h4>
            <span className="about__skills">
              <ul>
                <span>
                  <li>Java</li>
                  <li>Javascript</li>
                  <li>CSS</li>
                </span>
                <span>
                  <li>HTML</li>
                  <li>ReactJS</li>
                  <li>NodeJS</li>
                </span>
              </ul>
            </span>
          </div>
          <div className="container">
            <img loading="lazy" className="pro__pic" src="propic.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
