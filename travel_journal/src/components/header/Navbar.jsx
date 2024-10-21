import React from "react";
import { Link } from "react-router-dom";

const Navbar=() =>{
    return(
        <div className="flex justify-around bg-slate-300">
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <ul className="flex items-center gap-6 py-5">
                    <Link to="/home"><li>Home</li></Link>
                    <Link to="/explore"><li>Explore</li></Link>
                    <Link to="/experiences"><li>Experiences</li></Link>
                    <Link to="/top_visited"><li>Most Visited Places</li></Link>
                    
                </ul>
            </div>
            <div>
                <Link to="/login"><button>Login</button></Link>
                
            </div>
        </div>
    );
};

export default Navbar;