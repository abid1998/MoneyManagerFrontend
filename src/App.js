import './App.css';
import Nav from './components/common/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Route path="/" component={Nav} />
    <Home />
    </BrowserRouter>
  );
}

export default App;
