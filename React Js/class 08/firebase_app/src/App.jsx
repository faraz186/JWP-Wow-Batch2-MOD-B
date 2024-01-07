import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";

const App = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signupHandler = async (e) => {
    try {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("user", userCredential.user.uid);
          console.log("user", userCredential);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={signupHandler}>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button>SIGNUP</button>
      </form>
    </div>
  );
};

export default App;
