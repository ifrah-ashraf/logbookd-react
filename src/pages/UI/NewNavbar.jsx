import { Link } from "react-router-dom"


function NewNavbar() {
    return (
        <div className="navbar bg-gray-800 text-white ">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Logbookd</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control text-black">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <button className="btn btn-ghost btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link
                                to="/editprofile"
                                className="justify-between text-black">
                                Edit Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li className="text-black"><a>Settings</a></li>
                        <li className="text-black"><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NewNavbar