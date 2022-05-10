import React from "react";
import { CreateContext } from "./GlobalContext";

const UseContext = () => {
  const globalData = React.useContext(CreateContext);
  return (
    <>
      {globalData && globalData.map((data) => <p key={data.id}>{data.nome}</p>)}
    </>
  );
};

export default UseContext;
