import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CreditCard, Image, Layers, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "10 August 2026",
    title: "Opening Ceremony & Keynotes",
    description:
      "<b>PROFX EXPO AFRICA 2026</b> kicks off with a grand opening ceremony followed by keynote speeches from global Forex finance and FinTech leaders.",
    icon: <CreditCard size={24} />,
  },
  {
    year: "10 August 2026",
    title: "Panels & Exhibition",
    description:
      "Day 1 features in-depth panel discussions on Forex, FinTech, and Trading Innovation, alongside live exhibition booths open throughout the day.",
    icon: <Image size={24} />,
  },
  {
    year: "11 August 2026",
    title: "Expert Talks & Networking",
    description:
      "Day 2 offers fireside chats, advanced panels on market trends and technology, and dedicated investor and partner networking sessions.",
    icon: <Layers size={24} />,
  },
  {
    year: "11 August 2026",
    title: "PROFX Awards Ceremony",
    description:
      "The summit concludes with the prestigious PROFX Awards, celebrating excellence, innovation, and leadership within the global finance ecosystem.",
    icon: <TrendingUp size={24} />,
  },
];

const OurVision = () => {
  const timelineRefs = useRef([]);

  useEffect(() => {
    timelineRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
          duration: 0.8,
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <section className="our-vision-gsap py-5 bg-lightgrey mt-5">
      <div className="container">
        <div className="row justify-content-center text-center pb-5">
          <div className="col-lg-8">
            <p className="mb-1 pink">OUR VISION</p>
            <h2 className="black fw-bold pb-3">
              Why This <span className="pink">PROFX EXPO AFRICA 2026 Matters</span>
            </h2>
            <p className="text-grey">
              <b>PROFX EXPO AFRICA 2026</b> is the premier international finance event bringing together global leaders from Forex, FinTech, Blockchain, and digital finance. Over two days, attendees explore expert-led sessions, live exhibition booths, networking, and the prestigious PROFX Awards - all under one roof in Dubai’s world-class financial hub.
            </p>
          </div>
        </div>

        <div className="row align-items-start">
          {/* Left Narrative */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="vision-text">
              <h2 className="mb-3 black">
                Our Vision - <span className="pink">Driving Forex Innovation</span>
              </h2>
              <p className="text-dark">
                <b>PROFX EXPO AFRICA 2026</b> is designed as a complete financial ecosystem experience. The summit seamlessly integrates summit sessions, live exhibition booths, continuous networking, and the PROFX Awards ceremony. Participants engage with industry experts, decision-makers, and innovators shaping the future of global finance. From advanced trading discussions to Forex innovation, Dubai emerges as the hub for scalable, compliant, and impactful financial solutions.
              </p>
              <div className="vision-image mt-4 text-center text-lg-start">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/resources/vision-image.jpg`}
                  alt="Our Vision"
                  className="img-fluid rounded shadow-sm animate-pulse"
                />
              </div>
            </div>
          </div>

          {/* Right Timeline */}
          <div className="col-lg-6">
            <div className="timeline-container position-relative">
              {milestones.map((milestone, idx) => (
                <div
                  className="timeline-item d-flex align-items-start mb-5"
                  key={idx}
                  ref={(el) => (timelineRefs.current[idx] = el)}
                >
                  <div className="timeline-icon bg-pink text-white me-3 d-flex align-items-center justify-content-center rounded-circle">
                    {milestone.icon}
                  </div>
                  <div className="timeline-content bg-white p-4 rounded shadow-sm">
                    <h5 className="fw-bold">{milestone.title}</h5>
                    <small className="text-blue">{milestone.year}</small>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              ))}
              <div className="timeline-line position-absolute bg-blue"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
