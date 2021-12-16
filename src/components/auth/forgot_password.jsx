import React, { useState } from "react";
import { supabase } from "../../supabaseClient";

import './signup.css';

function ForgotPassword() {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (email) => {
    try {
      setLoading(true);
      const { error } = supabase.auth.api.resetPasswordForEmail(email);
      if (error) throw error;
      alert('Check your email for the confirmation link!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="forgot__password">
      <div className="form__widget">
        <h1 className="header">FORGOT PASSWORD</h1>
        <p className="description">Please enter your email to reset your password</p>
        <div className="row">
          <input
            className="input__field"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(email);
            }}
            className="button"
            disabled={loading}
          >
            {loading ? <span>Loading</span> : <span>SUBMIT</span>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;