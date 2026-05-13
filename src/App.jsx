import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import AuthProvider from "./Components/AuthContext";
import Contact from "./Pages/Contact";
import Ourgallery from "./Pages/Ourgallery";
import Bloglists from "./Pages/Bloglists";
import Blogsingle from "./Pages/Blogsingle";
import Pricing from "./Pages/Pricing";
import Booknow from "./Pages/Booknow";
// import Comingsoon from "./Pages/Comingsoon";
import Faq from "./Pages/Faq";
import Error from "./Pages/Error";
import Sponsers from "./Pages/Sponsers";
import Speakerlists from "./Pages/Speakerlists";
// import Speakerdetail from "./Pages/Speakerdetail";
import Eventlists from "./Pages/Eventlists";
// import Eventdetail from "./Pages/Eventdetail";
import Searchresult from "./Pages/Searchresult";
// import Productlists from "./Pages/Productlists";
// import Productsingle from "./Pages/Productsingle";
import Testimonials from "./Pages/Testimonials";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Exhibitors from "./Pages/Exhibitors";
import ExhibitorsForm from "./Pages/ExhibitorsForm";
// import Blogs from "./Pages/Blogs";
// import TopicPhotos from "./Pages/TopicPhotos";

import "aos/dist/aos.css";
import Aos from "aos";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import Profile from "./Pages/Profile";
import Floorplan from "./Pages/Floorplan";
function App() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/Comingsoon";
  useEffect(() => {
    Aos.init({
      duration: 800,  // animation duration
      easing: "ease-in-out", // easing style
      once: false,  // whether animation should happen only once
      mirror: false // animate out while scrolling past
    });
  }, []);

  // ⭐ Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname])

  return (
    <>
      <div>
         <AuthProvider>
            {!hideHeaderFooter && <Header key={location.pathname} />}
        
      
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/MyProfile" element={<Profile />} />
          <Route path="/Floorplan" element={<Floorplan />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Ourgallery" element={<Ourgallery />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Booknow" element={<Booknow />} />
          {/* <Route path="/Comingsoon" element={<Comingsoon />} /> */}
          <Route path="/Error" element={<Error />} />
          <Route path="/Speakerlists" element={<Speakerlists />} />
          {/* <Route path="/Speakerdetail" element={<Speakerdetail />} /> */}
          <Route path="/Eventlists" element={<Eventlists />} />
          {/* <Route path="/Eventdetail" element={<Eventdetail />} /> */}
          <Route path="/Searchresult" element={<Searchresult />} />
          {/* <Route path="/Productlists" element={<Productlists />} /> */}
          {/* <Route path="/Productsingle" element={<Productsingle />} /> */}
          <Route path="/Sponsers" element={<Sponsers />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          {/* <Route path="/Blogs" element={<Blogs />} /> */}
          <Route path="/Bloglists" element={<Bloglists />} />
          <Route path="/Blogsingle" element={<Blogsingle />} />
          <Route path="/Exhibitors" element={<Exhibitors />} />
           <Route path="/ExhibitorsForm" element={<ExhibitorsForm />} />
          {/* <Route path="/TopicPhotos" element={<TopicPhotos />} /> */}

          {/* Catch-all route for 404 */}
          <Route path="*" element={<Navigate to="/Error" replace />} />
        </Routes>
        {!hideHeaderFooter && <Footer />}
         </AuthProvider>
      </div>
    </>
  );
}

export default App;
