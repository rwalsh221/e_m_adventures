import { useEffect } from 'react';

const useClickOutsideCloseHeader = (
  component,
  ref = null,
  state = null,
  setState = null
) => {
  useEffect(() => {
    // NEEDED FOR DATEPICKER IN MODIFY BOOKING AS IT IS ALWAYS SHOWN
    if (state === null) {
      return;
    }
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setState({ ...state, [component]: false });
      }
    };
    // If the item is active (ie open) then listen for clicks
    if (state[component]) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [state, setState, component, ref]);
};

export default useClickOutsideCloseHeader;
