import React from "react";
export default function Videos() {

    return(

        <div className="text-center py-8">
            <h2 className="text-3xl font-semibold" >What Our Customers Have  To Say </h2>
                <p className="pt-4 text-[17px]">Hear from our satisfied customers from around the global</p>
                
                    
                <div className="flex justify-between items-center gap-4 pt-8 px-8">
                    <div className="arrow">
                        <img src="/bluearrow.svg" alt="" className="rotate-180"/>
                    </div>
                    <div className="testimonials-card">
                        <div className="">
                          <div>
                            <img src="/internvdo1.png" className="card-img-top m-auto" alt="..."
                            />
                          </div>
                          <div className="">
                            <h5 className="font-medium text-lg">PR Sreejesh</h5>
                            <p className="testimonial-card-p">Loan Against Property customer, Thrissur - Kerala State</p>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials-card">
                        <div className="">
                          <div className="">
                            <img src="/internvdo2.png" className="card-img-top m-auto" alt="..."
                            />
                          </div>
                          <div className="">
                            <h5 className="font-medium text-lg">Sri Rajarajeshwara</h5>
                            <p className="testimonial-card-p">loan Against Property customer, Andhra - Telangana State</p>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials-card">
                        <div className="">
                          <div>
                            <img src="/internvdo3.png" className="card-img-top m-auto" alt="..."
                           />
                          </div>
                          <div className="">
                            <h5 className="font-medium text-lg">K Malikarjuna</h5>
                            <p className="testimonial-card-p">Loan Against Property customer, Andhra - Telangana State</p>
                          </div>

                        </div>
                        
                      </div>
                      <div className="arrow">
                        <img src="/bluearrow.svg" alt=""/>
                    </div>
                </div>
                
        </div>
    )
}
