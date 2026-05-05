import logo from "../../assets/logo.png";

export default function Navbar()
{
    return (
        <div> 
            <div className="flex items-center justify-between h-16 px-10 bg-black/90 shadow-md">
            <div  className="flex flex-row items-center gap-2">   
                <div>
                    <img src={logo} alt="Logo" className=" w-20 h-20" />
                </div>
                <h1 className="text-2xl font-bold text-white">Neu Spa Beauty</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-300 font-semibold hover:text-yellow-400 transition-colors duration-300">Home</a>
                <a href="#" className="text-gray-300 font-semibold hover:text-yellow-400 transition-colors duration-300">Services</a>
                <a href="#" className="text-gray-300 font-semibold hover:text-yellow-400 transition-colors duration-300">About Us</a>
                <a href="#" className="text-gray-300 font-semibold hover:text-yellow-400 transition-colors duration-300">Gallery</a>
                <a href="#" className="text-gray-300 font-semibold hover:text-yellow-400 transition-colors duration-300">Contact</a>
            </div>
            </div>
        </div>
    );
}