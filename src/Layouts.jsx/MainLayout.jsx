import { Outlet } from "react-router";
import Header from "../Components/Header";

const MainLayout = () => {
  return (
    <div className="bg-linear-to-r from-[#211832] to-[#1e3a8a] min-h-screen text-white overflow-x-hidden">
      <Header/>
      <Outlet/>
      <footer>
        <p className="text-center text-xs text-gray-400">Nakib 360 All write resurved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;