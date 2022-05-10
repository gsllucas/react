import React, { useState, useEffect } from "react";
import { APP_URL } from "../config/constants/appUrls";

export const CreateContext = React.createContext();

const GlobalContext = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${APP_URL}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <CreateContext.Provider value={data}>{children}</CreateContext.Provider>
  );
};

export default GlobalContext;
