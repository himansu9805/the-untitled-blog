import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/homepage";
import Blog from './components/blog/blog';
import BlogComplete from './components/blog/blog_complete';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div className="background__home">
              <Header header_type="home" />
              <Homepage />
            </div>
          </Route>
          <Route exact path="/blog">
            <Header />
            <Blog />
          </Route>
          <Route exact path="/dummyBlog">
            <Header />
            <BlogComplete />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
