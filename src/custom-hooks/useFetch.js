import React, { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  async function request(url, options) {
    const result = await fetch(url, options);
    const json = result.json();
    setData(json);
  }

  return { data, error, loading };
};

export default useFetch;
