import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import './index.css';
import Check from "./pages/UI/Check";
import CreateProfile from "./pages/UI/CreateProfile";



function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/check" element={<Check/>}></Route>
            <Route path ="/CreateProfile" element={<CreateProfile/>}></Route>
        </Routes>
    </Router>
    )

}

export default App;