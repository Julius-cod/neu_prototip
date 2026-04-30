import Home from "./pages/Home"
{/*import  ShopCard  from "./pages/fone/ShopCard"; */}
import Samorai from "./pages/treino/Samorai";
import KronosPage from "./pages/kronos/KronosPage";
import CoffePage from "./pages/coffe/CoffePage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [minimized, setMinimized] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">

        {/* NAV */}
        <nav className="absolute top-6 flex gap-6 text-white">
          <Link to="/">Home</Link>
          <Link to="/samorai">Samorai</Link>
          <Link to="/kronos">Kronos</Link>
          <Link to="/coffe">Coffe</Link>
        </nav>

        {/* CARD */}
        <div className={`transition-all duration-300 
          ${minimized ? "h-14 w-72" : "h-[800px] w-[1300px]"} 
          rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl`}>

          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/20 text-white">
            <span className="text-sm">My App</span>

            <button
              onClick={() => setMinimized(!minimized)}
              className="hover:scale-110 transition"
            >
              {minimized ? "🔼" : "🔽"}
            </button>
          </div>

          {/* CONTENT */}
          {!minimized && (
            <div className="p-4 text-white h-full overflow-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/samorai" element={<Samorai />} />
                <Route path="/kronos" element={<KronosPage />} />
                <Route path="/coffe" element={<CoffePage />} />
              </Routes>
            </div>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

