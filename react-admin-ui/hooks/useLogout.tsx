import { useAuthContext } from "./useAuthContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    // always think dispatch as global declaration, a MUST MUST when working with crazy context.
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};

export default useLogout;
