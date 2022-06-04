import React, { useState } from "react";

const useLocalStorage = (key, initial) => {
  const [state, setState] = useState(() => {
    const storage = localStorage.getItem(key);
    return storage ? storage : initial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
