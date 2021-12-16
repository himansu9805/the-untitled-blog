import React, { useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { useHistory } from "react-router";
import { supabase } from "../../supabaseClient";

import './signup.css';
import './radio_button.css';

function Signup() {

  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [dob, setDOB] = useState();
  const [gender, setGender] = useState();

  const handleSignup = async (email, password) => {
    try {
      setLoading(true);
      const { data, error: authError } = await supabase.auth.signUp({ email, password });
      if (authError) throw authError;
      const { error: databaseError } = await supabase
        .from('user')
        .insert([
          {
            uid: data.id,
            name: name,
            gender: gender,
            dob: dob,
          }
        ]);
      if (databaseError) throw databaseError;
      alert('Check your email for the confirmation link!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  }

  const gotoLogin = () => history.push('/login');

  return (
    <div className="signup">
      <div className="form__widget">
        <h1 className="header">SIGN UP</h1>
        <p className="description">Already a member? <span onClick={() => gotoLogin()}>Login</span></p>
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
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="row">
          <input
            placeholder="Your date of birth"
            className="input__field__dob"
            type="text"
            onFocus={(e) => {
              e.target.type = 'date'
              e.target.placeholder = ''
            }}
            onBlur={(e) => {
              if (e.target.value === '') {
                e.target.type = 'text'
                e.target.placeholder = 'Your date of birth'
              } else {
                e.target.type = 'date'
              }
            }}
            id="birthday"
            name="birthday"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />
        </div>
        <div className="rad-buttons">
          <label class="rad-label">
            <input type="radio" class="rad-input" name="rad" onClick={() => setGender('Male')} />
            <div class="rad-design"></div>
            <div class="rad-text">Male</div>
          </label>
          <label class="rad-label">
            <input type="radio" class="rad-input" name="rad" onClick={() => setGender('Female')} />
            <div class="rad-design"></div>
            <div class="rad-text">Female</div>
          </label>
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
        <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              handleSignup(email, password)
            }}
            className="button"
            disabled={loading}
          >
            {loading ? <span>Loading</span> : <span>SIGN UP</span>}
          </button>
        </div>
        <p className="description with__line">or sign up with</p>
        <div className="socials">
          <FcGoogle fontSize="2rem" className="social__icons" />
          <GrFacebook fontSize="1.75rem" className="social__icons" />
        </div>
      </div>
    </div >
  );
}

export default Signup;