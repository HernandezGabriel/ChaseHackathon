import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import EventsPage from "./components/EventsPage";
import Profile from "./components/Profile";
import RewardsPage from "./components/RewardsPage";


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
