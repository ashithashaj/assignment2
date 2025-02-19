import React from "react";

export default function Header()
{
    return (
        <div className="header px-4 pt-2 ">
            <div>
                <div className="flex justify-between">
                    <div className="flex justify-between items-center gap-4 ">

                        <img src="/phone.svg" alt="contact-info" height="10"  /> 0487-2320102,
                        2320103<span >|</span>

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
                            alt="whatsapp logo" className="w-6" /> Whatsapp

                    </div>
                    <div className="flex justify-between items-center gap-4">

                        <span>Follow Us on:</span>
                        <img src="/facebook (1).svg" alt="facebookLog" height="20" />
                        <img src="/twitter(1).svg" alt="twitter Logo" height="20" />

                        <img src="/linkedin(1).svg" alt="linked inLogo" height="20" />
                        <img src="/youtube (1).svg" alt="Youtube Logo" height="20" />
                        <img src="/instagram(1).svg" alt="instagram Logo" height="20"/>

                        <span>|</span>

                        <img src="/help-icon-19.jpg" alt="help" className="w-6" /> Help

                        <span >|</span>

                        <select className="language-selector">
                            <option value="">🌍 Select Language</option>
                        </select>
                        
                    </div>



                </div>
            </div>
            <div className="h-[1px] bg-black mt-4"></div>
            <section id="header">
            <div className="header pt-6" >
                <nav className="flex justify-between items-center" >
                        <div className="logo">
                            <img src="/logo 31-7-18@2x.png" alt="YogLoans Logo" className="w-32"/>
                        </div>
                        <ul className="flex justify-between items-center gap-8">
                            <li className=" nav-item">
                                <a className="about" href="#">About us</a>

                               
                            </li>

                            <li className=" nav-item">
                                <a className="about" href="#">Product & Services</a>

                                
                            </li>
                            <li className=" nav-item">
                                <a className="about" href="#">Investors</a>

                                
                            </li>
                            <li className=" nav-item">
                                <a className="about" href="#">Online Services</a>

                                
                            </li>
                            <li className=" nav-item">
                                <a className="about" href="#">CRS</a>
                            

                            
                            </li>
                            <li className=" nav-item">
                                <a className="about" href="#">Contact Us</a>
                                           
                                        </li>

                        </ul>
                        <button className="bg-[#002FEB] px-4 py-1.5 rounded-lg text-white" >Login</button>  
                                             
                </nav>
               
            </div>

         </section>
         <div className="h-[4px] bg-[#841414] mt-4"></div>
        </div>
    )
}