import { React, useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { HiLocationMarker } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaBirthdayCake } from 'react-icons/fa';
import { RiEditFill } from 'react-icons/ri';

import './profile.css';

function Profile(props) {

  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null)

  useEffect(() => {
    if (props.user !== null) fetchUserData();
    if (props.user) setAvatarUrl(props.image);
  }, [props, avatarUrl]);

  async function fetchUserData() {
    try {
      setIsLoading(true);
      const { data, error: databaseError } = await supabase
        .from('user')
        .select(`name, dob, gender`)
        .eq(`uid`, props.user.id)
        .single();
      if (databaseError) throw databaseError;
      setUserData(data);
      console.log(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    (props.user !== null) && (isLoading === false) ? (
      <div className="profile">
        <div className="profile__header">
          <img
            src={avatarUrl}
            alt="Avatar"
            className="user__image"
          />
          <div className="text">
            <h1 className="user__name">{props.user.name}</h1>
            <h1 className="user__data">{new Date().getFullYear() - new Date(userData.dob).getFullYear()}, Student</h1>
            <span className="user__quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum aliquet commodo. Nunc condimentum nibh sit amet mauris vehicula interdum. Vivamus dignissim pulvinar purus, nec.</span>
            <div className="user__info">
              <div className="left">
                <span className="user__info__item"><HiLocationMarker color="#FDD047" /> India</span>
                <span className="user__info__item"><FaBirthdayCake color="#FD5DA8" /> {new Date(userData.dob).toLocaleDateString()}</span>
                <span className="user__info__item"><FaFacebookF color="#1778f2" /> himansu9805</span>
                <span className="user__info__item"><FaTwitter color="#08a0e9" /> hiiimanshhhu</span>
              </div>
              <div className="right">
                <button className="edit"><RiEditFill color="#f6f7f8" /><span className="text">Edit</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (<h1>Loading</h1>)
  );
}

export default Profile;