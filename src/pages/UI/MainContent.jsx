import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function MainContent() {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleClick = () => {
        if (!isClicked) {
            navigate("/createprofile"); // Redirect to the CreateProfile page
        }
        setIsClicked(true); // Update state to indicate the button has been clicked
    }

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(src/assets/images/circle-3041437_1920.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-neutral-content text-justify">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-extrabold">Hello there</h1>
                    <h3 className="mb-10 text-yellow-400 font-extrabold">
                        Logbookd is a dynamic and interactive alumni engagement platform designed to bridge the gap between current students and alumni. This platform empowers alumni to create detailed profiles showcasing their achievements, skills, and professional journey, fostering a rich network of connections and opportunities.
                    </h3>
                    <button className="btn btn-primary"
                        onClick={handleClick}
                    >Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
