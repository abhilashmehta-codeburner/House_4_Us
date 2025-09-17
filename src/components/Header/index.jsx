'use client';
import React, { useState } from 'react';
import Nav from '@/components/Header/Nav';
import MobileNav from '@/components/Header/MobileNav';
import FilterBar from '@/components/Header/Filter';
import LoginModal from '@/components/LoginModel/Model';

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState('');

  const NAVBAR_HEIGHT = 64;
  const FILTERBAR_HEIGHT = 56;

  return (
    <div className='w-full'>
      {/* Navbar */}
      <div className='fixed top-0 left-0 right-0 z-[1000] bg-white shadow-md'>
        <Nav
          openNav={() => setShowNav(true)}
          openLogin={() => setShowLogin(true)}
          userName={userName}
        />
        <MobileNav
          showNav={showNav}
          closeNav={() => setShowNav(false)}
          openLogin={() => setShowLogin(true)}
          userName={userName}
        />

        {/* ✅ FIXED: Pass onLoginSuccess instead of setUserName */}
        <LoginModal
          open={showLogin}
          onClose={() => setShowLogin(false)}
          onLoginSuccess={(name) => setUserName(name)}
        />
      </div>

      {/* Filter Bar */}
      <div
        className='fixed left-0 right-0 z-[900]'
        style={{ top: `${NAVBAR_HEIGHT}px` }}
      >
        <FilterBar />
      </div>

      {/* Spacer */}
      <div style={{ height: `${NAVBAR_HEIGHT + FILTERBAR_HEIGHT}px` }} />
    </div>
  );
};

export default ResponsiveNav;
