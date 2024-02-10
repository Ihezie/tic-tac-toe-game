const initialRenderVariants = {
  show: {
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      mass: 0.45,
      damping: 7.9,
      stiffness: 120,
    },
  },
  hide: {
    scale: 0,
  },
};

export default initialRenderVariants;
