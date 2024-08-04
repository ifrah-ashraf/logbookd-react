import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Check from "./pages/UI/Check";
import EditProfile from "./pages/UI/EditProfile";
import './index.css';

function App() {

    return (
        <Router>
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
