// import logo from "./logo.svg";
import "./App.css";
import Tab from './Tab.js'
import Selectors from './Selector.js'

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
      </header>*/}
      <Tab tabJson ={{
        picUrl:['./imag/1.jpeg','./imag/2.jpeg','./imag/3.jpeg','./imag/4.jpeg'],
        timer:2000
       }}/>
    </div>

  );
}

export default App;
