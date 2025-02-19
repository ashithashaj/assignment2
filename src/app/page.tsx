import React from "react";
import Header from "@/components/header";
import Banner from "@/components/banner";
import Services from "@/components/services";
import Testimonial from "@/components/testimonial";
import Videos from "@/components/videos";
import { FAQ } from "@/components/faq";
import Footer from "@/components/footer";
export default function Home()
{
    return (
        <div>
            <Header />
            <Banner />
            <Services/>
            <Testimonial/>
            <Videos/>
            <FAQ/>
            <Footer/>
          
        </div>
    );
}
