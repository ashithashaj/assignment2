import React from "react";
export default function Services() {
    return (
        <div className="py-4 text-center">
            <h2 className="text-3xl font-bold pb-4">
                Service We Provide</h2>
            <div className="container flex justify-center items-center gap-4 mt-4">
                <div className="card">
                    <div><img src="/noun-gold-2195242 (1).svg" alt="" /></div>
                    <div className="text">Gold Loan</div>
                </div>
                <div className="card">
                    <div><img src="/noun-car-loan-4379467.svg" alt="" /></div>
                    <div className="text">Vehicle Loan</div>
                </div>
                <div className="card">
                    <div><img src="/noun-loan-5846560.svg" alt="" /></div>
                    <div className="icon"><i className="fas fa-hand-holding-usd"></i></div>
                    <div className="text">SME Loan</div>
                </div>
                <div className="card">
                    <div><img src="/noun-startup-38246.svg" alt="" /></div>
                    <div className="icon"><i className="fas fa-seedling"></i></div>
                    <div className="text">Micro Finance</div>
                </div>
            </div>
        </div>

    )
}