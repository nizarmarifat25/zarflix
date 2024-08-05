"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const NavbarContainer = styled.nav<{
  isFixed: boolean;
  isTransparent: boolean;
}>`
  background-color: ${({ isTransparent }) =>
    isTransparent ? "rgba(51, 51, 51, 0)" : "rgba(51, 51, 51, 0.5)"};
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: red;
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: ${({ isFixed }) => (isFixed ? "blur(8px)" : "none")};
  box-shadow: ${({ isFixed }) =>
    isFixed ? "0 2px 5px rgba(0, 0, 0, 0.3)" : "none"};
`;

interface MenuProps {
  isOpen: boolean;
}

const Menu = styled.ul<MenuProps>`
  list-style: none;
  display: flex;
  gap: 1rem;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "auto")};
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 1)};

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: rgba(51, 51, 51, 0.9);
    padding: 1rem 0;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  }
`;

const MenuItem = styled.li`
  color: white;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  &:hover {
    color: #ff4d4d;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: red;
    margin-bottom: 4px;
    border-radius: 5px;
    transition: all 0.3s ease;
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
      setIsTransparent(false);
    } else {
      setIsFixed(false);
      setIsTransparent(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <NavbarContainer isFixed={isFixed} isTransparent={isTransparent}>
      <Link href="/" passHref>
        <Image
          src="/images/logo.png"
          alt="logo"
          layout="intrinsic"
          width={200}
          height={200}
        />
      </Link>
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
};

export default Navbar;
