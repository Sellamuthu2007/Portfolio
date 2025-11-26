import "./index.css";

function Home() {
  return (
    <>
      <nav className="nav1">
        <ul className="logo">
          <li>
            <a href="https://www.linkedin.com/in/sellamuthu-ramu-3b3390327">
              Sellamuthu R
            </a>
          </li>
        </ul>

        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Achievements">Achievements</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#certificate">Certificate</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="intro">
          <h3>Hi I'm Sellamuthu R</h3>
          <h4>Aspiring Software Development Engineer</h4>
          <p>
            I'm very much committed in doing FSD projects and participating in
            public speaking competitions to enhance my communication and
            leadership qualities.
          </p>
        </div>
      </section>

      {/* ABOUT PAGE */}
      <section id="About" className="about">
        <div className="card">
          <div className="edu-card">
            <div className="front-edu">
              <h3>Education</h3>
            </div>
            <div className="back-edu">
              <p>School : 84.4%</p>
              <p>Higher Secondary : 96.7%</p>
            </div>
          </div>

          <div className="skills-card">
            <div className="front-skill">
              <h3>Skills</h3>
            </div>
            <div className="back-skill">
              <p>HTML, CSS, JS, React</p>
              <p>Python, ML Basics</p>
            </div>
          </div>

          <div className="intern-card">
            <div className="front-intern">
              <h3>Internships</h3>
            </div>
            <div className="back-intern">
              <p>Application Developer Intern</p>
              <p>BETSHOOW Startup</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
