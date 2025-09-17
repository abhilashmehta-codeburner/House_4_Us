'use client';
import React, { useState } from 'react';
import Nav from '@/components/Header/Nav';
import MobileNav from '@/components/Header/MobileNav';
import LoginModal from '@/components/LoginModel/Model';

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <>
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

      <LoginModal
        open={showLogin}
        onClose={() => setShowLogin(false)}
        onLoginSuccess={(name) => setUserName(name)} // ✅ updates greeting
      />
    </>
  );
};

export default ResponsiveNav;
