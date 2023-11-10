import "./login.scss";
import { useEffect } from "react";

import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

const GoogleLoginButton = () => {
  const login = useGoogleLogin({
    // let google api handle call request at their backend
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        localStorage.setItem("user", JSON.stringify(res));
        console.log("Succesful login:" + res.data.email);
      } catch (err) {
        console.log(err);
      }
    },
  });

  // console.log("raw from locals" + localStorage.getItem("user"));
  // const storedUser = localStorage.getItem("user") as string;
  // const parsedUser = JSON.parse(storedUser);
  // console.log(`"parsed user:" ${parsedUser.data.email}`);

  //PROBELM THEN TO CAPTURE TO MONGODB CALL AFTER LOCALSTORAGE
  // SOLVED, TQ CHATGPT!! TQ AXIOS!!

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser); //convert localstore to readable JS. Object

      const signUp = async () => {
        try {
          await axios.post("http://localhost:8800/user/signup", {
            email: parsedUser.data.email,
          });
          console.log("Sign up successful");
        } catch (error) {
          console.error("Error signing up:", error);
        }
      };

      signUp();
    }
  }, []);

  return (
    <div className="login">
      <button onClick={() => login()}>Sign in Google</button>
    </div>
  );
};

export default GoogleLoginButton;
