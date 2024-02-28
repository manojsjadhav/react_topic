import React, { createContext, useState } from "react";

export const countContaxt = createContext();

const Contextapi = ({children}) => {
  const [count, setCount] = useState(0);

  return (
    <countContaxt.Provider value={{count,setCount}} >
      {children}
    </countContaxt.Provider>
  );
};

export default Contextapi;
