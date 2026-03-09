import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-abcd123.us.auth0.com"
    clientId="YOUR_CLIENT_ID"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);


Domain : dev-e1ewmhkuznon2jzs.us.auth0.com

Client ID : yWUal1uWRHW7zrDMf5blXqYRhwCUc6fa
