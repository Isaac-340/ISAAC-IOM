import logo from './Estrella.jpg';
import './App.css';
import  Component  from './Component.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> AEIOU.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Isaac
        </a>
        <Component/>
      </header>
    </div>
  );
}

export default App;
