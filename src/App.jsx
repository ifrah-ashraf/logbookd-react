import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import "./index.css";
import Navbar from "./pages/Navbar";
import Check from "./pages/Check";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        {/* Redirect to Check if authenticated, otherwise to Signin */}
        <Route path="/check" element={<Check />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
