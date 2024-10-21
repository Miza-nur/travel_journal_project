import React from "react";

const Navbar=() =>{
    return(
        <div className="flex justify-around bg-slate-300">
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <ul className="flex items-center gap-6 py-5">
                <li>Home</li>
                <li>Explore</li>
                <li>Experiences</li>
                <li>Most Visited Places</li>
                </ul>
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    );
};

export default Navbar;