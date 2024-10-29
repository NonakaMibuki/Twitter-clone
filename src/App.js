import { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Sidebar from "./components/sidebar/Sidebar";
import Timeline from "./components/timeline/Timeline";
import Widgets from "./components/widget/Widgets";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

  return (
    <Router className="app" basename="/twitter-clone">
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Sidebar isAuth={isAuth}/>
              <Timeline isAuth={isAuth}/>
              <Widgets isAuth={isAuth}/>
            </div>
          }
        />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
