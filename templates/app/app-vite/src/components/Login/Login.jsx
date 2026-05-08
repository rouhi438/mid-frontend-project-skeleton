// TODO: build a login form with relevant fields
// TODO: call login(email, password) from useAuth() on submit
// TODO: show a clear error message if login fails
// TODO: redirect to the event list on success
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <div className="form-container">
      <div className="form-card">
        <h1 className="title">Login</h1>
        <p className="subtitle">Login to continue</p>

        <form>
          <div className="field">
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="field pass-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="submitBtn">
            Login
          </button>
        </form>

        <div className="divider">
          <span className="line"></span>
          <span className="dividerText">OR CONTINUE WITH</span>
          <span className="line"></span>
        </div>

        <div className="socialButtons">
          <button className="socialBtn">
            <span className="socialIcon">G</span> Google
          </button>
          <button className="socialBtn">
            <span className="socialIcon">G</span> Github
          </button>
        </div>

        <p className="footer">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
    // <div
    //   style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    // >
    //   <h1>Login</h1>
    //   <form
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       gap: "10px",
    //       width: "300px",
    //     }}
    //   >
    //     <input type="email" placeholder="Email" />
    //     <input type="password" placeholder="Password" />

    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
}
