import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInandSignUp from "./pages/signIn-signUp/SignInandSignUp";
import { auth, createUserProfileDocument } from "./firebase/Firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        }, console.log(currentUser));
      } else {
        setCurrentUser(userAuth);
      }
    });
  }, []);

  console.log(currentUser);

  return (
    <Router>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignInandSignUp} />
      </Switch>
    </Router>
  );
}

export default App;
