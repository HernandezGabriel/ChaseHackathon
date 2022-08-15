import { useState } from "react";
import { Link } from "react-router-dom";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Welcome Back!</h1>
      <form>
        Your Email
        <br />
        <input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        Password
        <br />
        <input
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Log In</button>
      </form>
      <br />
      Don't have an account? <Link to="/signup">Sign up</Link>.
    </div>
  );
};

export default LogInPage;
