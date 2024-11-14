import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Summer Music Festival",
      date: "June 15, 2024",
      time: "2:00 PM - 10:00 PM",
      location: "Central Park",
      description: "Join us for a day of live music performances featuring local and international artists.",
      attendees: 250,
      category: "Music",
      image: "/assets/event-1.svg"
    },
    {
      id: 2,
      title: "Tech Conference 2024",
      date: "July 10, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Convention Center",
      description: "Explore the latest trends in technology with industry experts and innovative demos.",
      attendees: 500,
      category: "Technology",
      image: "/assets/event-3.svg"
    },
    {
      id: 3,
      title: "Food & Wine Tasting",
      date: "August 5, 2024",
      time: "5:00 PM - 9:00 PM",
      location: "Grand Hotel",
      description: "Experience a curated selection of fine wines paired with gourmet cuisine.",
      attendees: 150,
      category: "Food",
      image: "/assets/event-2.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Upcoming Events</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.category}
                </span>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;