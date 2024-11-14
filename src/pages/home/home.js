import React, { useState, useEffect } from 'react';
import { ChevronRight, Play } from 'lucide-react';
import Product from './product';
import Mission from './mission';
import Post from './post';
import Event from './event';
import './home.css';

const landscapes = [
  { name: "குறிஞ்சி", description: "Mountain Region", color: "bg-purple-600", svgPath: "/assets/kurinji.svg" },
  { name: "முல்லை", description: "Forest Region", color: "bg-green-600", svgPath: "/assets/mulai.svg" },
  { name: "மருதம்", description: "Agricultural Land", color: "bg-emerald-600", svgPath: "/assets/marutham.svg" },
  { name: "நெய்தல்", description: "Coastal Region", color: "bg-blue-600", svgPath: "/assets/neithal.svg" },
  { name: "பாலை", description: "Desert Region", color: "bg-amber-600", svgPath: "/assets/palai.svg" }
];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleBoxes, setVisibleBoxes] = useState([0, 1]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const advanceSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % landscapes.length);
      setVisibleBoxes((prev) => {
        const nextIndex = (prev[1] + 1) % landscapes.length;
        return [prev[1], nextIndex];
      });
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setInterval(advanceSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full min-h-[120vh] bg-gray-900">
        <div className="relative z-10 w-full h-full p-12 flex flex-col">
          <div className="mt-32 mb-10 text-center">
            <h1 className="text-6xl font-semibold text-white mb-24">
              {landscapes[currentSlide].name}
            </h1>
          </div>

          <div className="flex-1 flex items-center">
            <div className="w-4/5">
              <h2 className="text-orange-400 text-3xl mb-12">Welcome to "Adelaide Tamil Association"</h2>
              <h3 className="text-5xl font-bold text-white mb-6">Improve your Communication</h3>
              <h3 className="text-5xl font-bold text-white mb-12">with Us</h3>
              <div className="flex gap-6">
                <button className="bg-orange-500 hover:bg-orange-600 text-2xl text-white px-8 py-4 rounded-lg flex items-center gap-2">
                  Get Started
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="text-orange-500 hover:text-orange-400 px-8 text-2xl py-4 rounded-lg flex items-center gap-2">
                  <Play className="w-10 h-10" />
                  Play Video
                </button>
              </div>
            </div>

            <div className="w-1/5 flex justify-end items-center gap-8 pr-1 relative">
              {visibleBoxes.map((boxIndex, idx) => (
                <div 
                  key={boxIndex}
                  className={`relative ${idx === 1 ? 'w-[300px] h-[400px]' : 'w-[350px] h-[450px]'} aspect-square transform transition-all duration-500 ${
                    isTransitioning && idx === 0 ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'
                  }`}
                  style={{ transitionDelay: idx === 1 ? '100ms' : '0ms', position: 'absolute', right: idx === 0 ? '320px' : '0' }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold mt-2">
                    {landscapes[boxIndex].name}
                  </div>

                  <div className={`absolute inset-0 rounded-[32px] overflow-hidden border-4 border-white ${landscapes[boxIndex].color}`}>
                    <img 
                      src={landscapes[boxIndex].svgPath}
                      alt={landscapes[boxIndex].description}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots under the images */}
          <div className="absolute top-full mt-16 ml-36 left-1/2 transform -translate-x-1/2 flex gap-3">
            {landscapes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentSlide(index);
                    setVisibleBoxes([index, (index + 1) % landscapes.length]);
                    setIsTransitioning(false);
                  }, 500);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white scale-100' 
                    : 'bg-white/50 scale-75 hover:scale-90 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="w-full pb-16"> {/* Added padding bottom */}
        <Product />
      </div>
      <div className="w-full">
        <Mission/>
      </div>
      <div className="w-full">
        <Post/>
      </div>
      <div className="w-full">
        <Event/>
      </div>
    </div>
  );
};

export default LandingPage;