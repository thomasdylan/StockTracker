import React from 'react';

import levels from '../images/levels.svg';
import sua from '../images/sign-up-account.svg';
import pow from '../images/pop-out-window.svg';
import myApp from '../images/app.gif'

export default function Landing() {
    return (
        <div>
            <div className="flex flex-row bg-yellow-100">
                <div className="w-1/2 mt-4 mb-4 mr-auto ml-12 px-6 py-4 bg-white shadow-lg rounded-lg overflow-hidden">
                    <h1 className="ml-4 text-left font-bold">An Easy Way to View Your Stocks</h1>
                    <p className="ml-4 mr-4 text-justify">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Praesent auctor ligula eget elementum viverra. Integer mollis lacus in scelerisque lobortis.
                       Nullam condimentum felis eros, et rutrum nunc efficitur id.
                       Sed at odio in lorem dapibus porta in nec est.
                       Proin imperdiet odio sit amet mattis tempor.
                       Aliquam quis sodales leo, elementum finibus enim.
                       Ut venenatis elit nec vestibulum commodo.
                       Phasellus a nunc ac lectus pulvinar semper ut sed ex.
                       Integer et venenatis ligula. Nulla a eros sed velit accumsan ultricies.
                       Praesent id mauris efficitur lectus luctus volutpat.
                       Mauris vehicula augue sapien, nec consequat purus condimentum vel.
                       Mauris id accumsan leo, sed elementum sem.
                    </p>
                </div>

                <div className="max-w-sm mt-4 mb-4 ml-auto px-6 py-4 h-24 w-24 bg-green-200 text-teal-400 shadow-lg rounded-full border-none overflow-hidden"></div>

                <div className="w-1/4 mt-4 mb-4 ml-auto mr-12 px-6 py-4 bg-white shadow-lg rounded-lg overflow-hidden">
                    <img className="m-auto bg-gray-200" src={myApp} alt=""></img>
                </div>
            </div>

            <div className="flex flex-row justify-center bg-yellow-400">
                <h1 className="text-white font-bold text-justify-center text-5xl mb-4"> Get Started In 3 Easy Steps!</h1>
            </div>

            <div className="flex flex-row mx-auto justify-center bg-yellow-400 leading-loose">
                <div className="w-1/4 m-6 mt-4 mb-4 px-6 py-4 bg-white shadow-lg rounded-lg overflow-hidden">
                    <img className="fill-current h-32 w-32 mb-3 mx-auto" width="32" height="32" src={sua} alt="Sign Up Account" />
                    <h2 className="font-bold">1. Create an Account</h2>
                    <p className="text-justify-center">Stock Tracker is free to use.</p>
                </div>

                <div className="w-1/4 m-6 mt-4 mb-4 px-6 py-4 bg-white shadow-lg rounded-lg overflow-hidden">
                    <img className="fill-current h-32 w-32 mb-3 mx-auto" width="32" height="32" src={levels} alt="Add Stocks Level" />
                    <h2 className="font-bold">2. Customize Your Stocks</h2>
                    <p className="text-justify-center">Add the stocks you wish to track.</p>
                </div>

                <div className="w-1/4 m-6 mt-4 mb-4 px-6 py-4 bg-white shadow-lg rounded-lg overflow-hidden">
                    <img className="fill-current h-32 w-32 mb-3 mx-auto" width="32" height="32" src={pow} alt="Pop Out Window" />
                    <h2 className="font-bold">3. Create Pop Out Window</h2>
                    <p className="text-justify-center">Create your real time stock ticker.</p>
                </div>
            </div>
        </div>
    )
}
