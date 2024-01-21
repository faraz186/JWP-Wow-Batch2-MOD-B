import { Button } from "./components/Button"
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./config/firebase";
function App() {
  const LoginWithGithub = ()=>{
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("user===>",user)
  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
   console.log("errorCode==>",errorCode)
  });
  }
  return (
    <>
     <Button faraz="google" />

     <button onClick={LoginWithGithub}>Github</button>

    </>
  )
}

export default App
