// TODO: build a register form with relevant fields
// TODO: call register(email, password) from useAuth() on submit
// TODO: show a clear error message if registration fails
// TODO: redirect to the event list on success
import "./Register.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(false);
  return (
    <>
      <div className="form-container">
        <div className="form-card">
          <h1 className="title">Sign up</h1>
          <p className="subtitle">Sign up to continue</p>

          <form>
            <div className="field">
              <input type="text" placeholder="Enter your name" />
            </div>

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
            <div className="field pass-field">
              <input
                type={confirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="eye-icon"
                onClick={() => setConfirmPassword(!confirmPassword)}
              >
                {confirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button type="submit" className="submitBtn">
              Sign up
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
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </>
    // <div
    //   style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    // >
    //   <h1>Register</h1>
    //   <p>Register form — coming soon.</p>
    // </div>
  );
}
