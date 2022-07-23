import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

export const HeroSection = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="hero-container">
      <video src="videos/video-3.mp4" autoPlay loop muted />
      <CSSTransition in={show} classNames="alert" timeout={3000}>
        <h1 className="hero__title">ADWENTURE AWAITS</h1>
      </CSSTransition>
      <CSSTransition in={show} classNames="alert" timeout={5000}>
        <p>What are you waiting for?</p>
      </CSSTransition>

      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
        </Button>
      </div>
    </div>
  );
};
