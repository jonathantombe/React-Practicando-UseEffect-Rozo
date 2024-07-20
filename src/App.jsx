import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Counter from "./components/Counter/Counter";
import Timer from "./components/Timer/Timer";
import Login from "./components/Login/Login";
import DigitalClock from "./components/DigitalClock/DigitalClock";

import './components/Styles/Styles.css'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/counter">Click Counter</Link>{" "}
          <Link to="/timer">Timer</Link>
          <Link to="/login">Login</Link>
          <Link to="/clock">Digital Clock</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/clock" element={<DigitalClock />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
