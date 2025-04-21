import "../components/Hero.css";
// import Navbar from "../components/Navbar";
import { useState, useEffect, useRef } from "react";

export default function Hero({ data, navlinks }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [disableTransition, setDisableTransition] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 720);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) {
        setDisableTransition(true);
        setIsOpen(false);

        requestAnimationFrame(() => {
          setDisableTransition(false);
        });

        console.log("from here");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen, isMobile]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };
  return (
    <div className="hero" style={{ backgroundImage: `url(${data.image.url})` }}>
      <div className="overlay-1"></div>
      {/* <nav className="hero-nav">
        <div className="nav-container">
          <div className="logo">
            <img src={data.logo.url} alt="" />
          </div>
          <ul className="navlinks">
            {navlinks.map((link) => (
              <li key={link.linkId}>
                <a
                  className={`navlink ${
                    link.title.toLowerCase() === "contatti" ? "btn" : ""
                  }`}
                  href={`#${link.slug}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav> */}

      <nav className="hero-nav">
        <div className="nav-container">
          <div className="logo">
            <img src={data.logo.url} alt="Company Logo" />
          </div>
          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => {
              toggleMenu();
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul
            className={`navlinks ${isOpen ? "open" : ""} ${
              disableTransition ? "no-transition" : ""
            }`}
          >
            {navlinks.map((link) => (
              <li key={link.linkId} onClick={() => isMobile && toggleMenu()}>
                <a
                  className={`navlink ${
                    link.title.toLowerCase() === "contatti" ? "btn" : ""
                  }`}
                  href={`#${link.slug}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* <Navbar data={data} navlinks={navlinks} client:load /> */}
      <main>
        <div className="col">
          <div className="hero-description">
            <h1>{data.title}</h1>
            {/* <p>{data.subtitle}</p> */}
            <p dangerouslySetInnerHTML={{ __html: data.subtitle }} />

            <a href={data.link}>{data.cta}</a>
          </div>
        </div>
        <div className="col down">
          {/* <div className="dark">placeholder</div> */}
          {/* <video
            className="dark"
            src={data.video.video.mp4Url}
            autoPlay
            muted
            loop
            poster={data.video.video.blurUpThumb}
            playsInline
          /> */}
          <video
            className="dark"
            src={data.video.video.mp4Url}
            autoPlay
            muted
            loop
            playsInline
            poster={data.video.video.blurUpThumb}
            controls
            controlsList="nodownload"
            preload="auto"
            disablePictureInPicture
          />
        </div>
      </main>
    </div>
  );
}
