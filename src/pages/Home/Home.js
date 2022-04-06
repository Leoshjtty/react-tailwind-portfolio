import '../../App.css';
import logo from '../../logo.svg';

function Home() {

  return (
    <div className="mt-8">
      <p>Home </p>
      <img src={logo} className="App-logo" alt="logo" style={{filter: "brightness(0) invert(65%) sepia(66%) saturate(2615%) hue-rotate(128deg) brightness(90%) contrast(84%)"}}/>
        
        <p>
          Work In Progress
        </p>
    </div>
  );
}

export default Home;