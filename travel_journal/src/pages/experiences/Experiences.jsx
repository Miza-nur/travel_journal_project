


const Experiences =()=>{

    const imgp="https://i.ibb.co.com/LkwS8kW/img-3.webp";
    const img4="https://i.ibb.co.com/0r8Vd0G/img4.webp";
    const img5="https://i.ibb.co.com/9bLxQCy/img5.webp";
    const img6="https://i.ibb.co.com/hH5RfN5/img6.webp";
    const img7="https://i.ibb.co.com/hYfY3v8/img7.webp";

    return(
        
            <div className="mb-5">
{/* Profile Container */}
    
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-10 p-6">
       {/* Header Section */}
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800">User Profile</h2>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Update Profile
            </button>
        </div>

        {/* Profile Content */}
        <div className="mt-6 flex items-start space-x-8">
            {/* Left Column (Profile Picture */}
            <div className="w-1/4">
                <img src={imgp} alt="Profile Picture" className="w-full h-auto rounded-full shadow-lg"></img>
                <button className="mt-4 bg-gray-200 text-gray-700 w-full py-2 rounded-md hover:bg-gray-300">
                    Change Picture
                </button>
            </div>

            {/* Right Column (User Details) */}
            <div className="w-3/4">
               {/* User Info */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">User Details</h3>
                    <p className="text-gray-600">Name: <span className="font-medium">John Doe</span></p>
                    <p className="text-gray-600">Email: <span className="font-medium">johndoe@example.com</span></p>
                    <p className="text-gray-600">Location: <span className="font-medium">Dhaka, Bangladesh</span></p>
                </div>

                {/* Blogging Details */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">Blogging Details</h3>
                    <p className="text-gray-600">Total Blog Posts: <span className="font-medium">15</span></p>
                    <p className="text-gray-600">Most Recent Post: <span className="font-medium">Exploring the Sundarbans</span></p>
                </div>

               {/* Friend List */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">Friends</h3>
                    <div className="flex space-x-4">
                        <img src={img4} alt="Friend" className="w-12 h-12 rounded-full"></img>
                        <img src={img5} alt="Friend" className="w-12 h-12 rounded-full"></img>
                        <img src={img6} alt="Friend" className="w-12 h-12 rounded-full"></img>
                        <img src={img7} alt="Friend" className="w-12 h-12 rounded-full"></img>
                    </div>
                </div>

                {/* Wishlist Section */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">Travel Wishlist</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Paris, France</li>
                        <li>Tokyo, Japan</li>
                        <li>Rome, Italy</li>
                    </ul>
                </div>

                {/* Settings Section */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">Settings</h3>
                    <button className="mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
                        Account Settings
                    </button>
                    <button className="mt-2 ml-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </div>

</div>


    )
}

export default Experiences;