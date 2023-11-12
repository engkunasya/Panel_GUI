import { createContext, useReducer } from "react";
import { ReactNode } from "react";
import React from "react";

// 1 create context
export const AuthContext = createContext(undefined as any);
// _______________________________________________

// 4 useReducer pure function after 3 context pillars.
export const AuthReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

// 2 create context provider & establish use reducer
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: null,
  });
  // _______________________________________________

  // 3 create context aka return..
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
