import { Outlet } from "react-router";
import Header from "../Components/Header";
import { BackgroundBeams } from "../components/ui/beams";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950">
      {/* Beam background - stays behind everything */}
      <BackgroundBeams />

      {/* Actual page content - above the beams */}
      <div className="relative z-10 min-h-screen text-white">
        <Header />
        <Outlet />
        <footer>
          <p className="text-center text-xs text-gray-400">
            Nakib 360 All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;