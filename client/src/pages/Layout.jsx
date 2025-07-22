import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Menu, X } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { useUser,SignIn } from '@clerk/clerk-react';

function Layout() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const {user}=useUser();

  return user ?(
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200">
        <img
          src={assets.logo}
          alt="Logo"
          className="cursor-pointer"
          onClick={() => navigate('/')}
        />
        {sidebar ? (
          <X onClick={() => setSidebar(false)} className="w-6 h-6 text-gray-600 sm:hidden" />
        ) : (
          <Menu onClick={() => setSidebar(true)} className="w-6 h-6 text-gray-600 sm:hidden" />
        )}
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

        {/* Main Page Content */}
        <div className="flex-1 overflow-y-auto bg-[#F4F7FB] p-4">
          <Outlet />
        </div>
      </div>
    </div>
  ) :(
    <div className='flex items-center justify-center h-screen'>
      <SignIn/>
    </div>
  );
}

export default Layout;
