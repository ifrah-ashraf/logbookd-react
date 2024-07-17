import React from 'react';

function ProfileCard({ profile }) {
    return (
        <div className="max-w-lg mx-auto  bg-gray-400 shadow-md rounded-lg mt-4 overflow-hidden">
            <div className="flex justify-center mt-4">
                <img
                    className="h-24 w-24 rounded-full object-cover"
                    src={profile.image}
                    alt="Profile"
                />
            </div>
            <div className="text-center mt-4">
                <h2 className="text-xl font-semibold text-gray-800">{profile.name}</h2>

                <h3 className='mt-2 text-start ml-2 font-semibold'>YOP</h3>
                <p className=" text-gray-600 text-left ml-2">{profile.batchYear}</p>

                <h3 className='mt-2 text-start ml-2 font-semibold'>Domain </h3>
                <p className=" text-gray-600 text-left ml-2">{profile.domain}</p>

                <h3 className='mt-2 text-start ml-2 font-semibold'>Achievements</h3>
                <p className=" text-gray-600 text-left ml-2">{profile.achievements}</p>

                <h3 className='mt-2 text-start ml-2 font-semibold'>industry</h3>
                <p className=" text-gray-600 text-left ml-2">{profile.industry}</p>

                <div className="flex justify-center mt-4">
                    <a href={profile.github} className="mx-2 text-gray-600 hover:text-gray-800">
                        <svg fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 1 .1-.7.3-1 .5-1.2-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3 0 0 1-.3 3.3 1.2.9-.2 1.8-.3 2.8-.3s1.9.1 2.8.3c2.3-1.5 3.3-1.2 3.3-1.2.6 1.5.2 2.7.1 3 .7.8 1.2 2 1.2 3.3 0 4.6-2.8 5.6-5.5 5.9.3.3.6.8.6 1.5v2.2c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4 0-6.6-5.4-12-12-12z" />
                        </svg>
                    </a>
                    <a href={profile.linkedin} className="mx-2 text-gray-600 hover:text-gray-800">
                        <svg fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11.7 20h-2.7v-8h2.7v8zm-1.3-9.1c-.9 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7-.8 1.7-1.7 1.7zm12.7 9.1h-2.7v-4.3c0-1.1 0-2.5-1.6-2.5s-1.8 1.2-1.8 2.5v4.3h-2.7v-8h2.6v1.1h.1c.4-.8 1.3-1.6 2.7-1.6 2.9 0 3.4 1.9 3.4 4.4v4.1z" />
                        </svg>
                    </a>
                </div>
                <p className="mt-4 text-gray-600 px-4">{profile.about}</p>
            </div>
        </div>
    );
}

export default ProfileCard;
