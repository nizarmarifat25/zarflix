"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav<{ isFixed: boolean; isTransparent: boolean }>`
  background-color: ${({ isTransparent }) => (isTransparent ? 'rgba(51, 51, 51, 0.1)' : 'rgba(51, 51, 51, 0.5)')}; /* Adjust transparency based on scroll position */
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: red; /* Red font color */
  transition: all 0.3s ease; /* Smooth transition for fixed position and padding */
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: ${({ isFixed }) => (isFixed ? 'blur(8px)' : 'none')}; /* Apply blur effect when fixed */
  box-shadow: ${({ isFixed }) => (isFixed ? '0 2px 5px rgba(0, 0, 0, 0.3)' : 'none')}; /* Add shadow when fixed */
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: red; /* Red font color */
`;

interface MenuProps {
  isOpen: boolean;
}

const Menu = styled.ul<MenuProps>`
  list-style: none;
  display: flex;
  gap: 1rem;
  transition: max-height 0.3s ease, opacity 0.3s ease; /* Smooth transition for menu */
  max-height: ${({ isOpen }) => (isOpen ? '300px' : 'auto')}; /* Adjust max-height */
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 1)}; /* Ensure menu items are visible */
  
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: rgba(51, 51, 51, 0.9); /* Slightly darker background */
    padding: 1rem 0;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')}; /* Adjust max-height */
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)}; /* Fade in/out effect */
  }
`;

const MenuItem = styled.li`
  color: white; /* White font color for better contrast */
  cursor: pointer;
  transition: color 0.3s ease; /* Smooth transition for hover effect */
  padding: 0.5rem 1rem; /* Padding for better spacing */
  &:hover {
    color: #ff4d4d; /* Slightly different red for hover effect */
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: red; /* Red color for hamburger icon */
    margin-bottom: 4px;
    border-radius: 5px;
    transition: all 0.3s ease; /* Smooth transition for hamburger lines */
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setIsFixed(true);
      setIsTransparent(false); // Background becomes less transparent
    } else {
      setIsFixed(false);
      setIsTransparent(true); // Background remains more transparent
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContainer isFixed={isFixed} isTransparent={isTransparent}>
      <Logo>Zarflix</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem>Movie</MenuItem>
        <MenuItem>Discover</MenuItem>
        <MenuItem>TV Shows</MenuItem>
      </Menu>
    </NavbarContainer>
  );
}

export default Navbar;
