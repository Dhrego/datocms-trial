import "../components/Hero.css";

export default function Hero({ data, navlinks }) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${data.image.url})` }}>
      <nav className="hero-nav">
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
      </nav>

      <main>
        <div className="col">
          <div className="hero-description">
            <h1>{data.title}</h1>
            <p>{data.subtitle}</p>
            <a href={data.link}>{data.cta}</a>
          </div>
        </div>
        <div className="col down">
          {/* <div className="dark">placeholder</div> */}
          <video
            className="dark"
            src="km_industry_range_sweepers.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </main>
    </div>
  );
}
