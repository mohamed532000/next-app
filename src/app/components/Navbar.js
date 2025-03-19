"use client"
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
export default function MainNavbar() {
  const [isScroll , setIsScroll] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      window.scrollY >= 10 ? setIsScroll(true) : setIsScroll(false)
    }
  } , [])
    return (
        <>
          <Navbar fluid rounded className={`${isScroll ? "fixed" : "relative"} w-full z-40`} >
            <Navbar.Brand href="https://flowbite.com/">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Flowbite
              </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Link href="/">
                Home
              </Link>
              <Link href="/about">About</Link>
            </Navbar.Collapse>
          </Navbar>
        </>
    )
}