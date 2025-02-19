import React from "react";
export default function Footer() {
    return (
        <div className="bg-[#120b38] text-white  mt-8">


            <div className=" flex justify-between text-sm  p-8">
                <div className="">
                    <h3 className="font-semibold text-xl" >About Us</h3>
                    <ul>
                        <li><a href="#">About Company</a></li>
                        <li><a href="#">Board Of Directors</a></li>
                    </ul>
                    <br />

                    <h3 className="font-semibold text-xl" >Product & Services</h3>
                    <ul>
                        <li><a href="#">Gold Loan</a></li>
                        <li><a href="#">Vehicle Loan</a></li>
                        <li><a href="#">SME Loan</a></li>
                        <li><a href="#">Micro Finance</a></li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="font-semibold text-xl" >Investors</h3>
                    <ul>
                        <li><a href="#">Annual Reports</a></li>
                        <li><a href="#">Announcement</a></li>
                        <li><a href="#">Investor Contract</a></li>
                        <li><a href="#">Public Disclosure</a></li>
                        <li><a href="#">Form for TDS On Dividend</a></li>
                        <li><a href="#">Unpaid Dividend</a></li>
                        <li><a href="#">Appointment Order -ID</a></li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="font-semibold text-xl" >Online Services</h3>
                    <ul>
                        <li><a href="#">Pay Online</a></li>
                        <li><a href="#">Gold OverDraft</a></li>
                        <li><a href="#">Submit 15G/H</a></li>
                        <li><a href="#">NACH Cancellation</a></li>
                    </ul>
                    <br />
                    <h3 className="font-semibold text-xl" >CSR</h3>
                    <ul>
                        <li><a href="#">CSR Committees</a></li>
                        <li><a href="#">Approved CSR Policy</a></li>
                        <li><a href="#">CSR Project 2020-21</a></li>
                        <li><a href="#">Ongoing Projects 21-22</a></li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="font-semibold text-xl" >Policies</h3>
                    <ul>
                        <li><a href="#">Alm Policy</a></li>
                        <li><a href="#">CSR Policy</a></li>
                        <li><a href="#">Loan Policy</a></li>
                        <li><a href="#">Introduction-KYC Policy</a></li>
                        <li><a href="#">Moratorium Policy</a></li>
                        <li><a href="#">Interest Rate Policy</a></li>
                        <li><a href="#">Co-lending policy</a></li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="font-semibold text-xl" >Contact Us</h3>
                    <p>Yogakshemam Loans Ltd<br />3rd Floor, Ottappath Tower,<br />Aswini Junction, Thiruvambady-PO,
                        Thrissur, <br />Kerala-680022</p><br />
                    <p>Phone - 0487 2320102/103</p>
                    <p>Email ID: <a href="mailto:mail@yogloans.com">mail@yogloans.com</a></p>

                    <h3 className="font-semibold text-xl pb-4" >Follow us on</h3>
                    <div className=" flex gap-4" > 
                        <a href="#"><img src="/facebook.svg" alt="Facebook" /></a>
                        <a href="#"><img src="/twitter.svg" alt="Twitter" /></a>
                        <a href="#"><img src="/linked in.svg" alt="LinkedIn" /></a>
                        <a href="#"><img src="/youtube.svg" alt="YouTube" /></a>
                        <a href="#"><img src="/instagram.svg" alt="Instagram" /></a>
                    </div>
                </div>
                

            </div>
            <hr />
                <div className="flex justify-between p-4">
                    <p>© 2021 Yogakshemam Loans Ltd. All Rights Reserved</p>
                    <p>Privacy | Sitemap</p>
                </div>
        </div>
            )
}
