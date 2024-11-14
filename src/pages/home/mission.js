import React from 'react';

const MissionVisionSection = () => {
  return (
    <div className="w-full p-32 bg-gray-50">
      <div className="flex justify-between items-center gap-4">
        {/* Mission Image */}
        <div className="relative group p-1 rounded-md transition-all duration-300">
          <img
            src="/assets/missionmain.svg"
            alt="Mission"
            className=""
          />
        </div>

        {/* Vision Image */}
        <div className="relative group p-1 rounded-md transition-all duration-300">
          <img
            src="/assets/visionmain.svg"
            alt="Vision"
            className=""
          />
        </div>
      </div>

      {/* Join Community Button */}
      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 bg-[#E16811] border-2 border-[#E16811] hover:bg-[#E16811] hover:text-white transition-colors duration-300 text-lg font-medium">
          Join Our Community
        </button>
      </div>
    </div>
  );
};

export default MissionVisionSection;
