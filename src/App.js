import './App.css';
import NavigationBar from "./components/NavigationBar"
import Intro from './components/Intro'
import Trending from './components/Trending'
import Superhero from './components/Superheroes';
import "./style/landingPage.css"

function App() {
  return (
    <div>
      {/*INTRO SECTION*/}
      <div className="myBG">
        <NavigationBar/>
        <Intro/>
      </div>
      {/*END INTRO SECTION*/}

      {/*TRENDING SECTION*/}
      <div className="trending">
        <Trending/>
      </div>
      {/*END TRENDING SECTION*/}

      {/*SUPERHERO SECTION*/}
      <div className="superhero">
        <Superhero/>
      </div>
      {/*END SUPERHERO SECTION*/}
    </div>
  );
}

export default App;
