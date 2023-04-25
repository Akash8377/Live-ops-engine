import Home from './components/Landing-page/home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login/login';
import Registration from './components/registration-page/registration';
import About from './components/About-Us/about';
import List from './components/offer-List/offerlist';
import CreateOffer from './components/offer-List/offercreate';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/about' element={<About />} />
          <Route path='/offerlist' element ={<List/>}/>
          <Route path='/create-offer' element ={<CreateOffer/>}/>
          <Route path='/update-offer' element ={<CreateOffer/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
