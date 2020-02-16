// src/components/NavBar.js
import React from "react";
import {useAuth0} from "../react-auth0-spa";
import {Link} from "react-router-dom";
import navImage from "../images/stonks-up.svg";

const NavBar = () => {
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

    return (
        <div className="flex items-center justify-between flex-wrap bg-green-400 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img className="fill-current h-8 w-8 mr-2" width="54" height="54" src={navImage} alt="Stock Tracker Brand" />
                <span className="font-semibold text-xl tracking-tight">Stock Tracker</span>
            </div>
                
            <div className="w-full block flex-grow lg:flex lg:w-auto">
                {isAuthenticated && (
                    <div className="text-lg">
                        <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white ml-4" to="/">Home</Link>&nbsp;
                        <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white ml-4" to="/profile">Profile</Link>
                    </div>
                )}
            </div>
            <div>
                <div className="w-full block flex-grow lg:flex lg:w-auto">
                    <div className="text-lg">
                        <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white ml-4" to="/about">About</Link>&nbsp;
                        <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white ml-4 pr-4" to="/contact">Contact</Link>&nbsp;
                    </div>
                

                    {!isAuthenticated && (
                        <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                                onClick={() => loginWithRedirect({})}>Log in</button>
                    )}

                    {isAuthenticated && <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" 
                                                onClick={() => logout()}>Log out</button>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;