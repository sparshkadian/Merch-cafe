import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { sideBarAnimate } from '../utils/motion';
import { useAuthStatus } from '../hooks/useAuthStatus';

const SideBar = ({ sideBar }) => {
  const { isLoggedIn } = useAuthStatus();
  const closeSideBar = () => {
    sideBar(false);
  };

  return (
    <>
      <motion.div
        variants={sideBarAnimate}
        initial='hidden'
        whileInView='show'
        className='sidebar p-3 rounded-l-[10px] h-screen w-[250px] flex flex-col gap-2'
      >
        <FontAwesomeIcon
          onClick={closeSideBar}
          className='close-menu-icon'
          icon={faX}
        />
        {isLoggedIn && <p>Profile Details:</p>}
        {!isLoggedIn && (
          <div className='flex ml-10 mb-5 gap-7 text-white'>
            <button
              className='signupButton nav-button px-6 py-3 rounded-[50px]'
              type='button'
            >
              Sign Up
            </button>
            <button
              type='button'
              className='loginButton nav-contact px-8 rounded-[50px]'
            >
              Log In
            </button>
          </div>
        )}
        <p className='cursor-pointer'>ITEM 1</p>
        <div className='border-2 border-zinc-500'></div>
        <p className='cursor-pointer'>ITEM 2</p>
        <div className='border-2 border-zinc-500'></div>
        <p className='cursor-pointer'>ITEM 3</p>
      </motion.div>
    </>
  );
};

export default SideBar;
