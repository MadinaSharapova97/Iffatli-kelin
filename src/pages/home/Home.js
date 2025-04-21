import React from "react";
import heroImg from "../../assets/images/women2.jpg";


const Hero = () => {
    return (
        <>
            <div className="bg-cover bg-center bg-no-repeat bg-white"
                style={{ backgroundImage: `url(${heroImg})`, height:`calc(100vh - 85px)`  }}>
            
                <div className="relative z-10 flex items-center justify-center h-full text-center">
                    <div className="text-white px-4">
                        <h1 className="text-4xl md:text-6xl mb-6 text-[#ec3d79] custom-playfair uppercase">
                            Iffatli Kelin O'quv Markazi
                        </h1>
                    </div>
                </div>
            </div>
        </>





    );
};

export default Hero;
