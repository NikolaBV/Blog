import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignInButton from "./components/SignInButton";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <SignInButton></SignInButton>
      <UserDetails></UserDetails>
    </>
  );
}

export default App;
