import './App.css';
import World from './comp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Reference Data Types use same memory</h1>
       <button onClick={window["run"]}>click here</button>
      </header>
      <World />
    </div>
  );
}

export default App;
  
