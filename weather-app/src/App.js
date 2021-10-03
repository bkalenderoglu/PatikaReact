import "./App.css";
import Dropdown from "./components/Dropdown/Dropdown";
import CardList from "./components/CardList/CardList.js";
import { WeatherProvider } from "./contexts/WeatherContext";
import { CityProvider } from "./contexts/CityContext";

function App() {
  return (
    <CityProvider>
      <WeatherProvider>
        <div className="App container">
          <Dropdown />
          <CardList />
        </div>
      </WeatherProvider>
    </CityProvider>
  );
}

export default App;
