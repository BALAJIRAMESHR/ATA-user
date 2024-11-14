import React, { useState } from 'react';
import { ChevronLeft, Plane } from 'lucide-react';
import { galleryData } from './galleryData';

const DanceGallery = () => {
  const [currentView, setCurrentView] = useState('main');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedYear, setSelectedYear] = useState(2020);

  const years = [2016, 2017, 2018, 2019, 2020, 2021];

  const ImageCard = ({ image, title, description }) => (
    <div className="group cursor-pointer">
      <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {title && (
        <div className="mt-2">
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          {description && (
            <p className="text-sm text-gray-500">{description}</p>
          )}
        </div>
      )}
    </div>
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentView('category');
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
    if (selectedCategory) {
      setCurrentView('category');
    }
  };

  const handleBack = () => {
    setCurrentView('main');
    setSelectedCategory(null);
  };

  if (currentView === 'category' && selectedCategory) {
    return (
      <div className="w-full max-w-6xl mx-auto p-32">
        <button 
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        
        <h2 className="text-2xl font-bold text-center mb-2">
          {selectedCategory} - {selectedYear}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {galleryData[selectedCategory].images[selectedYear]?.map((item, index) => (
            <ImageCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto p-8">
      {/* Timeline section with aligned dots and line */}
      <div className="relative w-full p-32 flex justify-between items-center mb-12">
        {/* Curved dotted line - more gentle curve */}
        <svg 
          className="absolute w-full h-24" 
          style={{ top: '45%', left: 0 }}
          preserveAspectRatio="none"
        >
          <path
            d={`M 0,12 
                C ${window.innerWidth * 0.25},12 
                  ${window.innerWidth * 0.4},8 
                  ${window.innerWidth * 0.5},8 
                  S ${window.innerWidth * 0.75},16 
                  ${window.innerWidth},12`}
            fill="none"
            stroke="#666"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>

        {/* Timeline points */}
        {years.map((year) => {
          const isHighlighted = year === selectedYear;
          
          return (
            <div 
              key={year} 
              className="relative flex flex-col items-center z-10 cursor-pointer"
              onClick={() => handleYearClick(year)}
            >
              {/* Dot */}
              <div 
                className={`w-4 h-4 rounded-full ${
                  isHighlighted ? 'bg-orange-500' : 'bg-gray-400'
                } relative transition-colors duration-300`}
              >
                {isHighlighted && (
                  <div className="absolute w-6 h-6 rounded-full border-2 border-orange-500 -top-1 -left-1 animate-pulse" />
                )}
              </div>
              
              {/* Year label */}
              <span className={`mt-2 text-sm ${
                isHighlighted ? 'text-orange-500 font-medium' : 'text-gray-500'
              } transition-colors duration-300`}>
                {year}
              </span>

              {/* Plane icon for selected year */}
              {isHighlighted && (
                <div className="absolute -top-8">
                  <Plane className="text-orange-500 transform rotate-45" size={24} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Gallery categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(galleryData).map(([category, data]) => (
          <div key={category} onClick={() => handleCategoryClick(category)}>
            <ImageCard image={data.mainImage} title={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DanceGallery;