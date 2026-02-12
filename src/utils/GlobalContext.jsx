import { createContext, useEffect, useState } from "react";
import { authService } from "../services/AuthServices";
const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    authService.checkAuthStatus();
  }, []);

  const contextData = {
    loading,
    setLoading,
    setUser,
    user,
  };

  return (
    <MyContext.Provider value={contextData}>
      {/* {loading ? (
        <div className="h-screen w-screen flex justify-center items-center text-4xl text-primary-500 animate-pulse">
          Loading...
        </div>
      ) : (
        children
      )} */}
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
