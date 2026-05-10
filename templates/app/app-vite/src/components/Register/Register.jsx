// TODO: build a register form with relevant fields
// TODO: call register(email, password) from useAuth() on submit
// TODO: show a clear error message if registration fails
// TODO: redirect to the event list on success
import "./Register.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setDShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Password do not match");
      return;
    }
    try {
      await register(email, password);
      navigate("/events");
    } catch (err) {
      setError(err.message);
    }
    persist;
  }
  return (
    <>
      <div className="form-container">
        <div className="form-card">
          <h1 className="title">Sign up</h1>
          <p className="subtitle">Sign up to continue</p>

          <form onSubmit={handleSubmit}>
            <div className="field">
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="field">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field pass-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span
                className="eye-icon"
                onClick={() => setDShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {error && <p className="error-message">{error}</p>}
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
            Already have an account? <Link to="/Login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}
