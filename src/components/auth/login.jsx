import React, { useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { useHistory } from "react-router";
import { supabase } from "../../supabaseClient";
import { FaUserNinja } from "react-icons/fa";

import './signup.css';

function Login() {

  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const gotoHome = () => history.push('/');

  const gotoSignup = () => history.push('/signup');

  const gotoForgotPassword = () => history.push('/forgotPassword');

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      gotoHome();
      console.log(data);
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="signup">
      <div className="form__widget">
        <h1 className="header"><FaUserNinja /> LOGIN</h1>
        <p className="description">New member? <span onClick={() => gotoSignup()}>Sign up</span></p>
        <div className="row">
          <input
            className="input__field"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="row">
          <input
            className="input__field"
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="left__aligned">
          <span className="form__text" onClick={() => gotoForgotPassword()}>Forgot Password?</span>
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              handleLogin(email, password)
            }}
            className="button"
            disabled={loading}
          >
            {loading ? <span>Loading</span> : <span>LOGIN</span>}
          </button>
        </div>
        <p className="description with__line">or login with</p>
        <div className="socials">
          <FcGoogle fontSize="2rem" className="social__icons" />
          <GrFacebook fontSize="1.75rem" className="social__icons" />
        </div>
      </div>
    </div>
  );
}

export default Login;