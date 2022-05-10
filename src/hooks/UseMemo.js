import React, { useMemo } from "react";

const UseMemo = () => {
  const [counter, setCounter] = React.useState();

  // useMemo set a value on the memory, so theres no need to get that value again;

  const counterMemo = useMemo(() => {
    const itemStorage = localStorage.getItem("product");
    return itemStorage;
  }, []);

  console.log(counterMemo);

  return <div>UseMemo</div>;
};

export default UseMemo;
