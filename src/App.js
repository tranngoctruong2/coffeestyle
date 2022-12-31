import Header from './components/Header';
import './App.css';


import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './components/Cart';
import Main from './components/Main';

function App() {
  
  return (
    <div className="App">
     
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/main' elemen={<Main/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
