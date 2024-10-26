import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdTour } from "react-icons/md";

const Navbar=() =>{
    return(
        <div className="flex justify-between bg-gradient-to-r from-indigo-500 to bg-emerald-500">
            <div className="ml-7">
                <h1 className="font-4xl font-bold py-5 text-orange-500 ">Travel</h1>
            </div>
            <div className="text-center">
                <ul className="flex items-center gap-6 py-5 ">
                    <Link to="/home"><li className="active inline-block"><FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome><span className="hidden md:inline-block">Home</span></li>
                    </Link>

                    <Link to="/explore"><li className="active inline-block"><FaSearch className="inline-block w-6 h-6 mr-2 -mt-2"></FaSearch><span className="hidden md:inline-block">Explore</span></li></Link>

                    <Link to="/experiences"><li className="active inline-block"><FaUser className="inline-block w-6 h-6 mr-2 -mt-2"></FaUser><span className="hidden md:inline-block">Profile</span></li></Link>

                    <Link to="/top_visited"><li className="active inline-block"><MdTour className="inline-block w-6 h-6 mr-2 -mt-2"></MdTour><span className="hidden md:inline-block">Most Visited Places</span></li></Link>
                    
                </ul>
            </div>
            <div className="py-2 mr-7">
                <Link to="/login"><button className="py-2 px-8 border border-blue-400 bg-red-200 rounded-full">Login</button></Link>
                
            </div>
        </div>
    );
};

export default Navbar;