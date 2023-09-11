import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import CreatorMerch from './pages/CreatorMerch';
import ScrollToTop from './components/ScrollToTop';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/{creatorName}/merch' element={<CreatorMerch />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/login' element={<LogIn />} />
      </Routes>
      <ScrollToTop />
      <ToastContainer autoClose={2000} closeOnClick={true} />
    </BrowserRouter>
  );
}

export default App;
