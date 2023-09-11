import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import CreatorMerch from './pages/CreatorMerch';
import ScrollToTop from './components/ScrollToTop';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Protected from './components/Protected';
import ProfileDetails from './pages/ProfileDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route
          exact
          path='/home'
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route
          exact
          path='/merch/:creator'
          element={
            <>
              <Protected>
                <CreatorMerch />
              </Protected>
            </>
          }
        />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/login' element={<LogIn />} />
        <Route
          exact
          path='/profile'
          element={
            <>
              <Protected>
                <ProfileDetails />
              </Protected>
            </>
          }
        />
      </Routes>
      <ScrollToTop />
      <ToastContainer autoClose={2000} closeOnClick />
    </BrowserRouter>
  );
}

export default App;
