import { useEffect } from 'react';

const useClickOutsideCloseHeader = (component, ref, state, setState) => {
  useEffect(() => {
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
