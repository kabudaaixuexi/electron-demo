import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename="/sub-react2">
      <Link to="/">react</Link>
    </BrowserRouter>
  );
}

export default App;
