import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MembershipProgram = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState(null);

  const membershipLevels = [
    {
      name: 'Silver-Single',
      type: 'Annual Membership',
      price: '$10.00',
      gradientClasses: 'from-blue-300 via-purple-300 to-purple-400',
      benefits: [
        '25% discount on event tickets',
        'Access to networking events',
        'Monthly newsletter subscription',
        'Basic member directory listing'
      ]
    },
    {
      name: 'Silver-Family',
      type: 'Annual Membership',
      price: '$20.00',
      gradientClasses: 'from-orange-400 via-orange-500 to-red-500',
      benefits: [
        'All Silver-Single benefits',
        'Family access to events',
        'Quarterly family gatherings',
        'Family member directory listings'
      ]
    },
    {
      name: 'Gold-Student',
      type: 'Life-time Membership',
      price: '$50.00',
      gradientClasses: 'from-blue-700 via-blue-500 to-blue-600',
      benefits: [
        'All Silver benefits',
        'Career mentorship program',
        'Student workshops access',
        'Resume review services'
      ]
    },
    {
      name: 'Gold-Single',
      type: 'Life-time Membership',
      price: '$100.00',
      gradientClasses: 'from-green-400 via-green-500 to-green-600',
      benefits: [
        'All Gold-Student benefits',
        'Priority event registration',
        'Exclusive networking sessions',
        'Professional development workshops'
      ]
    },
    {
      name: 'Gold-Family',
      type: 'Life-time Membership',
      price: '$200.00',
      gradientClasses: 'from-purple-400 via-purple-500 to-purple-600',
      benefits: [
        'All Gold-Single benefits',
        'Family-wide lifetime access',
        'Premium event seating',
        'Special family recognition'
      ]
    }
  ];

  const executiveBenefits = [
    {
      image: "/assets/member-1.svg",
      title: "Navigating the Future in AI",
      date: "April 28th, 2024"
    },
    {
      image: "/assets/member-2.svg",
      title: "Professional Networking Event",
      date: "May 15th, 2024"
    },
    {
      image: "/assets/member-3.svg",
      title: "Leadership Development Workshop",
      date: "June 5th, 2024"
    },
    {
      image: "/assets/member-4.svg",
      title: "Annual Business Conference",
      date: "July 20th, 2024"
    },
    {
      image: "/assets/member-5.svg",
      title: "Innovation Summit",
      date: "August 10th, 2024"
    },
    {
      image: "/assets/member-6.svg",
      title: "Executive Masterclass",
      date: "September 15th, 2024"
    }
  ];

  const handleBuyNow = (membership) => {
    setSelectedMembership(membership);
    setShowDetails(true);
  };

  const handleProceedToCheckout = () => {
    navigate('/forms', { state: { selectedMembership } });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === executiveBenefits.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? executiveBenefits.length - 1 : prev - 1));
  };

  // Close modal if clicking outside
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowDetails(false);
    }
  };

  return (
    <>
      <div className="mx-auto p-32 space-y-12">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-32">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="text-orange-500 text-2xl">✦</div>
              <h1 className="text-6xl font-bold text-center text-gray-800 font-montserrat mb-2">
                ATA'S NEW <br />MEMBERSHIP PROGRAM
              </h1>
            </div>
            <div className="flex justify-center">
              <button className="bg-orange-500 text-white px-8 py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img 
              src="/assets/member-main.svg"
              alt="Business meeting"
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="space-y-4 mb-32">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
            What is the ATA'S Membership Program?
          </h2>
          <p className="text-gray-600 text-2xl">
            The Adelaide Tamil Association (ATA) is proud to announce the newly revamped Membership program.
          </p>
          <p className="text-gray-600 text-2xl">
            Members will save over $150 on various professional development & networking events. Our goal is to help professionals get the support they need to accelerate their success. All proceeds will be donated to the Tamil Community Centre initiative.
          </p>
        </div>

        {/* Membership Levels */}
        <div className="w-full p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Membership Level</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {membershipLevels.map((level, index) => (
              <div key={index} className="relative group">
                <div className="relative h-80 w-full bg-white rounded-3xl overflow-hidden shadow-lg">
                  <div className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b ${level.gradientClasses} rounded-l-lg`} />
                  <div className={`absolute left-0 right-0 bottom-0 h-12 bg-gradient-to-r ${level.gradientClasses}`} />
                  <div className={`absolute left-0 top-0 w-52 rounded-3xl h-3 bg-gradient-to-r ${level.gradientClasses}`} />
                  <div className="h-full p-6 flex flex-col">
                    <div className="absolute top-8 right-0 w-16 h-4 bg-gray-800 rounded-full" />
                    
                    <div className="space-y-3 mt-8 ml-10">
                      <h3 className="text-xl font-bold text-gray-800">{level.name}</h3>
                      <p className="text-gray-600 text-sm">{level.type}</p>
                    </div>
                    
                    <div className="mt-auto mb-6">
                      <div className="relative bg-gray-800 text-white rounded-full p-4 w-24 h-24 mx-auto flex flex-col items-center justify-center">
                        <p className="text-lg font-bold mb-1">{level.price}</p>
                        <button
                          className="text-sm hover:underline transition-colors text-white"
                          onClick={() => handleBuyNow(level)}
                        >
                          Buy now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Benefits Slideshow */}
        <div className="w-full max-w-7xl mx-auto px-8 py-12">
          <div className="flex gap-12">
            <div className="w-1/2 space-y-4">
              <div>
                <h2 className="text-5xl font-bold text-gray-800">Membership</h2>
                <h3 className="text-5xl font-bold text-gray-800">Exclusive</h3>
              </div>
              <p className="text-2xl text-gray-600">
                Members will receive 25% off tickets to Toast to Success, Early Bird Ticket Access 
                for Black & White Affair, and free entry to professional development workshops!
              </p>
            </div>

            <div className="relative w-1/2">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {executiveBenefits.map((benefit, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img src={benefit.image} alt={benefit.title} className="w-full h-[300px] object-cover" />
                  </div>
                ))}
              </div>
            </div>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Modal for Membership Details */}
        {showDetails && selectedMembership && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={handleModalClick}
          >
            <div className="bg-white p-8 rounded-md w-1/2 relative">
              <button 
                onClick={() => setShowDetails(false)} 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X />
              </button>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedMembership.name}</h2>
              <ul className="space-y-2 mb-6">
                {selectedMembership.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-600">
                    - {benefit}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold mb-4">Price: {selectedMembership.price}</p>
              <div className="flex justify-end space-x-4">
                <button 
                  className="px-6 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowDetails(false)}
                >
                  Cancel
                </button>
                <button 
                  className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                  onClick={handleProceedToCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MembershipProgram;

// push