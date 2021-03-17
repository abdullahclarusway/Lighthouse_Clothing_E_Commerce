import React, { useState } from "react";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./SignIn.scss";
import { auth, signInWithGoogle } from "../../firebase/Firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in">
      <h2>I have already an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          value={email}
          label="Email"
          handleChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          type="text"
          name="password"
          label="Password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="buttons">
          <Button type="submit">Sign in</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
