import logo from './logo.svg';
import './App.css';

function App() {
  const handleChange = () => {
    const names = ["Jerry", "Beatrice", "Lovers"];
    let int = Math.floor(Math.random() * 3);
    return names[int];
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi {handleChange()}
        </a>
      </header>
    </div>
  );
}

export default App;
