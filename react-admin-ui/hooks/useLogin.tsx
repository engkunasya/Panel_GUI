import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const { dispatch } = useAuthContext();

  const storedUser = localStorage.getItem("user") as string;
  const parsedUser = JSON.parse(storedUser);

  // update the auth context
  // think dispatch as global declaration
  dispatch({ type: "LOGIN", payload: parsedUser.data.email });
  console.log("hello from hook login");

  // update loading state
};
