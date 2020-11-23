import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn'
import SignUp from './SignUp'
import SearchBar from './SearchBar'
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
      <SignIn />
      {/* <SearchBar /> */}
    </div>
  );
}

export default App;
