import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const APP_PREFIX = "chattie-";
  let newKey = APP_PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(newKey);

    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") return initialValue();
    
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(newKey, JSON.stringify(value));
  }, [newKey, value]);

  return [value, setValue];
}

export default useLocalStorage;
