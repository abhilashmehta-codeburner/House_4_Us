'use client';
import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';
import FilterBar from './Filter';

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  // Adjust this to match your actual navbar height (in px)
  const NAVBAR_HEIGHT = 64;
  // Adjust this to match your FilterBar height (in px)
  const FILTERBAR_HEIGHT = 56;

  return (
    <div className='w-full'>
      {/* Navbar (fixed top) */}
      <div className='fixed top-0 left-0 right-0 z-[1000] bg-white shadow-md'>
        <Nav openNav={openNavHandler} />
        <MobileNav
          showNav={showNav}
          closeNav={closeNavHandler}
        />
      </div>

      {/* Filter Bar (fixed below navbar) */}
      <div
        className='fixed left-0 right-0 z-[900]'
        style={{ top: `${NAVBAR_HEIGHT}px` }}
      >
        <FilterBar />
      </div>

      {/* Spacer so content isn't hidden behind Nav + Filter */}
      <div
        style={{
          height: `${NAVBAR_HEIGHT + FILTERBAR_HEIGHT}px`,
        }}
      />
    </div>
  );
};

export default ResponsiveNav;
