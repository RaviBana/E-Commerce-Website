import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import {BrowserRouter, Route} from 'react-router-dom'
import CartDetail from './component/CartDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/> 
      <Route path='/' component={Home} exact/>
      <Route path='/cartdetail' component={CartDetail} />
      </BrowserRouter>
   
    </div>
  );
}

export default App;
