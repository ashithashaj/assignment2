"use client"
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="header px-4 pt-2">
            {/* Contact & Social Media Section */}
            <div className="hidden md:flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img src="/phone.svg" alt="contact-info" height="10" /> 0487-2320102, 2320103<span>|</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="whatsapp logo" className="w-6" /> Whatsapp
                </div>
                <div className="flex items-center gap-4">
                    <span>Follow Us on:</span>
                    <img src="/facebook (1).svg" alt="facebookLog" height="20" />
                    <img src="/twitter(1).svg" alt="twitter Logo" height="20" />
                    <img src="/linkedin(1).svg" alt="linkedin Logo" height="20" />
                    <img src="/youtube (1).svg" alt="Youtube Logo" height="20" />
                    <img src="/instagram(1).svg" alt="instagram Logo" height="20" />
                    <span>|</span>
                    <img src="/help-icon-19.jpg" alt="help" className="w-6" /> Help
                    <span>|</span>
                    <select className="language-selector">
                        <option value="">🌍 Select Language</option>
                    </select>
                </div>
            </div>

            {/* Separator Line */}
            <div className="h-[1px] bg-black mt-4 hidden md:block"></div>

            {/* Navigation Section */}
            <section id="header" className="pt-6">
                <nav className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="logo">
                        <img src="/logo 31-7-18@2x.png" alt="YogLoans Logo" className="w-32" />
                    </div>
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        <li><a className="about" href="#">About us</a></li>
                        <li><a className="about" href="#">Product & Services</a></li>
                        <li><a className="about" href="#">Investors</a></li>
                        <li><a className="about" href="#">Online Services</a></li>
                        <li><a className="about" href="#">CRS</a></li>
                        <li><a className="about" href="#">Contact Us</a></li>
                    </ul>
                    <button className="hidden md:block bg-[#002FEB] px-4 py-1.5 rounded-lg text-white">Login</button>
                    
                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {menuOpen && (
                    <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full p-4 z-10">
                        <ul className="flex flex-col gap-4 text-center">
                            <li><a className="about" href="#">About us</a></li>
                            <li><a className="about" href="#">Product & Services</a></li>
                            <li><a className="about" href="#">Investors</a></li>
                            <li><a className="about" href="#">Online Services</a></li>
                            <li><a className="about" href="#">CRS</a></li>
                            <li><a className="about" href="#">Contact Us</a></li>
                            <button className="bg-[#002FEB] px-4 py-1.5 rounded-lg text-white w-full">Login</button>
                        </ul>
                    </div>
                )}
            </section>
            
            {/* Bottom Separator */}
            <div className="h-[4px] bg-[#841414] mt-4"></div>
        </div>
    );
}
