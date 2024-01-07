import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [refresh, setrefresh] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [userData, setUserData] = useState([]);

  const addData = async () => {
    try {
      const userObj = {
        name: "Jaffar Aman",
        phoneNumber: "03462528569",
        age: 22,
      };

      // auto id generate
      // const docRef = await addDoc(collection(db, "users"), userObj);
      const docRef = await setDoc(doc(db, "users", "abcd"), userObj);
      console.log(docRef, "docRef");
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, [refresh]);

  const getData = async () => {
    try {
      const arr = [];
      const docSnap = await getDocs(collection(db, "users"));

      docSnap.forEach((doc) => {
        // console.log("doc", doc.data());
        // console.log("id", doc.id);
        arr.push({
          ...doc.data(),
          id: doc.id,
        });
      });

      // console.log("arr", arr);
      setUserData([...arr]);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log("userData", userData);

  const handleSubmit = async (ele) => {
    try {
      ele.preventDefault();
      console.log("handleSubmit");

      const userObj = {
        firstName,
        lastName,
        email,
      };
      console.log("handleSubmit", userObj);
      const docRef = await addDoc(collection(db, "users"), userObj);
      console.log("docRef", docRef);
      setrefresh(!refresh);
    } catch (error) {
      console.log("handleSubmit error", error);
    }
  };

  const editData = async (id) => {
    console.log("editData", id);
    const editValue = prompt("Enter firstName");

    const userObj = {
      firstName: editValue,
    };

    await updateDoc(doc(db, "users", id), userObj);
    setrefresh(!refresh);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="first Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="last name"
          onChange={(e) => setlastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setemail(e.target.value)}
        />
        <button>SUBMIT</button>
      </form>

      <div>
        {userData.map((user, index) => {
          return (
            <li key={index}>
              {user.firstName}{" "}
              <button onClick={() => editData(user.id)}>EDIT</button>{" "}
            </li>
          );
        })}
      </div>
    </>
  );
}

export default App;
