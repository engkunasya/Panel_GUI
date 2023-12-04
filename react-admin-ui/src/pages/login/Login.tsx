import "./login.scss";
import { useEffect } from "react";

import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

const LoginComponent = () => {
  const github_login = console.log("github log");

  const google_login = useGoogleLogin({
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
          window.location.replace("/");
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
    <div className="containerLogin">
      <img
        src="https://images.unsplash.com/photo-1606143705384-19989b1cf91c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="form">
        <div className="textStuff">
          <span className="title">Clean Energy, Clean City.</span>
          <span className="desc">
            Continue via OAuth <div className="border"></div>
          </span>
        </div>
        <div className="socialButton">
          <button onClick={() => google_login()}>
            <img src="google.svg" />
            <span className="google">Google</span>
          </button>
          <button onClick={() => github_login}>
            <img src="apple.svg" />
            <span className="apple">Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
