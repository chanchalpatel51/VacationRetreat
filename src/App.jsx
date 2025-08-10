// import reactLogo from './assets/react.svg'
// import './App.css'

// import React from "react";
import HeroSection from "./components/HeroSection/Hero.jsx";
import Navbar from "./components/Navbar";

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import image1 from "./assets/brand1.png"
import image2 from "./assets/brand2.png"
import image3 from "./assets/brand3.png"
import image4 from "./assets/brand4.png"
import image5 from "./assets/brand5.png"
import tImg1 from "./assets/island.png"
import tImg2 from "./assets/sun.png"
import tImg3 from "./assets/airplane-around-earth.png"

import GuestSection from "./components/Guests/Guests.jsx";
import "./App.css"
import ServiceSection from "./components/Services/Services.jsx";
import AboutSection from "./components/About/about.jsx";
import OfferingSection from "./components/Offers/Offers.jsx";
import ChooseSection from "./components/Choose/Choose.jsx";
import ReviewSection from "./components/Reviews/Reviews.jsx";
import NavbarSection from "./components/Navbar/Navbar.jsx";
import ContactSection from "./components/Contact/Contact.jsx";
import FooterSection from "./components/Footer/Footer.jsx";

function App() {
  const navbar = {
    navhome: "Home",
      navservices: "Services",
      navabout: "About",
      navcontact: "Contact"
  };
  
  const heroSection = {
    title: "Discover Unique Retreats",
    bgImg: "https://static.wixstatic.com/media/84770f_eace8d18f0354e46877d09b06f7dd679~mv2.jpeg",
    heroTitle: "Immersive Vacation Experiences Await",
    description:
      "Immerse yourself in the beauty of the Irish countryside with our charming retreats. From traditional cottages to modern homes, our vacation rentals offer the perfect blend of nature and comfort."
  };

const guests = [
  { id: 1, logoURL: image1 },
  { id: 2, logoURL: image2 },
  { id: 3, logoURL: image3 },
  { id: 4, logoURL: image4 },
  { id: 5, logoURL: image5 }
];

  const services = [
    {
      title: "Retreats for Solo Travelers",
      description: "Find your ideal solo escape amidst nature's tranquility.",
      img: "https://static.wixstatic.com/media/84770f_ab7b3d247d8d4cd3a9c5ae61e54ef2c4~mv2.jpeg"
    },
    {
      title: "Retreats for Families",
      description: "Create unforgettable family memories in our cozy vacation homes.",
      img: "https://static.wixstatic.com/media/84770f_684082824f9840d390a95f2c98931788~mv2.jpeg/v1/fill/w_752,h_412,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Services_comp-m6yz2kmf17.jpeg"
    },
    {
      title: "Retreats for Couples",
      description: "Find your ideal solo escape amidst nature's tranquility.",
      img: "https://static.wixstatic.com/media/84770f_0adad3b12e414bf7bc3a4d1bd1eacdce~mv2.jpeg/v1/fill/w_752,h_412,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Services_comp-m6yz2kmj16.jpeg"
    },
    {
      title: "Retreats for Nature Enthusiasts",
      description: "Immerse in Nature's Beauty.",
      img: "https://static.wixstatic.com/media/84770f_ed517668af574004ac36c8fd3255bb75~mv2.jpeg/v1/fill/w_752,h_412,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Services_comp-m6yz0ey1.jpeg"
    }
  ];

  const about = {
    bgImg: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
    bio: "At L. O'Sullivan, we specialize in offering unique vacation rentals that capture the essence of Irish countryside living. Our mission is to provide guests with unforgettable experiences, blending nature's beauty with modern comforts. We are committed to transparency, exceptional guest experiences, and a dedication to preserving the natural environment. Let us be your trusted partners in creating cherished memories and immersive retreats."
  };

  const offering = {
    uProperties: "50+",
    uP: "Unique properties",
    sClients: "1000+",
    sP: "satisfied guests",
    rGuest: "95%",
    rP: "returning guests"
  };

  const choose = {
    tImage1: tImg1,
    tImage2: tImg2,
    tImage3: tImg3,
    tExpe: "Tailored experiences for every traveler",
    eGuest: "Exceptional guest satisfaction and memorable stays",
    emmersive: "Immersive and nature-centric retreats"
  }

  const review = [
    {
      quote: "L. O'Sullivan provided an unforgettable vacation experience. Highly recommended!", 
      author: "Emma Smith, Travel Enthusiast"
    },
    {
      quote: "Exceptional service and outstanding retreats. They truly understand their guests' needs.",
      author: "Michael Johnson, Nature Lover"
    },
    {
      quote: "Our vacation was a dream thanks to L. O'Sullivan. Highly recommended!",
      author: "Sophia Brown, Happy Traveler"
    }
  ]

  return (
    <>
      <NavbarSection navData = {navbar}/>
      <HeroSection  heroData = {heroSection}/>
      <GuestSection guestData = {guests}/>
      <ServiceSection serviceData = {services}/>
      <AboutSection aboutData = {about}/>
      <OfferingSection offerData = {offering}/>
      <ChooseSection chooseData = {choose}/>
      <ReviewSection reviewData = {review}/>
      <ContactSection />
      <FooterSection/>
    </>
  );
}



export default App;
