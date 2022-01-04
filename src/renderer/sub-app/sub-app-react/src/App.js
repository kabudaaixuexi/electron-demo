import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename="/basesub/sub-react">
      <Link to="/">react</Link>
    </BrowserRouter>
  );
}

export default App;
