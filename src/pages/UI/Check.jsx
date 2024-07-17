import { useState , useEffect } from "react";
import NewNavbar from "./NewNavbar";
import ProfileCard from "./ProfileCard";



function Check() {
  const [profile , setProfile] = useState(null)

  useEffect(()=>{
    fetch('/profiles.json')
      .then(response => response.json())
      .then(data =>{
        setProfile(data[0])
      })
      .catch(error => console.error('Error fetching profile data:', error))
  }, [])

  if (!profile) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <NewNavbar />
      <ProfileCard profile={profile} />
    </div>
  );

}

export default Check ;