import React, { useState } from "react";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./SignIn.scss";
import { signInWithGoogle } from "../../firebase/Firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value.email);
    setPassword(e.target.value.password);
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
          label="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="text"
          name="password"
          label="password"
          value={password}
          handleChange={handleChange}
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
