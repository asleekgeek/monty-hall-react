import logo from './logo.svg';
import './App.css';
import GameSimulationProgress from './GameSimulationProgress';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Simulation Progress:
        </p>
      </header>
      <body>
        <GameSimulationProgress />
      </body>
    </div>
  );
}

export default App;
