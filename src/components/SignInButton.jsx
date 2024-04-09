import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
export default function SignInButton() {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    instance.loginPopup(loginRequest).catch((e) => {
      console.log(e);
    });
  };
  return <button onClick={handleLogin}>Sign In</button>;
}
