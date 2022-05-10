import React, { useCallback } from "react";

const UseCallback = () => {
  // useCallback is used to load the function on the component scope only one time
  // event if the component reloads agains or suffer changes. It has an array of dependencies

  const handleCallback = useCallback((event) => console.log(event), []);

  return (
    <>
      <button onClick={handleCallback}>Chamar callback</button>
    </>
  );
};

export default UseCallback;
