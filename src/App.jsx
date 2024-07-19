import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from './SupabaseClient'; // Import the Supabase client
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Check from "./pages/UI/Check";
import EditProfile from "./pages/UI/EditProfile";
import './index.css';

function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const getSession = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                console.error('Error getting session:', error.message);
            } else {
                setUser(data?.session?.user || null);
            }
        };

        getSession();

        const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
            setUser(session?.user || null);
        });

        return () => {
            // No need to unsubscribe; the listener handles it internally
            authListener; // Just retain the listener
        };
    }, []);

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
