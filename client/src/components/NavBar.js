// src/components/NavBar.js
import React from "react";
import {useAuth0} from "../react-auth0-spa";
import {Link} from "react-router-dom";

const NavBar = () => {
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

    return (
        <div className="flex items-center justify-between flex-wrap bg-green-400 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                <span className="font-semibold text-xl tracking-tight">Stock Tracker</span>
            </div>
                
            <div className="w-full block flex-grow lg:flex lg:w-auto">
                {isAuthenticated && (
                    <div className="text-lg">
                        <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-4" to="/">Home</Link>&nbsp;
                        <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-4" to="/profile">Profile</Link>
                    </div>
                )}
            </div>
            <div>
                {!isAuthenticated && (
                    <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                            onClick={() => loginWithRedirect({})}>Log in</button>
                )}

                {isAuthenticated && <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" 
                                            onClick={() => logout()}>Log out</button>}
            </div>
        </div>
    );
};

export default NavBar;