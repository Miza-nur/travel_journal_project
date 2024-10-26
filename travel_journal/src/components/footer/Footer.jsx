import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMailFast } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
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
                        <li><FaMapMarkerAlt className="inline-block w-6 h-6 mr-2 -mt-2"></FaMapMarkerAlt>1234 Street, City, Country</li>
                        <li><FaPhoneAlt className="inline-block w-6 h-6 mr-2 -mt-2"></FaPhoneAlt>+123 456 7890</li>
                        <li><TbMailFast className="inline-block w-6 h-6 mr-2 -mt-2"></TbMailFast>contact@traveljournal.com</li>
                    </ul>
                </div>

                
                <div>
                    <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4 text-gray-400">
                        <a href="#" className="hover:text-white"><FaFacebook className="inline-block w-6 h-6 mr-2 -mt-2"></FaFacebook></a>
                        <a href="#" className="hover:text-white"><FaTwitter className="inline-block w-6 h-6 mr-2 -mt-2"></FaTwitter></a>
                        <a href="#" className="hover:text-white"><FaInstagramSquare className="inline-block w-6 h-6 mr-2 -mt-2"></FaInstagramSquare></a>
                        <a href="#" className="hover:text-white"><FaLinkedin className="inline-block w-6 h-6 mr-2 -mt-2"></FaLinkedin></a>
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