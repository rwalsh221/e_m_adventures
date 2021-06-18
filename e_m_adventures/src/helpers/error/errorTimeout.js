export const errorTimeout = (errorState, message = 'Failed to Logout') => {
  errorState(message);
  setTimeout(() => {
    errorState('');
  }, 2000);
};
