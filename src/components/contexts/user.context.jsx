import { createContext, useState, useEffect } from "react";
import { trackAuthStateChange, signOutFromFireBase } from "../../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = trackAuthStateChange((currentUser) => {
      console.log("////\\\\");
      console.log(currentUser);
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
