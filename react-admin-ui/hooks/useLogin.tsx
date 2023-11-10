import { useAuthContext } from "./useAuthContext";
import { Dispatch } from "react";

export const useLogin = () => {
  const { dispatch } = useAuthContext();

  const storedUser = localStorage.getItem("user") as string;
  const parsedUser = JSON.parse(storedUser);

  // update the auth context
  dispatch({ type: "LOGIN", payload: parsedUser.data.email });

  // update loading state
};
