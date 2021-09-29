import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/homepage";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="background">
        <Header />
        <Homepage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
