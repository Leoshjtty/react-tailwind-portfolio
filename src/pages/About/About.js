import pp from '../../assets/Profile Pic.jpg';

function About() {

  return (
    <div>
      <p>About </p>
      <img src={pp} className="Profile-pic" alt="pp" />
      <a
          className="App-link"
          href="https://linkedin.com/in/osel-lim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
    </div>
  );
}

export default About;