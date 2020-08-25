import { useState, useRef, useEffect } from 'react'

function useVisible(initialIsVisible: boolean) {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  let ref: any
  ref = useRef(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
}

export default useVisible;