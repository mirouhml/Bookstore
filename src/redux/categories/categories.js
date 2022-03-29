const DISPLAY = 'DISPLAY';

const reducer = (categories = 'Check status', action) => {
  switch (action.type) {
    case DISPLAY:
      return action.message;
    default:
      return categories;
  }
};

const displayMessage = (message) => ({
  type: DISPLAY,
  message,
});

export { displayMessage };
export default reducer;
