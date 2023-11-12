import "./login.scss";
import { useEffect } from "react";

import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

const GoogleLoginButton = () => {
  const login = useGoogleLogin({
    // let google api handle call request at their backend
    // res: get res from GOOOGLE if succeded
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
        // -------------- res1: send google token to localstorage for local caching
        localStorage.setItem("user", JSON.stringify(res));
        if (res) {
          location.reload();
        }

        // -------------- res2: send google token/ data to mongodb for signup or login.
      } catch (err) {
        console.log(err);
      }
    },
  });

  // console.log("raw from locals" + localStorage.getItem("user"));
  // const storedUser = localStorage.getItem("user") as string;
  // const parsedUser = JSON.parse(storedUser);
  // console.log(`"parsed user:" ${parsedUser.data.email}`);

  //PROBELM THEN TO CAPTURE AND SENDING TO MONGODB AFTER RETRIEVING FROM LOCALSTORAGE
  // SOLVED, TQ CHATGPT!! TQ AXIOS!!

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser); //convert localstore to readable JS. Object

      const signUp = async () => {
        try {
          await axios.post("http://localhost:8800/user/signup", {
            email: parsedUser.data.email,
            name: parsedUser.data.name,
            picture: parsedUser.data.picture,
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
