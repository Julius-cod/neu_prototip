import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
 import { TiSocialInstagram } from "react-icons/ti";
 
 
export default function Topbar()
{
    return (
        <div> 
            <div className="flex flex-row items-center justify-between h-10 px-10 bg-black/90 border-b border-gray-700">

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                       <IoLocationOutline  className="text-yellow-400"/>
                           <span className="text-sm text-gray-300">123 Main Street, Cityville</span>
                     </div> 
                     <div className="flex items-center gap-2">
                         <MdOutlineMailOutline className="text-yellow-400"/>
                        <span className="text-sm text-gray-300">info@salon.com</span>
                    </div>
                </div>

                 {/* Social media icons */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-2" >
                        <SlSocialFacebook className="text-yellow-400"/>
                        <SlSocialTwitter className="text-yellow-400"/>
                        <SlSocialYoutube className="text-yellow-400"/> 
                        <TiSocialInstagram className="text-yellow-400"/>
                    </div>

                    <h1 className="text-red-400 font-bold">Book Now</h1>
                </div>
            </div>
        </div>
    );
}