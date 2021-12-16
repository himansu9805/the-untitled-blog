import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { supabase } from "../../supabaseClient";

import './signup.css';

function RandomTest() {

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');

  let location = useLocation();
  let history = useHistory();

  useEffect(() => {
    console.log(location.state.hash.split(/#|&/));
    if (location.state.hash.split(/#|&/).includes('type=recovery')) {
      setAccessToken(location.state.hash.split(/#|&/)[1].slice(13,));
      console.log(accessToken);
    } else {
      history.push('/forgotPassword');
    }
  }, [location]);

  const handleSubmit = async (password) => {
    try {
      setLoading(true);
      const { error, data } = await supabase.auth.api
        .updateUser(accessToken, { password: password })
      if (error) throw error;
      alert('Password updated!');
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
        <p className="description">Please enter your new password</p>
        <div className="row">
          <input
            className="input__field"
            type="password"
            placeholder="Your new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(password);
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

export default RandomTest;