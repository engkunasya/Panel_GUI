import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { AuthContextProvider } from "../context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      {/* <AuthContextProvider> */}
      <App />
      {/* </AuthContextProvider> */}
    </GoogleOAuthProvider>
  </React.StrictMode>
);
