import pp from '../../assets/Profile Pic.jpg';

function About() {

  return (
    <div className="mt-8">
      <p>About </p>
      <img src={pp} className="Profile-pic" alt="pp" />
      <a
          className="text-teal-500"
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