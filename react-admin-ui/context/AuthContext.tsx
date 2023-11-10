import { createContext, useEffect, useReducer } from "react";
import React from "react";
import { Dispatch } from "react";

//----------> useEffect is introduced here as latest feature for update login local storage/global state even after page refresh

// FIRST API EXPORT----

type ActionProps = {
  type: string;
  payload: string;
};
type DispatchProps = {
  dispatch: Dispatch<ActionProps>;
};

type AuthType = "LOGIN" | "LOGOUT";

// FIRST API EXPORT --
export const AuthContext = createContext<AuthType | null>(null);

// SECOND API EXPORT----
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

// 3RD API EXPORT----
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      // const user = JSON.parse(localStorage.getItem("user"));

      dispatch({ type: "LOGIN", payload: parsedUser.data.email });
    }
  }, []);

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
