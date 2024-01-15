import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Examples from "./pages/Examples";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthRoute from "./routes/AuthRoute";
// import { Dashboard } from "@mui/icons-material";

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
    // <div>
    //   <form onSubmit={signupHandler}>
    //     <input
    //       type="text"
    //       placeholder="email"
    //       onChange={(e) => setemail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="password"
    //       onChange={(e) => setpassword(e.target.value)}
    //     />
    //     <button>SIGNUP</button>
    //   </form>
    // </div>
    <>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<Examples />}>
          <Route path="one" element={<ExampleOne />} />
          <Route path="two" element={<ExampleTwo />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
};

const ExampleOne = () => {
  return <h1 className="h1Heading1">ONE EXAMPLE</h1>;
};
const ExampleTwo = () => {
  return <h1>Two EXAMPLE</h1>;
};

export default App;
