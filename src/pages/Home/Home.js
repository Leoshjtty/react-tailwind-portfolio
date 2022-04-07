import '../../App.css';
import logo from '../../logo.svg';

function Home() {
  const filterColor = "brightness(0) invert(65%) sepia(66%) saturate(2615%) hue-rotate(128deg) brightness(90%) contrast(84%)"
  return (
    <div className="my-8">
      <p>Home </p>
      <img src={logo} className="App-logo" alt="logo" style={{filter: filterColor}}/>
      <img src={logo} className="App-logo" alt="logo" style={{animation: "App-logo-spin infinite 4s linear", filter: filterColor}}/>
      <img src={logo} className="App-logo" alt="logo" style={{animation: "App-logo-spin infinite 2s linear",filter: filterColor}}/>
      <img src={logo} className="App-logo" alt="logo" style={{animation: "App-logo-spin infinite 1s linear", filter: filterColor}}/>
      <img src={logo} className="App-logo" alt="logo" style={{animation: "App-logo-spin infinite 0.2s linear",filter: filterColor}}/>
        <p>
          Work In Progress
        </p>
    </div>
  );
}

export default Home;