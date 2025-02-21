import React from "react";
import HeroImage from "../assets/hero-image.jpg";

const Hero = () => {
    return (
        <div className="bg-black text-white text-center py-16">
            <img
                src={HeroImage}
                alt=""
                className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-4xl font-bold">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Muhammad Abduh Harry Malhotra</span>, Front-End Developer
            </h1>
            <p className="mt-4 text-lg text-gray-300">I build interactive and responsive front-end experiences using modern web technologies.</p>
            <div className="mt-8 space-x-4"></div>
        </div>
    );
};

export default Hero;
