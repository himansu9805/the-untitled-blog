import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { supabase } from './supabaseClient';

import ScrollToTop from './ScrollToTop';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/homepage";
import Blog from './components/blog/blog';
import BlogComplete from './components/blog/blog_complete';
import Signup from './components/auth/signup';
import ForgotPassword from './components/auth/forgot_password';
import RandomTest from './components/auth/test';
import Login from './components/auth/login';
import CreateBlog from './components/blog/create_blog';

import './App.css';
import Profile from './components/profile/profile';

function App() {

  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    if (session)
      getUserData(session);

    console.log(session);
  }, [session])

  async function getUserData(session) {
    try {
      const { data, error } = await supabase
        .from('user')
        .select(`name, avatar_url`)
        .eq('uid', session.user.id)
        .single();
      if (error) throw error;
      if (data.avatar_url) await downloadImage(data.avatar_url);
      setUser({ id: session.user.id, name: data.name, avatar_url: data.avatar_url });
    }
    catch (error) {
      alert(error.message);
    }
  }

  async function downloadImage(path) {
    try {
      let imageName = path.split('/')[1];
      console.log(imageName);
      const { data, error } = await supabase.storage.from(`bucket-${session.user.id}`).download(imageName)
      if (error) throw error;
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log('Error downloading image: ', error.message)
    }
  }

  return (
    <Router>
      <div className="App">
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <div className="background__home">
                <Header user={user} image={avatarUrl} session={session} />
                <Homepage />
              </div>
            </Route>
            <div>
              <Header user={user} image={avatarUrl} session={session} />
              {session ? (
                <>
                  <Route exact path="/profile">
                    <Profile user={user} image={avatarUrl} session={session} />
                  </Route>
                  <Route exact path="/blog/create">
                    <CreateBlog user={user} image={avatarUrl} session={session} />
                  </Route>
                </>
              ) : (
                <>
                  <Route exact path="/signup">
                    <Signup />
                  </Route>
                  <Route exact path="/login">
                    <Login />
                  </Route>
                  <Route exact path="/forgotPassword">
                    <ForgotPassword />
                  </Route>
                  <Route exact path="/resetPassword">
                    <RandomTest />
                  </Route>
                </>)}
              <Route exact path="/blog">
                <Blog session={session} />
              </Route>
              <Route exact path="/dummyBlog">
                <BlogComplete />
              </Route>
            </div>
          </Switch>
        </ScrollToTop>
        <Footer />
      </div>
    </Router>
  );
}

export default React.memo(App);
