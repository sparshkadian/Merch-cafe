export const navBarAnimate = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1,
    },
  },
};

export const sideBarAnimate = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    trasnsition: {
      duration: 1,
    },
    x: 0,
  },
};
