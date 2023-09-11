import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import SideBar from './SideBar';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useAuthStatus } from './../hooks/useAuthStatus';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { isLoggedIn } = useAuthStatus();
  const location = useLocation();
  const wrapperRef = useRef();

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const resizeObserver = new ResizeObserver(() => {
    setWidth(window.innerWidth);
    if (width > 640) {
      setIsMenuVisible(true);
    } else setIsMenuVisible(false);
  });
  resizeObserver.observe(document.querySelector('body'));

  const handleSideBarOpen = () => {
    setIsMenuOpen(true);
    wrapperRef.current.style.backgroundColor = 'rgba(0,0,0,0.4)';
    wrapperRef.current.style.zIndex = '2';
  };

  const handleSideBarClose = (value) => {
    setIsMenuOpen(value);
    wrapperRef.current.style.backgroundColor = `${
      location.pathname === '/' ? 'none' : '#fff'
    }`;
    wrapperRef.current.style.zIndex = '-10';
  };

  return (
    <>
      {/* This Wrapper Stuff is dangerous T_T*/}
      <div
        ref={wrapperRef}
        className='wrapper absolute h-screen w-screen z-[-10]'
      ></div>

      <motion.div
        className={`${
          location.pathname === '/' ? 'bg-black' : 'bg-white'
        } h-[10vh] relative navbar flex justify-between px-4 py-3 items-center`}
      >
        <Link to='/'>
          <img
            src='../imgs/logo.png'
            alt='site-logo'
            width={location.pathname === '/' ? 90 : 55}
            className='site-logo rounded-full'
          />
        </Link>

        {isMenuVisible && !isLoggedIn && (
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
        {isLoggedIn && isMenuVisible && (
          <div className='flex gap-10 items-center mr-2'>
            <img
              src='../imgs/dummy-user.png'
              alt='profile photo'
              className='rounded-full cursor-pointer bg-white w-[50px] aspect-square'
            />
            <FontAwesomeIcon
              icon={faCartShopping}
              className='cursor-pointer'
              size='2x'
              color={`${location.pathname === '/' ? '#fff' : '#000'}`}
            />
          </div>
        )}

        {!isMenuVisible && (
          <FontAwesomeIcon
            onClick={handleSideBarOpen}
            className='cursor-pointer mr-4 text-[25px]'
            icon={faBars}
            color={`${location.pathname === '/' ? '#fff' : '#000'}`}
          />
        )}
      </motion.div>
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
