import React from "react";
import CountUp from "react-countup";
import { Calendar, Briefcase, Trophy, Mic } from "lucide-react";

const LivePulse = () => {
  const stats = [
    { icon: <Mic size={28} />, number: 30, suffix: "+", label: "Global Speakers" },
    { icon: <Calendar size={28} />, number: 2000, suffix: "+", label: "Attendees Expected" },
    { icon: <Briefcase size={28} />, number: 30, suffix: "+", label: "Exhibition Booths" },
    // { icon: <DollarSign size={28} />, number: 10, suffix: "M+", label: "Investments Showcased" },
    { icon: <Trophy size={28} />, number: 40, suffix: "+", label: "Industrial Awards" },
  ];

  return (
    <>
      <section className="live-pulse py-5 mt-5" style={{
        backgroundImage: 'linear-gradient(to right top, #e91e63, #e3206b, #dc2473, #d5297a, #cd2e81, #c53386, #bd378a, #b53b8e, #ab3f91, #a14394, #964696, #8c4997)'
      }}
      >
        <div className="container text-center">
          <h2 className="white fw-bold mb-5" data-aos="fade-up" data-aos-delay="500">
            What's <span className="pink">Buzzing</span> at PROFX
          </h2>
          <div className="row justify-content-center g-4">
            {stats.map((stat, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay={600 + index * 100} key={index}>
                <div className="pulse-card p-4 rounded-4 shadow-sm">
                  <div className="pulse-icon mb-3 bg-lightgrey rounded-circle p-3">{stat.icon}</div>
                  <h3 className="pink mb-2">
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2.5}
                      suffix={stat.suffix ? stat.suffix : ""}
                    />
                  </h3>
                  <p className="text-grey mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LivePulse;
