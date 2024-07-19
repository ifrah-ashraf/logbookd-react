import React, { useState, useEffect } from "react";
import NewNavbar from "./NewNavbar";
import ProfileCard from "./ProfileCard";
import { supabase } from '../../SupabaseClient';
import { useNavigate } from "react-router-dom";

function Check() {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state
  const navigate = useNavigate();

  // Fetch user authentication state
  const fetchAuthState = async () => {
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      navigate("/signin");
    }
  };

  useEffect(() => {
    const initialize = async () => {
      await fetchAuthState();

      // Fetch user data from the Supabase database
      try {
        const { data, error } = await supabase.from('users').select('*');
        if (error) {
          throw error; // Handle error
        }
        console.log('Fetched user data:', data); // Log fetched data
        setProfiles(data); // Set profiles state with fetched data
      } catch (error) {
        console.error('Error fetching user data:', error.message); // Log error
        setError(error.message); // Set error state
      } finally {
        setIsLoading(false); // Update loading state
      }
    };

    initialize();
  }, []);

  // Render loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <NewNavbar />
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} /> // Pass profile data to ProfileCard
      ))}
    </div>
  );
}

export default Check;
