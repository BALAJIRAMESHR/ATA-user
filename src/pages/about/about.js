import React, { useState } from 'react';
import { Clock } from 'lucide-react';

const AdelaideStoryTimeline = () => {
  const [activeYear, setActiveYear] = useState('1990');

  
  const timelineData = {
    '1990': {
      image: "/assets/about.svg",
      title: "In 1990 'S",
      content: "'To us all towns are one, all men our kin' – Kaniyan Poongunranaar and 'Seek wealth, even by riding the waves' – Konrai Vaendhan (Avvayaar) inspired many Tamils to move to South Australia, seeking better opportunities. Initially scattered and small in number, they couldn't form a community."
    },
    '1995': {
      image: "assets/about-1.svg",
      title: "In 1995'S",
      content: "The Tamil population grew steadily as word spread about Adelaide's quality of life. Small cultural gatherings began in community halls, marking the first celebrations of Pongal and Tamil New Year in the city."
    },
    '2000': {
      image: "assets/about-2.svg",
      title: "In 2000'S",
      content: "The millennium marked a significant shift as the Tamil community began actively participating in multicultural events. The first Tamil language school was established, ensuring cultural preservation for the next generation."
    },
    '2004': {
      image: "assets/about-4.svg",
      title: "In 2004's",
      content: "The Adelaide Tamil Association was officially registered, providing a formal platform for community activities and cultural celebrations. The first major cultural show attracted over 500 attendees."
    },
    '2008': {
      image: "assets/about-5.svg",
      title: "In 2008'S",
      content: "Tamil entrepreneurs began establishing successful businesses in Adelaide, from IT consulting firms to restaurants. The community's economic contribution became increasingly significant."
    },
    '2015': {
      image: "/assets/about-6.svg",
      title: "In 2015'S",
      content: "Tamil students consistently achieved outstanding results in South Australian schools. The community established scholarship programs to support higher education."
    },
    '2018': {
      image: "/assets/about-7.svg",
      title: "In 2018'S",
      content: "The first Tamil Arts Festival showcased traditional music, dance, and literature. Local Tamil artists gained recognition in mainstream Australian cultural events."
    },
    '2020': {
      image: "/assets/about-8.svg",
      title: "In 2020'S",
      content: "During the global pandemic, the community showcased remarkable resilience by transitioning cultural events and language classes online, reaching even more people across South Australia."
    }
  };

  const TimelinePoint = ({ year, hasPlane, x, y }) => {
    const isActive = activeYear === year;
    
    return (
      <div 
        className="absolute cursor-pointer group"
        style={{ left: `${x}%`, top: `${y}px` }}
        onClick={() => setActiveYear(year)}
      >
        <div className={`h-4 w-4 rounded-full transition-all duration-300 ${
          isActive ? 'bg-orange-500 scale-125' : 'bg-orange-300 hover:bg-orange-400'
        }`} />
        
        {hasPlane && (
          <div className="absolute -top-6">
            <svg className="w-6 h-6 text-blue-600 transform rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" />
            </svg>
          </div>
        )}
        
        <span className={`absolute -bottom-6 -left-4 text-sm ${
          isActive ? 'text-orange-500 font-bold' : 'text-orange-300'
        }`}>
          {year}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-orange-500 text-center mb-16">
          The Adelaide Story
          <div className="mt-2">
            <div className="h-0.5 w-32 mx-auto bg-blue-900"></div>
          </div>
        </h1>

        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left - Image */}
            <div className="lg:col-span-4">
              <div className="relative">
                <img
                  src={timelineData[activeYear]?.image}
                  alt={`${activeYear} story`}
                  className="rounded-lg shadow-lg transform -rotate-3 w-full h-auto"
                />
              </div>
            </div>

            {/* Center - Year */}
            <div className="lg:col-span-3">
              <div className="text-blue-600 text-8xl font-bold text-center">
                {activeYear}
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-gray-600" />
                <h2 className="text-2xl text-gray-600">{timelineData[activeYear]?.title}</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {timelineData[activeYear]?.content}
              </p>
            </div>
          </div>
        </div>

        {/* Curved Timeline */}
        <div className="relative h-48 mt-20 -mb-32">
          {/* Curved dotted line */}
          <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path
              d="M0,50 Q250,0 500,50 T1000,50"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>

          {/* Timeline points */}
          {Object.keys(timelineData).map((year, index) => {
            const x = (index / (Object.keys(timelineData).length - 1)) * 100;
            const y = 50 + Math.sin((index / (Object.keys(timelineData).length - 1)) * Math.PI) * -50;
            
            return (
              <TimelinePoint 
                key={year}
                year={year}
                hasPlane={['1990', '2004', '2008', '2020'].includes(year)}
                x={x}
                y={y}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdelaideStoryTimeline;