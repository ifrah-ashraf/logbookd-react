import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { ConnectKitButton } from "connectkit";

function Navbar() {
  return (
    <div className="navbar  bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          LogBookd
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="text-lg font-semibold btn btn-ghost hover:bg-gray-200 dark:hover:bg-gray-700">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton></UserButton>
              <li className="text-lg font-semibold btn btn-ghost hover:bg-gray-200 dark:hover:bg-gray-700">
                <ConnectKitButton />
              </li>
            </SignedIn>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
