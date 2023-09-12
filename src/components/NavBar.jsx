import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import SideBar from './SideBar';
import { useAuthStatus } from './../hooks/useAuthStatus';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const NavBar = () => {
  const auth = getAuth();
  // const profilePhoto = auth.currentUser.photoURL;
  const { isLoggedIn } = useAuthStatus();
  const wrapperRef = useRef();

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const resizeObserver = new ResizeObserver(() => {
    setWidth(window.innerWidth);
    if (width > 640) {
      setIsMenuVisible(false);
    } else setIsMenuVisible(true);
  });
  resizeObserver.observe(document.querySelector('body'));

  const handleSideBarOpen = () => {
    setIsMenuOpen(true);
    wrapperRef.current.style.backgroundColor = 'rgba(0,0,0,0.4)';
    wrapperRef.current.style.zIndex = '2';
  };

  const handleSideBarClose = (value) => {
    setIsMenuOpen(value);
    wrapperRef.current.style.backgroundColor = '#fff';
    wrapperRef.current.style.zIndex = '-10';
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className='wrapper absolute h-screen w-screen z-[-10]'
      ></div>

      <div
        className={`h-[10vh] relative navbar flex justify-between px-4 py-3 items-center`}
      >
        <Link to='/'>
          <img
            src='../imgs/logo.png'
            alt='site-logo'
            width={55}
            className='site-logo rounded-full'
          />
        </Link>

        {!isLoggedIn && !isMenuVisible && (
          <div className='mr-1 gap-7 text-white'>
            <Link to='/signup'>
              <button
                className='signupButton mr-4 px-8 py-4 rounded-[50px]'
                type='button'
              >
                Sign Up
              </button>
            </Link>

            <Link to='login'>
              <button
                type='button'
                className='loginButton px-8 py-4 rounded-[50px]'
              >
                Log In
              </button>
            </Link>
          </div>
        )}
        {isLoggedIn && !isMenuVisible && (
          <div className='flex gap-10 items-center mr-2'>
            <Link to='/profile'>
              {/* {!profilePhoto && (
                <img
                  src='../imgs/dummy-user.png'
                  alt='profile photo'
                  className='rounded-full cursor-pointer bg-white w-[50px] aspect-square'
                />
              )}
              {profilePhoto && (
                <img
                  src={profilePhoto}
                  alt='profile photo'
                  className='rounded-full cursor-pointer bg-white w-[50px] aspect-square'
                />
              )} */}
              <img
                src='../imgs/dummy-user.png'
                alt='profile photo'
                className='rounded-full cursor-pointer bg-white w-[50px] aspect-square'
              />
            </Link>
            <FontAwesomeIcon
              icon={faCartShopping}
              className='cursor-pointer'
              size='2x'
            />
          </div>
        )}

        {isMenuVisible && (
          <FontAwesomeIcon
            onClick={handleSideBarOpen}
            className='cursor-pointer mr-4 text-[25px]'
            icon={faBars}
          />
        )}
      </div>
      {isMenuOpen && (
        <SideBar
          sideBar={(value) => {
            handleSideBarClose(value);
          }}
        />
      )}
    </>
  );
};

export default NavBar;
