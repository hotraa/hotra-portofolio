import React from "react";
import AboutImage from "../assets/aboutme-image.jpg";

const About = () => {
    return (
        <div className="bg-black text-white py-20" id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <img src={AboutImage} alt="" className="w-72 h-80 rounded object-cover mb-8 md:mb-0" />
                    <div className="flex-1">
                        <p className="text-lg mb-8">
                            I am a passionate Front-End Developer focused on building modern, responsive, and user-friendly web applications. With a strong foundation in front-end technologies, I
                            strive to create seamless and visually engaging user experiences.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">
                                    HTML & CSS
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div
                                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                                    ></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">
                                    React JS
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div
                                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-6/12"
                                    ></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">
                                    Bootstrap
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div
                                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-6/12"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
