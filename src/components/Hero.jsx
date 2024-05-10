import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero container section">
        <img className="dp" src="/DP.jpg" alt="Profile Picture" />
        <h3 className="hero__name">
          Hello! I'm George
        </h3>
        <h3 className="hero__title">
        Full-stack <br /> Developer
        </h3>
        <p className="hero__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sit
          culpa? Aspernatur dolores ipsam cum blanditiis commodi laboriosam
          recusandae, pariatur hic ducimus aliquam qui veritatis velit sit eaque
          consequatur!
        </p>
        <button className="hero__btn btn">
          <a href="mailto:vanlalgeorgevpz@gmail.com"
          target="_blank">Reach Out</a>
        </button>
      </section>
    </>
  );
};

export default Hero;
