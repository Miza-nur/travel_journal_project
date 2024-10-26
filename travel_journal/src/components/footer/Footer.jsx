
const Footer=() =>{
    return(
        <div>
            <footer className="bg-gray-800 text-gray-200 py-10">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                
                <div>
                    <h2 className="text-xl font-semibold mb-4">About Us</h2>
                    <p className="text-sm text-gray-400">
                        We are a travel company dedicated to helping you explore the world. Our mission is to make your travel planning as seamless and enjoyable as possible.
                    </p>
                </div>

                
                <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul className="text-sm text-gray-400 space-y-2">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">Destinations</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                        <li><a href="#" className="hover:text-white">Contact Us</a></li>
                        <li><a href="#" className="hover:text-white">FAQs</a></li>
                    </ul>
                </div>

               
                <div>
                    <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
                    <ul className="text-sm text-gray-400 space-y-2">
                        <li><i data-feather="map-pin" className="inline mr-2"></i>1234 Street, City, Country</li>
                        <li><i data-feather="phone" className="inline mr-2"></i>+123 456 7890</li>
                        <li><i data-feather="mail" className="inline mr-2"></i>contact@traveljournal.com</li>
                    </ul>
                </div>

                
                <div>
                    <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4 text-gray-400">
                        <a href="#" className="hover:text-white"><i data-feather="facebook" className="w-6 h-6"></i></a>
                        <a href="#" className="hover:text-white"><i data-feather="twitter" className="w-6 h-6"></i></a>
                        <a href="#" className="hover:text-white"><i data-feather="instagram" className="w-6 h-6"></i></a>
                        <a href="#" className="hover:text-white"><i data-feather="linkedin" className="w-6 h-6"></i></a>
                    </div>
                </div>
            </div>

            
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                &copy; 2024 Travel Journal. All rights reserved.
            </div>
        </div>
    </footer>


        </div>
    )
}

export default Footer