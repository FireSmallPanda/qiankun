import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename='/react'>
      <Link to='/'>首页</Link>
      <Link to='/about'>关于页面</Link>

      <Route path='/' exact render={() => <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            首页
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            首页
          </a>
        </header>
      </div>}></Route>
      <Route path='/about' exact render={() => <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            关于页面
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            关于页面
          </a>
        </header>
      </div>}></Route>
    

    </BrowserRouter>
  );
}

export default App;
