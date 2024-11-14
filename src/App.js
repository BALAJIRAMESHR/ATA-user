import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/Contact/contact';
import Blog from './pages/Blogs/blogs';
import Gallery from './pages/Gallery/gallery';
import Membership from './pages/Membership/membership';
import Form from './pages/Membership/form';
import Raise from './pages/service/raiseticket';
import Team from './pages/about/team';
import Events from "./pages/events/events";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col ">
        <Header />
        <main className="flex-grow pb-32"> {/* Added padding bottom */}
          <div className="container mx-auto "> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
             <Route path="/membership" element={<Membership />} />
               <Route path="/forms" element={<Form />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} /> 
              <Route path="/raiseticket" element={<Raise />} /> 
              <Route path="/team" element={<Team />} /> 
              <Route path="/events" element={<Events/>} /> 
            </Routes>
          </div>
        </main>
        <Footer className="mt-auto" /> {/* Added margin top auto */}
      </div>
    </BrowserRouter>
  );
}

export default App;