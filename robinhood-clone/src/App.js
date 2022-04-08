import "./App.css";
import Header from "./components/Header/Header";
import Newsfeed from "./components/Body/Newsfeed";
import Stats from "./components/Body/Stats";

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <Newsfeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
