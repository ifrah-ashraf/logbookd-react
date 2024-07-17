import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar  bg-white dark:bg-gray-800 text-black dark:text-white">
            <div className="flex-1">
                <Link 
                to="/"
                className="btn btn-ghost text-xl">
                LogBookd
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-lg font-semibold btn btn-ghost hover:bg-gray-200 dark:hover:bg-gray-700'><Link
                        to="signin"
                    >SignIn
                    </Link>
                    </li>
                    <li className='text-lg font-semibold btn btn-ghost hover:bg-gray-200 dark:hover:bg-gray-700'>
                        <Link
                        to="check"
                    >check</Link></li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar;