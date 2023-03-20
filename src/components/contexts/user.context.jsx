import { createContext, useState, useEffect } from "react";
import { trackAuthStateChange, createUserDocumentFromAuth, signOutFromFireBase } from "../../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = trackAuthStateChange((user) => {
      if (user) {
        setCurrentUser(user);
        createUserDocumentFromAuth(user);
      }
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
