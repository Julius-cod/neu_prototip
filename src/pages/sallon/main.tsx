import Hero from "./Hero";
import Navbar from "./Navbar";
import Topbar from "./Topbar";





export default function MainPage()
{
    return(
        <div>
            <Topbar/>
            <Navbar/>
            <Hero/>
        </div>
    );
}