const IsMobile = (state = false, action) => {
  switch (action.type) {
    case "IS_MOBILE":
      return !state;
    default:
      return state;
  }
};
export default IsMobile;
