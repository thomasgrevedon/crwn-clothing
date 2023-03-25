import { createContext, useState, useEffect, useReducer } from "react";
import { trackAuthStateChange, createUserDocumentFromAuth, signOutFromFireBase } from "../../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);

  const POSSIBLE_ACTIONS = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
  };

  const setCurrentUser = (user) => {
    dispatch({ type: "SET_CURRENT_USER", payload: user });
  };

  const INITIAL_STATE = {
    currentUser: null,
  };

  const userReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case POSSIBLE_ACTIONS.SET_CURRENT_USER:
        console.log(state);
        return { ...state, currentUser: payload };
      default:
        break;
    }
  };
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
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
