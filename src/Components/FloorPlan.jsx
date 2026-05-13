import React, { useState } from 'react';
import { Lock } from 'lucide-react';

export default function FloorPlan() {
  const [selectedBooth, setSelectedBooth] = useState(null);

  const Booth = ({ children, style, className = '', boothId, title, onClick }) => (
    <a
      href="#"
      className={`modal__reserve dop-form booking-slot ${className}`}
      style={style}
      data-dops={boothId}
      title={title}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
    >
      {children}
    </a>
  );

  return (
    <div className="booking-area">
      {/* Header Section */}
      <section id="section-booking" className="pb-0 text-light">
        <div className="price-title mb-7 w-lg-60 mx-auto text-center">
          <p className="mb-1 pink">Floor Plan</p>
          <h2 className="mb-1">
            Check out the <span className="pink">Floor Plan</span> for <span className="pink">SUMMIT</span>
          </h2>
          <p className="m-0">
            Choose from 4 powerful tiers-designed for trend explorers, skill
            builders, networkers, and deal-closers. Early Bird: 20% Off
            until Dec 31, 2026.
          </p>
        </div>
      </section>

      {/* Floor Plan Map */}
      <section className="pb-0 m-auto schememap" style={{ height: '1400px', paddingTop: '100px' }}>
        <div className="m-auto map justify-content-center">
          <div className="border bookingentry entry entrybooking zone">

            {/* Conference Hall 2 - Left with Speaker Stage */}
            <div className="meetingarea" style={{ margin: 0, top: 0, left: '45px' }}>
              <Booth data-bs-sponsortitle="Conference Hall - 24m x 14m (252m²)">
                <div className="area available me-0 speaker exit-right speakerexit1"
                  style={{ height: 'calc(26px*7.5)', width: '379px', zIndex: 11, background: '#4722ae' }}>
                  <div className="border area" style={{
                    height: '163px',
                    width: '42px',
                    backgroundColor: '#c98e20',
                    left: '10px',
                    top: '19px',
                    position: 'absolute'
                  }}>
                    <span className="text-center" style={{
                      letterSpacing: '1.3px',
                      fontSize: '9px',
                      lineHeight: '1.5',
                      transform: 'rotate(-89deg)',
                      display: 'block'
                    }}>
                      <span style={{ fontWeight: 'bold', fontSize: '9px' }}>Speaker</span> Stage
                    </span>
                  </div>
                  <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Conference</span> <br /> Hall (2) <br /> 24x14
                  </span>
                  <div className="tooltip tooltip-right">
                    <p className="areaname">Conference Hall</p>
                    <p className="areavailability">Common Space</p>
                  </div>
                </div>
              </Booth>
            </div>

            {/* Diamond Lounges - Top */}
            <div className="meetingarea" style={{ left: '370px', top: '25px' }}>
              <Booth>
                <div className="area available Diamondroyadh" style={{ width: '80px', height: '80px' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Diamond</span> <br />Lounge <br />5 x 4
                  </span>
                  <div className="tooltip tooltip-bottom">
                    <p className="areaname">Diamond</p>
                    <p className="areavailability">Sponsor</p>
                  </div>
                </div>
              </Booth>
            </div>

            <div className="meetingarea" style={{ left: '370px', top: '120px' }}>
              <Booth>
                <div className="area available Diamondroyadh" style={{ width: '80px', height: '80px' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Diamond</span> <br />Lounge <br />5 x 4
                  </span>
                  <div className="tooltip tooltip-bottom">
                    <p className="areaname">Diamond</p>
                    <p className="areavailability">Sponsor</p>
                  </div>
                </div>
              </Booth>
            </div>

            {/* Conference Hall 1 - Right with Speaker Stage */}
            <div className="meetingarea" style={{ margin: 0, top: 0, right: '45px' }}>
              <Booth data-bs-sponsortitle="Conference Hall - 24m x 14m (252m²)">
                <div className="area available me-0 speaker exit-left speakerexit2"
                  style={{ height: 'calc(26px*7.5)', width: '529px', zIndex: 11, background: '#4722ae' }}>
                  <div className="border area" style={{
                    height: '163px',
                    width: '42px',
                    backgroundColor: '#c98e20',
                    right: '10px',
                    top: '19px',
                    position: 'absolute'
                  }}>
                    <span className="text-center" style={{
                      letterSpacing: '1.3px',
                      fontSize: '9px',
                      lineHeight: '1.5',
                      transform: 'rotate(89deg)',
                      display: 'block'
                    }}>
                      <span style={{ fontWeight: 'bold', fontSize: '9px' }}>Speaker</span> Stage
                    </span>
                  </div>
                  <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Conference</span> <br /> Hall (2) <br /> 24x14
                  </span>
                  <div className="tooltip tooltip-left">
                    <p className="areaname">Conference Hall</p>
                    <p className="areavailability">Common Space</p>
                  </div>
                </div>
              </Booth>
            </div>

            {/* Cafe Lounge - Right Side */}
            <div className="meetingarea" style={{ right: '345px', top: '556px', left: '650px' }}>
              <Booth>
                <div className="area available cafe" style={{ fontSize: '12px', height: '92px', width: '47px' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '7px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '9px' }}>Cafe</span> <br />Lounge <br /> 4 x 7
                  </span>
                  <div className="tooltip tooltip-left">
                    <p className="areaname">Cafe Lounge</p>
                    <p className="areavailability">Cafe Lounge</p>
                  </div>
                </div>
              </Booth>
            </div>

            {/* Left Side Areas - Goods Entry, Organizer Office, Meeting Rooms */}
            <div className="leftarea">
              <div className="meetingarea leftareachild" style={{ top: '750px' }}>
                <Booth>
                  <div className="area available sidearea" style={{ fontSize: '12px', height: '151px', width: '47px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '7px', lineHeight: '1.5', transform: 'rotate(90deg)' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '9px' }}>Goods</span> <br />Entry
                    </span>
                    <div className="tooltip tooltip-right">
                      <p className="areaname">Goods Entry</p>
                      <p className="areavailability">Goods Entry</p>
                    </div>
                  </div>
                </Booth>
              </div>

              <div className="meetingarea leftareachild" style={{ top: '520px' }}>
                <Booth>
                  <div className="area available sidearea" style={{ fontSize: '12px', height: '230px', width: '47px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '7px', lineHeight: '1.5', transform: 'rotate(90deg)' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '9px' }}>Organizer</span> <br />Office
                    </span>
                    <div className="tooltip tooltip-right">
                      <p className="areaname">Organizer Office</p>
                      <p className="areavailability">Organizer Office</p>
                    </div>
                  </div>
                </Booth>
              </div>

              <div className="meetingarea leftareachild" style={{ top: '902px' }}>
                <Booth>
                  <div className="area available sidearea" style={{ fontSize: '12px', height: '92px', width: '47px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '7px', lineHeight: '1.5', transform: 'rotate(90deg)' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '9px' }}>Meeting</span> <br />Room
                    </span>
                    <div className="tooltip tooltip-right">
                      <p className="areaname">Meeting Room</p>
                      <p className="areavailability">Meeting Room</p>
                    </div>
                  </div>
                </Booth>
              </div>

              <div className="meetingarea leftareachild" style={{ top: '157px' }}>
                <Booth>
                  <div className="area available sidearea" style={{ fontSize: '12px', height: '92px', width: '47px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '7px', lineHeight: '1.5', transform: 'rotate(90deg)' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '9px' }}>Meeting</span> <br />Room <br /> No:3
                    </span>
                    <div className="tooltip tooltip-right">
                      <p className="areaname">Meeting Room No:3</p>
                      <p className="areavailability">Meeting Room</p>
                    </div>
                  </div>
                </Booth>
              </div>

              <div className="meetingarea leftareachild" style={{ top: '398px' }}>
                <Booth>
                  <div className="area available sidearea" style={{ fontSize: '12px', height: '122px', width: '47px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '7px', lineHeight: '1.5', transform: 'rotate(90deg)' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '9px' }}>Goods</span> <br />Entry
                    </span>
                    <div className="tooltip tooltip-right">
                      <p className="areaname">Goods Entry</p>
                      <p className="areavailability">Goods Entry</p>
                    </div>
                  </div>
                </Booth>
              </div>
            </div>

            {/* Cafe Lounge - Left Bottom */}
            <div className="meetingarea" style={{ top: '838px', left: '-360px' }}>
              <Booth>
                <div className="area available cafe" style={{ fontSize: '12px', height: '51px', width: '80px' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Cafe</span> <br />Lounge <br /> 4 x 4
                  </span>
                  <div className="tooltip tooltip-bottom">
                    <p className="areaname">Cafe Lounge</p>
                    <p className="areavailability">Cafe Lounge</p>
                  </div>
                </div>
              </Booth>
            </div>

            {/* Work Space - Vertical */}
            <div className="meetingarea" style={{ top: '556px', left: '626px' }}>
              <Booth>
                <div className="area available" style={{ fontSize: '12px', height: '92px', width: '38px', background: '#29299e' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Work</span> <br />Space <br />2 x 7
                  </span>
                  <div className="tooltip tooltip-bottom">
                    <p className="areaname">Work Space - 2m X 7m (14m²)</p>
                    <p className="areavailability">Work Space</p>
                  </div>
                </div>
              </Booth>
            </div>

            {/* Wash Rooms */}
            <div className="meetingarea" style={{ top: '1141px', left: '-327px', zIndex: 1 }}>
              <Booth>
                <div className="area available" style={{ fontSize: '12px', height: '40px', width: '48px', background: '#089366' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Wash</span> <br />Room
                  </span>
                  <div className="tooltip tooltip-right">
                    <p className="areaname">Wash Room</p>
                    <p className="areavailability">Wash Room</p>
                  </div>
                </div>
              </Booth>
            </div>

            <div className="meetingarea" style={{ top: '1141px', left: '10px', zIndex: 1 }}>
              <Booth>
                <div className="area available" style={{ fontSize: '12px', height: '40px', width: '48px', background: '#089366' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Wash</span> <br />Room
                  </span>
                  <div className="tooltip tooltip-right">
                    <p className="areaname">Wash Room</p>
                    <p className="areavailability">Wash Room</p>
                  </div>
                </div>
              </Booth>
            </div>

            {/* Exit Entry Area - Bottom */}
            <div className="meetingarea" style={{ top: '1141px', left: '884px', zIndex: 1 }}>
              <Booth>
                <div className="area" style={{ fontSize: '12px', height: '56px', width: '247px', background: '#089366' }}>
                  <div className="area text-uppercase" style={{
                    top: '22px',
                    border: 'none',
                    left: '-24px',
                    color: '#e01486',
                    letterSpacing: '2px',
                    fontWeight: 'bold',
                    height: '0px',
                    cursor: 'default',
                    fontSize: '10px',
                    position: 'absolute'
                  }}>
                    <span>Exit</span>
                  </div>
                  <div className="area text-uppercase" style={{
                    top: '22px',
                    border: 'none',
                    left: '121px',
                    color: '#e01486',
                    letterSpacing: '2px',
                    fontWeight: 'bold',
                    height: '0px',
                    cursor: 'default',
                    fontSize: '10px',
                    position: 'absolute'
                  }}>
                    <span>Entry</span>
                  </div>
                </div>
              </Booth>
            </div>

            {/* Exit Walkthrough and Branding */}
            <div className="border meetingarea entry entrybranding1" style={{ top: '1071px', left: '0px' }}>
              <Booth>
                <div className="area" style={{
                  fontSize: '12px',
                  height: '68px',
                  width: '883px',
                  background: '#161616',
                  cursor: 'default',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around'
                }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '7px' }} className="m-5 text-uppercase">
                    Exit walkthrough and Branding
                  </span>
                  <span style={{ letterSpacing: '1.3px', fontSize: '7px' }} className="m-5 text-uppercase">
                    Exit walkthrough and Branding
                  </span>
                </div>
              </Booth>
            </div>

            {/* Top Gold and Silver Row */}
            <div className="classic secondarea thirdarea" style={{ top: '257px', left: '-633px', width: '398px', height: '78px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Booth boothId="617" title="122 - Gold 4m x 3m (12m²)">
                  <div className="border area available x33x3 gold" style={{ height: '40px', width: '60px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Gold</span><br />Sponsor <br /> 4 x 3
                    </span>
                    <div className="tooltip tooltip-bottom slot-availability">
                      <p className="areaname">122 - Gold 4m x 3m (12m²)</p>
                    </div>
                  </div>
                </Booth>

                {[
                  { id: '618', num: 123 },
                  { id: '619', num: 124 },
                  { id: '620', num: 125 },
                  { id: '621', num: 126 },
                  { id: '622', num: 127 },
                  { id: '623', num: 128 }
                ].map(booth => (
                  <Booth key={booth.id} boothId={booth.id} title={`${booth.num} - Silver 3m x 3m (9m²)`}>
                    <div className="border area available x33x3 silver" style={{ width: '44px' }}>
                      <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                        <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Silver</span><br />Sponsor <br /> 3 x 3
                      </span>
                      <div className="tooltip tooltip-bottom slot-availability">
                        <p className="areaname">{booth.num} - Silver 3m x 3m (9m²)</p>
                      </div>
                    </div>
                  </Booth>
                ))}

                <Booth boothId="624" title="129 - Gold 4m x 3m (12m²)">
                  <div className="border area available x33x3 gold" style={{ height: '40px', width: '60px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Gold</span><br />Sponsor <br /> 4 x 3
                    </span>
                    <div className="tooltip tooltip-bottom slot-availability">
                      <p className="areaname">129 - Gold 4m x 3m (12m²)</p>
                    </div>
                  </div>
                </Booth>

                <Booth boothId="625" title="130 - Gold 4m x 3m (12m²)">
                  <div className="border area available x33x3 gold" style={{ height: '40px', width: '60px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Gold</span><br />Sponsor <br /> 4 x 3
                    </span>
                    <div className="tooltip tooltip-bottom slot-availability">
                      <p className="areaname">130 - Gold 4m x 3m (12m²)</p>
                    </div>
                  </div>
                </Booth>

                {[
                  { id: '626', num: 131 },
                  { id: '627', num: 132 },
                  { id: '628', num: 133 },
                  { id: '629', num: 134 },
                  { id: '630', num: 135 },
                  { id: '631', num: 136 }
                ].map(booth => (
                  <Booth key={booth.id} boothId={booth.id} title={`${booth.num} - Silver 3m x 3m (9m²)`}>
                    <div className="border area available x33x3 silver" style={{ width: '44px' }}>
                      <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                        <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Silver</span><br />Sponsor <br /> 3 x 3
                      </span>
                      <div className="tooltip tooltip-bottom slot-availability">
                        <p className="areaname">{booth.num} - Silver 3m x 3m (9m²)</p>
                      </div>
                    </div>
                  </Booth>
                ))}

                <Booth boothId="632" title="137 - Gold 4m x 3m (12m²)">
                  <div className="border area available x33x3 gold" style={{ height: '40px', width: '60px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Gold</span><br />Sponsor <br /> 4 x 3
                    </span>
                    <div className="tooltip tooltip-bottom slot-availability">
                      <p className="areaname">137 - Gold 4m x 3m (12m²)</p>
                    </div>
                  </div>
                </Booth>
              </div>
            </div>

            {/* Right Gold Sponsors with Premium */}
            <div className="rightgold">
              {/* First Row */}
              <div className="classic secondarea fourtharea rightgoldchild" style={{ top: '301px', left: '1043px', width: '104px', zIndex: 14 }}>
                <Booth boothId="512" title="17 - Gold - 4m x 3m (12m²)">
                  <div className="border area available x33x3 gold" style={{ height: '55px', width: '45px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Gold</span><br />Sponsor <br /> 4 x 3
                    </span>
                    <div className="tooltip tooltip-top slot-availability">
                      <p className="areaname">17 - Gold - 4m x 3m (12m²)</p>
                    </div>
                  </div>
                </Booth>

                <Booth boothId="513" title="18 - Gold - 4m x 3m (12m²)">
                  <div className="border area available x33x3 gold" style={{ height: '55px', width: '45px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Gold</span><br />Sponsor <br /> 4 x 3
                    </span>
                    <div className="tooltip tooltip-top slot-availability">
                      <p className="areaname">18 - Gold - 4m x 3m (12m²)</p>
                    </div>
                  </div>
                </Booth>

                <Booth boothId="514" title="19 - Premium 6m x 4m (24m²)">
                  <div className="border area available" style={{ height: '55px', width: '90px', background: '#cb1b3a' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Premium</span><br />Sponsor <br /> 6 x 4
                    </span>
                    <div className="tooltip tooltip-left slot-availability">
                      <p className="areaname">19 - Premium 6m x 4m (24m²)</p>
                    </div>
                  </div>
                </Booth>
              </div>

              {/* Repeated Premium Rows */}
              {[
                { left: '919px', ids: ['515', '516', '517'] },
                { left: '795px', ids: ['515', '516', '517'] },
                { left: '655px', ids: ['515', '516', '517'] }
              ].map((row, idx) => (
                <div key={idx} className="classic secondarea fourtharea rightgoldchild" style={{ top: '301px', left: row.left, width: '104px' }}>
                  <Booth boothId={row.ids[0]} title="20 - Gold - 4m x 3m (12²)">
                    <div className="border area available x33x3 gold" style={{ height: '55px', width: '45px' }}>
                      <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                        <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Gold</span><br />Sponsor <br /> 4 x 3
                      </span>
                      <div className="tooltip tooltip-top slot-availability">
                        <p className="areaname">20 - Gold - 4m x 3m (12²)</p>
                      </div>
                    </div>
                  </Booth>

                  <Booth boothId={row.ids[1]} title="21 - Gold - 4m x 3m (12²)">
                    <div className="border area available x33x3 gold" style={{ height: '55px', width: '45px' }}>
                      <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                        <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Gold</span><br />Sponsor <br /> 4 x 3
                      </span>
                      <div className="tooltip tooltip-top slot-availability">
                        <p className="areaname">21 - Gold - 4m x 3m (12²)</p>
                      </div>
                    </div>
                  </Booth>

                  <Booth boothId={row.ids[2]} title="22 - Premium - 6m x 4m (24m²)">
                    <div className="border area available" style={{ height: '55px', width: '90px', background: '#cb1b3a' }}>
                      <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                        <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Premium</span><br />Sponsor <br /> 6 x 4
                      </span>
                      <div className="tooltip tooltip-bottom slot-availability">
                        <p className="areaname">22 - Premium - 6m x 4m (24m²)</p>
                      </div>
                    </div>
                  </Booth>
                </div>
              ))}
            </div>

            {/* Gold and Premium - Top Right Corner */}
            <div className="classic secondarea fourtharea" style={{ top: '430px', left: '654px', width: '104px', zIndex: 10 }}>
              <Booth boothId="608" title="113 - Gold 4m x 3m (12m²)">
                <div className="border area available x33x3 gold" style={{ height: '55px' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                    <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Gold</span><br />Sponsor <br /> 4 x 3
                  </span>
                  <div className="tooltip tooltip-right slot-availability">
                    <p className="areaname">113 - Gold 4m x 3m (12m²)</p>
                  </div>
                </div>
              </Booth>

              <Booth boothId="609" title="114 - Gold 4m x 3m (12m²)">
                <div className="border area available x33x3 gold" style={{ height: '55px' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                    <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Gold</span><br />Sponsor <br /> 4 x 3
                  </span>
                  <div className="tooltip tooltip-right slot-availability">
                    <p className="areaname">114 - Gold 4m x 3m (12m²)</p>
                  </div>
                </div>
              </Booth>

              <Booth boothId="610" title="115 - Premium 6m x 4m (24m²)">
                <div className="border area available" style={{ height: '47px', width: '104px', background: '#cb1b3a' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                    <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Premium</span><br />Sponsor <br /> 6 x 4
                  </span>
                  <div className="tooltip tooltip-right slot-availability">
                    <p className="areaname">115 - Premium 6m x 4m (24m²)</p>
                  </div>
                </div>
              </Booth>
            </div>

            {/* Activity Zone - Large Orange Area */}
            <div className="meetingarea" style={{ left: '-365px', top: '385px' }}>
              <Booth>
                <div className="area exit-start activityexit available" style={{ width: '267px', height: '188px', background: '#e3691e' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Activity</span> <br />Zone <br />11 x 18
                  </span>
                  <div className="tooltip tooltip-bottom">
                    <p className="areaname">Activity Zone</p>
                    <p className="areavailability">Common Space</p>
                  </div>
                </div>
              </Booth>

              <Booth>
                <div className="area available exit-left exitwork" style={{
                  fontSize: '12px',
                  height: '31px',
                  width: '85px',
                  background: '#29299e',
                  top: '-31px',
                  right: '-267px',
                  position: 'absolute'
                }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Work</span> <br />Space <br />6 x 2
                  </span>
                  <div className="tooltip tooltip-bottom">
                    <p className="areaname">Work Space - 6m X 2m (12m²)</p>
                    <p className="areavailability">Work Space</p>
                  </div>
                </div>
              </Booth>

              <Booth>
                <div className="area available exit-right exitwork1" style={{
                  fontSize: '12px',
                  height: '31px',
                  width: '85px',
                  background: '#29299e',
                  top: '-188px',
                  right: '-266px',
                  position: 'absolute'
                }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Work</span> <br />Space <br />6 x 2
                  </span>
                  <div className="tooltip tooltip-bottom">
                    <p className="areaname">Work Space - 6m X 2m (12m²)</p>
                    <p className="areavailability">Work Space</p>
                  </div>
                </div>
              </Booth>
            </div>

            {/* Network Lounge - Center */}
            <div className="meetingarea" style={{ left: '370px', top: '257px' }}>
              <Booth>
                <div className="area available network" style={{ width: '90px', height: '102px' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Network</span> <br />Lounge <br />6 x 7
                  </span>
                  <div className="tooltip tooltip-bottom">
                    <p className="areaname">Network Lounge</p>
                    <p className="areavailability">Common Space</p>
                  </div>
                </div>
              </Booth>
            </div>

            {/* Gold and Silver Grid - Center (103-112) */}
            <div className="classic position-absolute secondarea fourtharea" style={{ top: '418px', zIndex: 11, left: '499px', width: '104px', height: '230px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {[
                  { id: '598', num: 103, type: 'gold' },
                  { id: '603', num: 108, type: 'gold' },
                  { id: '599', num: 104, type: 'silver' },
                  { id: '604', num: 109, type: 'silver' },
                  { id: '600', num: 105, type: 'silver' },
                  { id: '605', num: 110, type: 'silver' },
                  { id: '601', num: 106, type: 'silver' },
                  { id: '606', num: 111, type: 'silver' },
                  { id: '602', num: 107, type: 'gold' },
                  { id: '607', num: 112, type: 'gold' }
                ].map(booth => (
                  <Booth key={booth.id} boothId={booth.id} title={`${booth.num} - ${booth.type === 'gold' ? 'Gold 4m x 3m (12m²)' : 'Silver 3m x 3m (9m²)'}`}>
                    <div className={`border area available ${booth.type === 'gold' ? 'x33x3 gold' : 'silver x x3x3'}`} style={booth.type === 'gold' ? { height: '55px' } : {}}>
                      <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                        <span style={{ fontWeight: 'bold', fontSize: '6px' }}>{booth.type === 'gold' ? 'Gold' : 'Silver'}</span>
                        <br />Sponsor <br /> {booth.type === 'gold' ? '4 x 3' : '3 x 3'}
                      </span>
                      <div className="tooltip tooltip-right slot-availability">
                        <p className="areaname">{booth.num} - {booth.type === 'gold' ? 'Gold 4m x 3m (12m²)' : 'Silver 3m x 3m (9m²)'}</p>
                      </div>
                    </div>
                  </Booth>
                ))}
              </div>
            </div>

            {/* Gold and Silver Row - Bottom (25-28) */}
            <div className="classic position-absolute secondarea fourtharea" style={{ top: '859px', zIndex: 3, left: '543px', width: '288px', height: '55px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Booth boothId="520" title="25 - Gold 4m x 3m (12m²)" className="entry entry36">
                  <div className="border area available x33x3 gold" style={{ height: '40px', width: '66px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Gold</span><br />Sponsor <br /> 4 x 3
                    </span>
                    <div className="tooltip tooltip-right slot-availability">
                      <p className="areaname">25 - Gold 4m x 3m (12m²)</p>
                    </div>
                  </div>
                </Booth>

                {[
                  { id: '521', num: 26 },
                  { id: '522', num: 27 }
                ].map(booth => (
                  <Booth key={booth.id} boothId={booth.id} title={`${booth.num} - Silver 3m x 3m (9m²)`}>
                    <div className="border area available x33x3 silver">
                      <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                        <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Silver</span><br />Sponsor <br /> 3 x 3
                      </span>
                      <div className="tooltip tooltip-right slot-availability">
                        <p className="areaname">{booth.num} - Silver 3m x 3m (9m²)</p>
                      </div>
                    </div>
                  </Booth>
                ))}

                <Booth boothId="523" title="28 -Gold - 4m x 3m (12m²)">
                  <div className="border area available x33x3 gold" style={{ height: '40px', width: '66px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Gold</span><br />Sponsor<br />4 x 3
                    </span>
                    <div className="tooltip tooltip-right slot-availability">
                      <p className="areaname">28 -Gold - 4m x 3m (12m²)</p>
                    </div>
                  </div>
                </Booth>
              </div>
            </div>

            {/* Gold and Silver Row (91-102) */}
            <div className="classic position-absolute secondarea fourtharea" style={{ top: '729px', zIndex: 3, left: '444px', width: '340px', height: '79px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {[
                  { id: '586', num: 91, type: 'gold' },
                  { id: '587', num: 92, type: 'silver' },
                  { id: '588', num: 93, type: 'silver' },
                  { id: '589', num: 94, type: 'silver' },
                  { id: '590', num: 95, type: 'silver' },
                  { id: '591', num: 96, type: 'gold' },
                  { id: '592', num: 97, type: 'gold' },
                  { id: '593', num: 98, type: 'silver' },
                  { id: '594', num: 99, type: 'silver' },
                  { id: '595', num: 100, type: 'silver' },
                  { id: '596', num: 101, type: 'silver' },
                  { id: '597', num: 102, type: 'gold' }
                ].map(booth => (
                  <Booth key={booth.id} boothId={booth.id} title={`${booth.num} - ${booth.type === 'gold' ? 'Gold 4m x 3m (12m²)' : 'Silver 3m x 3m (9m²)'}`}>
                    <div className={`${booth.num === 102 ? 'area' : 'border area'} available ${booth.type === 'gold' ? 'x33x3 gold' : 'x33x3 silver'}`}
                      style={booth.type === 'gold' ? { height: '40px', width: '66px' } : {}}>
                      <span style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }} className="text-center">
                        <span style={{ fontWeight: 'bold', fontSize: '6px' }}>{booth.type === 'gold' ? 'Gold' : 'Silver'}</span>
                        <br />Sponsor <br /> {booth.type === 'gold' ? '4 x 3' : '3 x 3'}
                      </span>
                      <div className="tooltip tooltip-right slot-availability">
                        <p className="areaname">{booth.num} - {booth.type === 'gold' ? 'Gold 4m x 3m (12m²)' : 'Silver 3m x 3m (9m²)'}</p>
                      </div>
                    </div>
                  </Booth>
                ))}
              </div>
            </div>

            {/* Product Launch Zone */}
            <div className="meetingarea" style={{ left: '543px', top: '899px' }}>
              <Booth>
                <div className="area available network" style={{ height: '100px', width: '236px' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Product</span><br /> Launch Zone<br /> 14 x 6
                  </span>
                  <div className="tooltip tooltip-bottom">
                    <p className="areaname">Product Launch</p>
                    <p className="areavailability">Common Space</p>
                  </div>
                </div>
              </Booth>
            </div>

            {/* PRO MEDIA Production */}
            <div className="meetingarea" style={{ left: '842px', top: '950px' }}>
              <Booth className="exit-start exitprofx">
                <div className="area available network" style={{ height: '50px', width: '90px', background: '#c33c83' }}>
                  <span className="text-center" style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '7px' }}>PRO MEDIA</span> Production <br /> 5 x 4
                  </span>
                  <div className="tooltip tooltip-bottom">
                    <p className="areaname">PRO MEDIA Production</p>
                    <p className="areavailability">PROF MEDIA Production</p>
                  </div>
                </div>
              </Booth>
            </div>

            {/* Network Lounge - Left */}
            <div className="meetingarea" style={{ left: '-75px', top: '737px' }}>
              <Booth>
                <div className="area available network" style={{ height: '63px', width: '156px' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Network</span> <br />Lounge <br />9 x 4
                  </span>
                  <div className="tooltip tooltip-bottom">
                    <p className="areaname">Network Lounge</p>
                    <p className="areavailability">Common Space</p>
                  </div>
                </div>
              </Booth>
            </div>

            {/* Elite Sponsors - Right Side */}
            <div className="rightelite">
              <div style={{ left: '882px', top: '840px' }} className="rightelitechild">
                <Booth boothId="500" title="05 - Elite - 5m x 6m (30m²)" style={{ top: 0 }}>
                  <div className="mb-4 border area available x8x3 eliteDubai" style={{ height: 'calc(20px*4)', width: 'calc(19px*4)', marginLeft: '-17px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Elite</span> Sponsor <br /> 5 x 6
                    </span>
                    <div className="tooltip tooltip-top slot-availability">
                      <p className="areaname">05 - Elite - 5m x 6m (30m²)</p>
                    </div>
                  </div>
                </Booth>
              </div>

              <div className="rightelitechild" style={{ left: '1086px', top: '840px' }}>
                <Booth boothId="498" title="03 - Regional - 6m x 5m (30m²)">
                  <div className="border area available regional" style={{ fontSize: '12px', height: 'calc(17px*4)', width: 'calc(23px*4)' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Regional</span><br /> sponsor <br /> 6 x 5
                    </span>
                    <div className="tooltip tooltip-left slot-availability">
                      <p className="areaname">03 - Regional - 6m x 5m (30m²)</p>
                    </div>
                  </div>
                </Booth>
              </div>

              <div className="rightelitechild" style={{ left: '973px', top: '840px' }}>
                <Booth boothId="499" title="04 - Titanium - 6m x 5m (30m²)">
                  <div className="border area available titanium" style={{ fontSize: '12px', height: 'calc(17px*4)', width: 'calc(23px*4)' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Titanium</span><br /> Sponsor <br /> 6 x 5
                    </span>
                    <div className="tooltip tooltip-bottom slot-availability">
                      <p className="areaname">04 - Titanium - 6m x 5m (30m²)</p>
                    </div>
                  </div>
                </Booth>
              </div>
            </div>

            {/* Official Sponsor */}
            <div className="mb-3 x4x3 officialriyadh" style={{ left: '952px', top: '931px', height: 'calc(17px*4)', width: 'calc(23px*4)' }}>
              <Booth boothId="497" title="02 - Official - 6m x 5m (30m²)" style={{ height: 'calc(17px*4)', width: 'calc(25px*4)' }}>
                <div className="border area available officialDubai" style={{ height: 'calc(17px*4)', width: 'calc(23px*4)' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                    <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Official</span> Sponsor <br /> 6 x 5
                  </span>
                  <div className="tooltip tooltip-left slot-availability">
                    <p className="areaname">02- Official - 6m x 5m (30m²)</p>
                  </div>
                </div>
              </Booth>
            </div>

            {/* Exclusive Sponsor */}
            <div className="entry entryexclusive" style={{ left: '1081px', top: '931px' }}>
              <Booth boothId="496" title="01 - Exclusive - 6m x 5m (30m²)">
                <div className="border area available exclusiveriyadh" style={{ height: 'calc(17px*4)', width: 'calc(23px*4)', marginLeft: '-17px' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                    <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Exclusive</span><br /> sponsor <br /> 6 x 5
                  </span>
                  <div className="tooltip tooltip-left slot-availability">
                    <p className="areaname">01 - Exclusive - 6m x 5m (30m²)</p>
                  </div>
                </div>
              </Booth>
            </div>

            {/* Diamond Sponsors - Left (120, 121) */}
            <div style={{ left: '365px', top: '509px', position: 'absolute' }}>
              <Booth boothId="515" title="120 - Diamond - 5m x 4m (20m²)" style={{ top: 0 }}>
                <div className="mb-4 border area available x8x3 Diamondroyadh" style={{ height: 'calc(16px*4)', width: 'calc(21px*4)', marginLeft: '-17px' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                    <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Diamond</span> Sponsor <br /> 5 x 4
                  </span>
                  <div className="tooltip tooltip-top slot-availability">
                    <p className="areaname">120 - Diamond - 5m x 4m (20m²)</p>
                  </div>
                </div>
              </Booth>
            </div>

            <div style={{ left: '365px', top: '385px', position: 'absolute' }}>
              <Booth boothId="516" title="121 - Diamond - 5m x 4m (20m²)" style={{ top: 0 }}>
                <div className="mb-4 border area available x8x3 Diamondroyadh" style={{ height: 'calc(16px*4)', width: 'calc(21px*4)', marginLeft: '-17px' }}>
                  <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                    <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Diamond</span> Sponsor <br /> 5 x 4
                  </span>
                  <div className="tooltip tooltip-top slot-availability">
                    <p className="areaname">121 - Diamond - 5m x 4m (20m²)</p>
                  </div>
                </div>
              </Booth>
            </div>

            {/* Diamond Sponsors - Right Side (06, 07, 08) */}
            <div className="rightdiamond">
              <div style={{ left: '1065px', top: '641px' }} className="rightdiamondchild">
                <Booth boothId="501" title="06 - Diamond - 5m x 4m (20m²)" style={{ top: 0 }}>
                  <div className="mb-4 border area available x8x3 Diamondroyadh" style={{ height: 'calc(16px*4)', width: 'calc(21px*4)', marginLeft: '-17px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Diamond</span> Sponsor <br /> 5 x 4
                    </span>
                    <div className="tooltip tooltip-top slot-availability">
                      <p className="areaname">06 - Diamond - 5m x 4m (20m²)-</p>
                    </div>
                  </div>
                </Booth>
              </div>

              <div style={{ left: '950px', top: '641px' }} className="rightdiamondchild">
                <Booth boothId="502" title="07 - Diamond - 5m x 4m (20m²)" style={{ top: 0 }}>
                  <div className="mb-4 border area available x8x3 Diamondroyadh" style={{ height: 'calc(16px*4)', width: 'calc(21px*4)', marginLeft: '-17px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Diamond</span> Sponsor <br /> 5 x 4
                    </span>
                    <div className="tooltip tooltip-top slot-availability">
                      <p className="areaname">07 - Diamond - 5m x 4m (20m²)</p>
                    </div>
                  </div>
                </Booth>
              </div>

              <div style={{ left: '835px', top: '641px' }} className="rightdiamondchild">
                <Booth boothId="503" title="08 - Diamond - 5m x 4m (20m²)" style={{ top: 0 }}>
                  <div className="mb-4 border area available x8x3 Diamondroyadh" style={{ height: 'calc(16px*4)', width: 'calc(21px*4)', marginLeft: '-17px' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Diamond</span> Sponsor <br /> 5 x 4
                    </span>
                    <div className="tooltip tooltip-top slot-availability">
                      <p className="areaname">18- Diamond - 5m x 4m (20m²)</p>
                    </div>
                  </div>
                </Booth>
              </div>
            </div>

            {/* Platinum Sponsors - Right Side (09-16) */}
            <div className="rightplatinum">
              <div className="basic firstarea thirdbasic rightplatinumchild" style={{ left: '919px', top: '556px', width: '171px', height: '69px' }}>
                <Booth boothId="505" title="10 - Platinum - 5m x 4m (20m²)" style={{ width: '83px', display: 'block' }}>
                  <div className="mb-3 border area available x4x3 platinumriyadh" style={{ height: 'calc(16px*4)', width: 'calc(21px*4)' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Platinum</span> Sponsor <br /> 5 x 4
                    </span>
                    <div className="tooltip tooltip-left slot-availability">
                      <p className="areaname">10 - Platinum - 5m x 4m (20m²)</p>
                    </div>
                  </div>
                </Booth>

                <Booth boothId="504" title="09 - Platinum - 5m x 4m (20m²)" style={{ top: '-80px', left: '84px', width: '83px', display: 'block' }}>
                  <div className="mb-3 border area available x4x3 platinumriyadh" style={{ height: 'calc(16px*4)', width: 'calc(21px*4)' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Platinum</span> Sponsor <br /> 5 x 4
                    </span>
                    <div className="tooltip tooltip-left slot-availability">
                      <p className="areaname">09 - Platinum - 5m x 4m (20m²)</p>
                    </div>
                  </div>
                </Booth>
              </div>

              <div className="basic firstarea thirdbasic rightplatinumchild" style={{ left: '733px', top: '556px', width: '171px', height: '69px' }}>
                <Booth boothId="507" title="12 - Platinum -5m x 4m (20m²)">
                  <div className="mb-3 border area available x4x3 platinumriyadh" style={{ height: 'calc(16px*4)', width: 'calc(21px*4)' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Platinum</span> Sponsor <br /> 5 x 4
                    </span>
                    <div className="tooltip tooltip-right slot-availability">
                      <p className="areaname">12 - Platinum -5m x 4m (20m²)</p>
                    </div>
                  </div>
                </Booth>

                <Booth boothId="506" title="11 - Platinum - 5m x 4m (20m²)" style={{ top: '-80px', left: '84px', width: '83px', display: 'block' }}>
                  <div className="mb-3 border area available x4x3 platinumriyadh" style={{ height: 'calc(16px*4)', width: 'calc(21px*4)' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Platinum</span> Sponsor <br /> 5 x 4
                    </span>
                    <div className="tooltip tooltip-right slot-availability">
                      <p className="areaname">11 - Platinum - 5m x 4m (20m²)</p>
                    </div>
                  </div>
                </Booth>
              </div>
            </div>

            {/* Platinum Sponsors - Second Row (13-16) */}
            <div className="rightplatinum2">
              <div className="basic firstarea thirdbasic rightplatinum2child" style={{ left: '965px', top: '472px', width: '171px', height: '69px' }}>
                <Booth boothId="509" title="14 - Platinum - 5m x 4m (20m²)" style={{ width: '83px', display: 'block' }}>
                  <div className="mb-3 border area available x4x3 platinumriyadh" style={{ height: 'calc(16px*4)', width: 'calc(21px*4)' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Platinum</span> Sponsor <br /> 5 x 4
                    </span>
                    <div className="tooltip tooltip-left slot-availability">
                      <p className="areaname">14 - Platinum - 5m x 4m (20m²)</p>
                    </div>
                  </div>
                </Booth>

                <Booth boothId="508" title="13 - Platinum - 5m x 4m (20m²)" style={{ top: '-80px', left: '84px', width: '83px', display: 'block' }}>
                  <div className="mb-3 border area available x4x3 platinumriyadh" style={{ height: 'calc(16px*4)', width: 'calc(21px*4)' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Platinum</span> Sponsor <br /> 5 x 4
                    </span>
                    <div className="tooltip tooltip-left slot-availability">
                      <p className="areaname">13 - Platinum - 5m x 4m (20m²)</p>
                    </div>
                  </div>
                </Booth>
              </div>

              <div className="basic firstarea thirdbasic rightplatinum2child" style={{ left: '776px', top: '472px', width: '171px', height: '69px' }}>
                <Booth boothId="511" title="16 - Platinum - 5m x 4m (20m²)">
                  <div className="mb-3 border area available x4x3 platinumriyadh" style={{ height: 'calc(16px*4)', width: 'calc(21px*4)' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Platinum</span> Sponsor <br /> 5 x 4
                    </span>
                    <div className="tooltip tooltip-right slot-availability">
                      <p className="areaname">16 - Platinum - 5m x 4m (20m²)</p>
                    </div>
                  </div>
                </Booth>

                <Booth boothId="510" title="15 - Platinum - 5m x 4m (20m²)" style={{ top: '-80px', left: '84px', width: '83px', display: 'block' }}>
                  <div className="mb-3 border area available x4x3 platinumriyadh" style={{ height: 'calc(16px*4)', width: 'calc(21px*4)' }}>
                    <span style={{ letterSpacing: '1.3px', fontSize: '9px', lineHeight: '1.5' }} className="text-center">
                      <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Platinum</span> Sponsor <br /> 5 x 4
                    </span>
                    <div className="tooltip tooltip-right slot-availability">
                      <p className="areaname">15 - Platinum - 5m x 4m (20m²)</p>
                    </div>
                  </div>
                </Booth>
              </div>
            </div>

            {/* Exit Area */}
            <Booth style={{ height: '71px', width: '120px', display: 'block' }}>
              <div className="border area available" style={{ height: '71px', width: '120px', backgroundColor: '#3966b2', bottom: '-1070px', left: '884px', position: 'absolute' }}>
                <span className="text-center" style={{ letterSpacing: '1.3px', fontSize: '7px', lineHeight: '1.5' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '9px' }}>Exit</span><br /> Area <br /> 7 x 6
                </span>
                <div className="tooltip tooltip-bottom">
                  <p className="areaname">Exit</p>
                  <p className="areavailability">Exit Area</p>
                </div>
              </div>
            </Booth>

            {/* Registration Area */}
            <Booth style={{ height: '71px', width: '127px', display: 'block' }}>
              <div className="border area available" style={{ height: '71px', width: '127px', backgroundColor: '#3966b2', bottom: '-999px', left: '1004px', position: 'absolute' }}>
                <div className="border area" style={{
                  height: '58px',
                  width: '20px',
                  backgroundColor: '#c98e20',
                  left: '-5px',
                  position: 'absolute'
                }}>
                  <span className="text-center" style={{ letterSpacing: '1.3px', fontSize: '5px', lineHeight: '1.5', transform: 'rotate(-89deg)', display: 'block' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '5px' }}>Registration</span> Counters
                  </span>
                </div>
                <span className="text-center" style={{ letterSpacing: '1.3px', fontSize: '7px', lineHeight: '1.5' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '9px' }}>Registration</span><br /> Area <br /> 8 x 6
                </span>
                <div className="tooltip tooltip-bottom">
                  <p className="areaname">Registration Counters</p>
                  <p className="areavailability">Registration</p>
                </div>
              </div>
            </Booth>

            {/* Exposure Walls - Left Side */}
            {[
              { top: '55px', height: '58px' },
              { top: '129px', height: '58px' },
              { top: '305px', height: '58px' },
              { top: '559px', height: '58px' },
              { top: '618px', height: '58px' }
            ].map((wall, idx) => (
              <Booth key={`left-wall-${idx}`} className="dop-form modal__reserve" style={{
                display: 'block',
                top: wall.top,
                width: '14px',
                left: '1px',
                background: '#bc1741',
                height: wall.height
              }}>
                <div className="border area available" style={{ width: '14px', height: wall.height }}>
                  <span style={{ fontSize: '8px' }}>
                    <span style={{
                      display: 'flex',
                      fontSize: '8px',
                      top: '18px',
                      left: '-18px',
                      transform: 'rotate(-88deg)',
                      width: '52px',
                      position: 'absolute'
                    }}>Exposure W</span>
                  </span>
                  <div className="tooltip tooltip-right">
                    <p className="areaname">Exposure Wall</p>
                    <p className="areavailability">Exposure Wall</p>
                  </div>
                </div>
              </Booth>
            ))}

            <Booth className="dop-form modal__reserve" style={{
              display: 'block',
              top: '696px',
              width: '58px',
              left: '1px',
              background: '#bc1741',
              height: '14px'
            }}>
              <div className="border area available" style={{ width: '58px', height: '14px' }}>
                <span style={{ fontSize: '8px' }}>
                  <span style={{ fontSize: '8px', top: '-3px', left: '3px', width: '52px', position: 'absolute' }}>Exposure W</span>
                </span>
                <div className="tooltip tooltip-bottom">
                  <p className="areaname">Exposure Wall</p>
                  <p className="areavailability">Exposure Wall</p>
                </div>
              </div>
            </Booth>

            {/* Exposure Walls - Right Side */}
            {[
              { top: '-314px', height: '48px', fontSize: '7px' },
              { top: '20px', height: '44px', fontSize: '5px', width: '37px' },
              { top: '89px', height: '38px', fontSize: '5px', width: '34px' }
            ].map((wall, idx) => (
              <Booth key={`right-wall-${idx}`} className="dop-form modal__reserve" style={{
                display: 'block',
                top: wall.top,
                width: '10px',
                left: '1190px',
                background: '#bc1741',
                height: wall.height
              }}>
                <div className="border area available" style={{ width: '10px', height: wall.height }}>
                  <span style={{ fontSize: '8px' }}>
                    <span style={{
                      display: 'flex',
                      fontSize: wall.fontSize,
                      top: '18px',
                      left: '-21px',
                      transform: 'rotate(-270deg)',
                      width: wall.width || '52px',
                      position: 'absolute'
                    }}>Exposure W</span>
                  </span>
                  <div className="tooltip tooltip-left">
                    <p className="areaname">Exposure Wall</p>
                    <p className="areavailability">Exposure Wall</p>
                  </div>
                </div>
              </Booth>
            ))}

            {/* Additional Exposure Walls */}
            <Booth className="dop-form modal__reserve" style={{
              display: 'block',
              top: '496px',
              width: '10px',
              left: '874px',
              background: '#bc1741',
              height: '38px'
            }}>
              <div className="border area available" style={{ width: '10px', height: '38px' }}>
                <span style={{ fontSize: '8px' }}>
                  <span style={{
                    display: 'flex',
                    fontSize: '5px',
                    top: '18px',
                    left: '-21px',
                    transform: 'rotate(-270deg)',
                    width: '34px',
                    position: 'absolute'
                  }}>Exposure W</span>
                </span>
                <div className="tooltip tooltip-left">
                  <p className="areaname">Exposure Wall</p>
                  <p className="areavailability">Exposure Wall</p>
                </div>
              </div>
            </Booth>

            <Booth className="dop-form modal__reserve" style={{
              display: 'block',
              top: '447px',
              width: '32px',
              left: '512px',
              background: '#bc1741',
              height: '10px'
            }}>
              <div className="border area available" style={{ width: '32px', height: '10px' }}>
                <span style={{ fontSize: '8px' }}>
                  <span style={{ fontSize: '4px', top: '-6px', left: '2px', width: '52px', position: 'absolute' }}>Exposure W</span>
                </span>
                <div className="tooltip tooltip-left">
                  <p className="areaname">Exposure Wall</p>
                  <p className="areavailability">Exposure Wall</p>
                </div>
              </div>
            </Booth>

            <Booth className="dop-form modal__reserve" style={{
              display: 'block',
              top: '276px',
              width: '10px',
              left: '533px',
              background: '#bc1741',
              height: '32px'
            }}>
              <div className="border area available" style={{ width: '10px', height: '32px' }}>
                <span style={{ fontSize: '8px' }}>
                  <span style={{
                    display: 'flex',
                    fontSize: '4px',
                    top: '17px',
                    left: '-21px',
                    width: '29px',
                    transform: 'rotate(90deg)',
                    position: 'absolute'
                  }}>Exposure W</span>
                </span>
                <div className="tooltip tooltip-left">
                  <p className="areaname">Exposure Wall</p>
                  <p className="areavailability">Exposure Wall</p>
                </div>
              </div>
            </Booth>

            {/* Standard Sponsors - Bottom (29-54) */}
            <div className="classic secondarea thirdarea" style={{ top: '930px', left: '-771px', width: '263px', height: '70px', zIndex: 11 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {Array.from({ length: 14 }, (_, i) => i + 29).map(num => (
                  <Booth key={num} boothId={String(524 + num - 29)} title={`${num} - Standard - 2m x 2m (4m²)`}>
                    <div className="border area available x32x2 standard">
                      <span style={{ letterSpacing: '0.2px', fontSize: '5px', lineHeight: '1.2' }} className="text-center">
                        <span style={{ fontWeight: 'bold', fontSize: '5px' }}>Standard</span><br />Sponsor <br /> 2 x 2
                      </span>
                      <div className="tooltip tooltip-right slot-availability">
                        <p className="areaname">{num} - Standard - 2m x 2m (4m²)</p>
                      </div>
                    </div>
                  </Booth>
                ))}
              </div>
            </div>

            <div className="classic secondarea thirdarea" style={{ top: '930px', left: '-288px', width: '225px', height: '70px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {Array.from({ length: 12 }, (_, i) => i + 43).map(num => (
                  <Booth key={num} boothId={String(538 + num - 43)} title={`${num} - Standard - 2m x 2m (4m²)`}>
                    <div className="border area available x32x2 standard">
                      <span style={{ letterSpacing: '0.2px', fontSize: '5px', lineHeight: '1.2' }} className="text-center">
                        <span style={{ fontWeight: 'bold', fontSize: '5px' }}>Standard</span><br />Sponsor <br /> 2 x 2
                      </span>
                      <div className="tooltip tooltip-right slot-availability">
                        <p className="areaname">{num} - Standard - 2m x 2m (4m²)</p>
                      </div>
                    </div>
                  </Booth>
                ))}
              </div>
            </div>

            {/* Bronze Sponsors - Grid (55-90) */}
            <div className="classic secondarea thirdarea" style={{ top: '614px', left: '-955px', width: '76px', height: '70px', zIndex: 15 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {[
                  { id: '550', num: 55 }, { id: '556', num: 61 },
                  { id: '551', num: 56 }, { id: '557', num: 62 },
                  { id: '552', num: 57 }, { id: '558', num: 63 },
                  { id: '553', num: 58 }, { id: '559', num: 64 },
                  { id: '554', num: 59 }, { id: '560', num: 65 },
                  { id: '555', num: 60 }, { id: '561', num: 66 }
                ].map(booth => (
                  <Booth key={booth.id} boothId={booth.id} title={`${booth.num} - Bronze - 3m x 2m (6m²)`}>
                    <div className="border area available x33x2 bronze">
                      <span style={{ letterSpacing: '0.2px', fontSize: '5px', lineHeight: '1.2' }} className="text-center">
                        <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Bronze</span><br />Sponsor <br /> 3 x 2
                      </span>
                      <div className="tooltip tooltip-right slot-availability">
                        <p className="areaname">{booth.num} - Bronze - 3m x 2m (6m²)</p>
                      </div>
                    </div>
                  </Booth>
                ))}
              </div>
            </div>

            <div className="classic secondarea thirdarea" style={{ top: '616px', left: '-758px', width: '75px', height: 'unset', zIndex: 14 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {[
                  { id: '562', num: 67 }, { id: '566', num: 71 },
                  { id: '563', num: 68 }, { id: '567', num: 72 },
                  { id: '564', num: 69 }, { id: '568', num: 73 },
                  { id: '565', num: 70 }, { id: '569', num: 74 }
                ].map(booth => (
                  <Booth key={booth.id} boothId={booth.id} title={`${booth.num} - Bronze - 3m x 2m (6m²)`}>
                    <div className="border area available x33x2 bronze">
                      <span style={{ letterSpacing: '0.2px', fontSize: '5px', lineHeight: '1.2' }} className="text-center">
                        <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Bronze</span><br />Sponsor <br /> 3 x 2
                      </span>
                      <div className="tooltip tooltip-right slot-availability">
                        <p className="areaname">{booth.num} - Bronze - 3m x 2m (6m²)</p>
                      </div>
                    </div>
                  </Booth>
                ))}
              </div>
            </div>

            <div className="classic secondarea thirdarea" style={{ top: '615px', left: '-441px', width: '192px', height: '60px', zIndex: 12 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {Array.from({ length: 8 }, (_, i) => i + 83).map(num => (
                  <Booth key={num} boothId={String(578 + num - 83)} title={`${num} - Bronze - 3m x 2m (6m²)`}>
                    <div className="border area available x33x2 bronze" style={{ height: 'calc(8.4px* 3.6)', width: 'calc(18.4px* 2.6)' }}>
                      <span style={{ letterSpacing: '0.2px', fontSize: '5px', lineHeight: '1.2' }} className="text-center">
                        <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Bronze</span><br />Sponsor <br /> 3 x 2
                      </span>
                      <div className="tooltip tooltip-right slot-availability">
                        <p className="areaname">{num} - Bronze - 3m x 2m (6m²)</p>
                      </div>
                    </div>
                  </Booth>
                ))}
              </div>
            </div>

            <div className="classic secondarea thirdarea" style={{ top: '829px', left: '-441px', width: '192px', height: '60px', zIndex: 12 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {Array.from({ length: 8 }, (_, i) => i + 75).map(num => (
                  <Booth key={num} boothId={String(570 + num - 75)} title={`${num} - Bronze - 3m x 2m (6m²)`}>
                    <div className="border area available x33x2 bronze" style={{ height: 'calc(8.4px* 3.6)', width: 'calc(18.4px* 2.6)' }}>
                      <span style={{ letterSpacing: '0.2px', fontSize: '5px', lineHeight: '1.2' }} className="text-center">
                        <span style={{ fontWeight: 'bold', fontSize: '6px' }}>Bronze</span><br />Sponsor <br /> 3 x 2
                      </span>
                      <div className="tooltip tooltip-right slot-availability">
                        <p className="areaname">{num} - Bronze - 3m x 2m (6m²)</p>
                      </div>
                    </div>
                  </Booth>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Styles - Converted from the styles file */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;900&display=swap');

        .booking-area a {
          text-decoration: none !important;
        }

        .booking-area .zone .basic .area.available {
        }

        .booking-area .zone .classic .area.available {
        }

        .booking-area .zone .premium .area.available {
        }

        .booking-area .zone .super .area.available {
        }

        .booking-area .zone .ultimate .area.available {
        }

        .booking-area .area.available p.areavailability {
          text-transform: uppercase;
        }

        .booking-area section.schememap h2 {
          font-size: 70px;
          text-transform: uppercase;
          font-weight: 900;
          color: white;
          line-height: 1;
        }

        .booking-area section.schememap h2 span {
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 1px white;
        }

        .booking-area section.schememap {
          padding: 5% 0;
          overflow-x: scroll;
          overflow-y: hidden;
        }

        .booking-area .zone a {
          position: relative;
        }

        .booking-area .schememap {
          background-color: black;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-grid-dots' width='20' height='20' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23ffffff1f' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Ccircle cx='5' cy='5' r='1' /%3E%3Ccircle cx='12' cy='5' r='1' /%3E%3Ccircle cx='19' cy='5' r='1' /%3E%3Ccircle cx='5' cy='12' r='1' /%3E%3Ccircle cx='12' cy='12' r='1' /%3E%3Ccircle cx='19' cy='12' r='1' /%3E%3Ccircle cx='5' cy='19' r='1' /%3E%3Ccircle cx='12' cy='19' r='1' /%3E%3Ccircle cx='19' cy='19' r='1' /%3E%3C/svg%3E");
          background-size: 2%;
        }

        .booking-area .map {
          padding: 2%;
          display: flex;
          width: 1383px;
        }

        .booking-area .zone {
          height: calc(82px*15);
          position: relative;
          min-width: 1202px;
        }

        .booking-area .basic .area {
          border: 1px solid white;
        }

        .booking-area .area {
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          position: relative;
          transition: 0.4s;
        }

        .booking-area .bars .area.available,
        .booking-area .meetingarea .area.available {
          border: 1px solid white;
        }

        .booking-area .bars .area.reserved span {
          display: block;
          font-size: 14px;
        }

        .booking-area .bars .area.reserved:after {
          display: none;
        }

        .booking-area:not(.spotted) .area.reserved:hover:after {
          opacity: 1;
        }

        .booking-area .area.available span {
          text-transform: uppercase;
          font-size: 14px;
        }

        .booking-area .area.reserved {
          border: 1px dashed #000;
          color: #000;
        }

        .booking-area .x2x2 {
          width: calc(19px*2);
          height: 35px;
        }

        .booking-area .x3x2 {
          width: calc(19px*3);
          height: calc(19px*2);
        }

        .booking-area .basic.firstarea {
          left: 252px;
        }

        .booking-area .basic.secondarea {
          right: 0;
        }

        .booking-area .zone>div {
          position: absolute;
        }

        .booking-area .basic {
          top: 15%;
        }

        .booking-area .classic.firstarea {
          bottom: 0;
          display: flex;
          left: 0;
          right: 0;
          width: fit-content;
          margin: auto;
        }

        .booking-area .classic.firstarea>*:nth-child(7),
        .booking-area .classic.firstarea>*:nth-child(8),
        .booking-area .classic.firstarea>.area:nth-child(7),
        .booking-area .classic.firstarea>.area:nth-child(8) {
          margin-right: calc(19px * 3);
        }

        .booking-area .classic.firstarea .area {
          margin-right: 5px;
        }

        .booking-area .classic.secondarea {
          left: 700px;
          width: calc(40px* 7);
          height: calc(19px* 3);
          display: flex;
          flex-wrap: wrap;
          top: 12%;
          margin: auto;
          z-index: 9;
        }

        .booking-area .classic.secondarea .area,
        .booking-area .classic.thirdarea .area {
          margin: 0;
          border: 1px solid white;
        }

        .booking-area .classic.thirdarea {
          display: flex;
          width: calc(20px*6);
          height: calc(20px*4);
          flex-wrap: wrap;
          right: calc(19px*4);
          top: 40%;
          margin: auto;
        }

        .booking-area .premium .area {
          border: 1px solid;
        }

        .booking-area .x35x3 {
          width: calc(10px* 3.5);
          height: calc(10px* 3.5);
        }

        .booking-area .premium.firstarea {
          display: flex;
          width: fit-content;
          left: 342px;
        }

        .booking-area .x4x3 {
          width: calc(17.6px* 4);
          height: calc(19px* 3);
        }

        .booking-area .super {
          display: flex;
        }

        .booking-area .super.firstarea {
          top: 33%;
          left: 55%;
        }

        .booking-area .super.secondarea {
          top: 33%;
          right: 20%;
        }

        .booking-area .super.firstarea>.area:first-child,
        .booking-area .super.secondarea>.area:first-child,
        .booking-area .super.firstarea a:first-child .area,
        .booking-area .super.secondarea a:first-child .area {
          margin-right: 2px;
        }

        .booking-area .x8x3 {
          width: 124px;
          height: calc(15px*3);
        }

        .booking-area .ultimate.firstarea {
          left: 55%;
          top: 54%;
        }

        .booking-area .ultimate.secondarea {
          top: 54%;
          right: 20%;
        }

        .booking-area .meetingarea .area {
          width: calc(19px*5.4);
          height: calc(19px*5.4);
          font-size: 11px;
          text-align: center;
        }

        .booking-area .meetingarea {
          top: 33%;
          right: 39.5%;
          margin: auto;
          width: fit-content;
        }

        .booking-area .bars.firstarea {
          left: 5%;
        }

        .booking-area .meetingarea .area:hover,
        .booking-area .bars .area:hover {
          border-color: transparent;
        }

        .booking-area .bars.secondarea {
          right: 5%;
          top: 0;
        }

        .booking-area .classic.firstarea>.area:nth-child(7):before,
        .booking-area .classic.firstarea>.area:nth-child(8):before,
        .booking-area .classic.firstarea>*:nth-child(7):before,
        .booking-area .classic.firstarea>*:nth-child(8):before,
        .booking-area .exit-down:before {
          content: '';
          width: 15px;
          height: 20px;
          position: absolute;
          right: -34px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrows-vertical' width='24' height='24' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23ec8123' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpolyline points='8 7 12 3 16 7' /%3E%3Cpolyline points='8 17 12 21 16 17' /%3E%3Cline x1='12' y1='3' x2='12' y2='21' /%3E%3C/svg%3E");
          background-size: cover;
          bottom: -8px;
          pointer-events: none;
          background-color: black;
          padding: 10px;
        }

        .booking-area .exit-down,
        .booking-area .exit-up {
          margin-right: 70px;
        }

        .booking-area .exit-up:before {
          content: '';
          width: 25px;
          height: 25px;
          position: absolute;
          right: -50px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrows-vertical' width='24' height='24' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23ec8123' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpolyline points='8 7 12 3 16 7' /%3E%3Cpolyline points='8 17 12 21 16 17' /%3E%3Cline x1='12' y1='3' x2='12' y2='21' /%3E%3C/svg%3E");
          background-size: cover;
          top: -13px;
          pointer-events: none;
          background-color: black;
          padding: 10px;
        }

        .booking-area .exit-start:before {
          content: '';
          width: 25px;
          height: 25px;
          position: absolute;
          left: -35px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrows-vertical' width='24' height='24' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23ec8123' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpolyline points='8 7 12 3 16 7' /%3E%3Cpolyline points='8 17 12 21 16 17' /%3E%3Cline x1='12' y1='3' x2='12' y2='21' /%3E%3C/svg%3E");
          background-size: cover;
          top: -13px;
          pointer-events: none;
          background-color: black;
          padding: 10px;
        }

        .booking-area .exit-left:before {
          content: '';
          width: 25px;
          height: 25px;
          position: absolute;
          right: 25px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrows-vertical' width='24' height='24' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23ec8123' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpolyline points='8 7 12 3 16 7' /%3E%3Cpolyline points='8 17 12 21 16 17' /%3E%3Cline x1='12' y1='3' x2='12' y2='21' /%3E%3C/svg%3E");
          background-size: cover;
          top: 45px;
          pointer-events: none;
          background-color: black;
          padding: 10px;
          transform: rotate(90deg);
        }

        .booking-area .exit-right:before {
          content: '';
          width: 25px;
          height: 25px;
          position: absolute;
          right: 25px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrows-vertical' width='24' height='24' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23ec8123' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpolyline points='8 7 12 3 16 7' /%3E%3Cpolyline points='8 17 12 21 16 17' /%3E%3Cline x1='12' y1='3' x2='12' y2='21' /%3E%3C/svg%3E");
          background-size: cover;
          top: 75px;
          pointer-events: none;
          background-color: black;
          padding: 10px;
          transform: rotate(90deg);
        }

        .booking-area .exit-left .area,
        .booking-area .exit-right .area {
          margin-bottom: calc(13px* 3);
        }

        .booking-area .tooltip {
          opacity: 0;
          color: white;
          position: absolute;
          padding: 0.5rem 1rem;
          background-color: SteelBlue;
          white-space: nowrap;
          font-weight: 700;
          border-radius: 0.5rem;
          pointer-events: none;
          transition: 0.3s;
          text-align: center;
          box-shadow: 0 0 10px 0 black;
        }

        .booking-area p.areavailability {
          text-transform: uppercase;
        }

        .booking-area .tooltip-right {
          right: 0;
          transform: translateX(100%);
        }

        .booking-area .tooltip-right:after {
          top: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          left: 1px;
        }

        .booking-area:not(.spotted) .area:hover .tooltip-right,
        .booking-area .area .tooltip-right.active {
          right: -1rem;
        }

        .booking-area .tooltip-left {
          left: 0;
          transform: translateX(-100%);
        }

        .booking-area .tooltip-left:after {
          top: 50%;
          transform: translate(50%, -50%) rotate(45deg);
          right: 1px;
        }

        .booking-area:not(.spotted) .area:hover .tooltip-left,
        .booking-area .area .tooltip-left.active {
          left: -1rem;
        }

        .booking-area .tooltip-bottom {
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 100%);
        }

        .booking-area .tooltip-bottom:after {
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          top: 1px;
        }

        .booking-area .tooltip-top {
          top: -2.25rem;
          left: 50%;
          transform: translateX(-50%);
        }

        .booking-area .tooltip-top:after {
          left: 50%;
          transform: translate(-50%, 50%) rotate(45deg);
          bottom: 1px;
        }

        .booking-area:not(.spotted) .area:hover .tooltip-top,
        .booking-area .area .tooltip-top.active {
          top: -5.5rem;
        }

        .booking-area:not(.spotted) .area:hover .tooltip-bottom,
        .booking-area .area .tooltip-bottom.active {
          bottom: -1rem;
        }

        .booking-area .tooltip::after {
          content: '';
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: SteelBlue;
          border-radius: 3px;
        }

        .booking-area:not(.spotted) .area:hover .tooltip,
        .booking-area .area .tooltip.active {
          opacity: 1;
        }

        .booking-area:not(.spotted) .area:hover {
          border-color: transparent;
        }

        .booking-area .area .tooltip p {
          margin: 0;
        }

        .booking-area .area .tooltip .areaname:after {
          content: '';
          margin: 10px auto;
          transition: 0.6s;
          height: 1px;
          width: 0;
          background: white;
          display: block;
          box-shadow: 0 0 2px 0 white;
        }

        .booking-area .area .tooltip.active .areaname:after,
        .booking-area:not(.spotted) .area:hover .tooltip .areaname:after {
          width: 76%;
        }

        .booking-area:not(.spotted) .area.available:hover span {
          transform: scale(0);
        }

        .booking-area .area.available span {
          transition: 0.4s;
        }

        .booking-area .area.available:after {
          content: '';
          transform: scale(0);
          transition: 0.4s;
          width: 19px;
          height: 19px;
          position: absolute;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-info-circle' width='20' height='20' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23ffffff' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Ccircle cx='12' cy='12' r='9' /%3E%3Cline x1='12' y1='8' x2='12.01' y2='8' /%3E%3Cpolyline points='11 12 12 12 12 16 13 16' /%3E%3C/svg%3E");
        }

        .booking-area:not(.spotted) .area.available:hover:after {
          transform: scale(1);
        }

        .booking-area .meetingarea .area:after {
          display: none;
        }

        .booking-area .area.reserved span {
          display: none;
        }

        .meetingarea .area.reserved:after,
        .booking-area .area.reserved:after {
          content: '';
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-lock' width='20' height='20' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23ffffff' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Crect x='5' y='11' width='14' height='10' rx='2' /%3E%3Ccircle cx='12' cy='16' r='1' /%3E%3Cpath d='M8 11v-4a4 4 0 0 1 8 0v4' /%3E%3C/svg%3E") !important;
          background-repeat: no-repeat;
          background-position: center;
          width: 100% !important;
          height: 100% !important;
          opacity: 1 !important;
          transform: scale(1) !important;
        }

        .booking-area .entry::after {
          content: "";
          height: 30px;
          width: 30px;
          background-color: black;
          position: absolute;
          background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWFycm93LXVwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgc3Ryb2tlLXdpZHRoPScxLjUnIHN0cm9rZT0nI2VjODEyMycgZmlsbD0nbm9uZScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJz4KICA8cGF0aCBzdHJva2U9J25vbmUnIGQ9J00wIDBoMjR2MjRIMHonIGZpbGw9J25vbmUnLz4KICA8cG9seWxpbmUgcG9pbnRzPSc4IDcgMTIgMyAxNiA3JyAvPgogIDxsaW5lIHgxPScxMicgeTE9JzMnIHgyPScxMicgeTI9JzIxJyAvPgo8L3N2Zz4=");
          background-repeat: no-repeat;
          bottom: -3px;
          background-position: center;
          left: 90px;
          right: 0;
          transform: rotateZ(180deg);
          margin: auto;
          border-radius: 50px;
          z-index: 1;
        }

        .bookingentry.border.entry.zone::after {
          left: 906px;
          bottom: 17px;
          transform: matrix(1, 0, 0, 1, 0, 0);
        }

        .booking-area .x33x3 {
          width: calc(14.4px* 3.6);
          height: calc(15.4px* 2.6);
        }

        .booking-area .x3x3 {
          width: calc(14.4px* 3.6);
          height: calc(15.4px* 2.6);
        }

        .booking-area .x32x2 {
          width: calc(9.4px* 3.6);
          height: calc(13.4px* 2.6);
        }

        .booking-area .x33x2 {
          width: calc(10.4px* 3.6);
          height: calc(16.4px* 2.8);
        }

        /* Sponsor Colors */
        .gold {
          background: #c1a23e !important;
        }

        .silver {
          background: #b6c0c6 !important;
          color: black !important;
        }

        .exclusive {
          background: #5227b0 !important;
        }

        .official {
          background: #81055a !important;
        }

        .regional {
          background: #04c179 !important;
        }

        .platinum {
          background: #971f37 !important;
        }

        .diamond {
          background: #048289 !important;
        }

        .standard {
          background: #4a97bd;
          color: black !important;
        }

        .titanium {
          background: #5723ca;
        }

        .cafe {
          background: #752d06 !important;
        }

        .Diamondroyadh {
          background: teal;
        }

        .exclusiveriyadh {
          background: #407fe8;
        }

        .regionalriyadh {
          background: #068c34;
        }

        .officialriyadh {
          background: purple;
        }

        .platinumriyadh {
          background: #c7a2c7;
          color: black !important;
        }

        .bronze {
          background: #c77b30 !important;
        }

        .network {
          background: #a6154ce3 !important;
        }

        .booking-area .sidearea {
          background-color: grey !important;
        }

        .booking-area .eliteDubai {
          background: #4a97bd;
        }

        .booking-area .officialDubai {
          background: purple !important;
        }

        .booking-area .exit-start.activityexit:before {
          left: 152px;
        }

        .booking-area .exit-left.exitwork:before {
          top: -79px;
          left: 71px;
        }

        .booking-area .exit-right.exitwork1:before {
          left: -27px;
          transform: matrix(1, 0, 0, 1, 0, 0);
          top: 173px;
        }

        .booking-area .entry.entryexclusive::after {
          left: -419px;
          top: 264px;
        }

        .booking-area .entry.entrybranding1::after {
          transform: rotate(92deg);
          top: -1px;
          left: 10px;
        }

        .booking-area .entry.entry36::after {
          transform: rotate(87deg);
          top: 251px;
          left: 336px;
        }

        .booking-area .exitprofx.exit-start:before {
          left: -81px;
          transform: rotate(88deg);
          top: -36px;
        }

        .booking-area .exit-right.speakerexit1:before {
          top: 90px;
          right: -14px;
        }

        .booking-area .exit-left.speakerexit2:before {
          top: 90px;
          left: -10px;
        }

        .booking-area .topthree {
          position: relative;
          top: 0;
        }

        .booking-area .topthree .topthreecontent {
          top: 0 !important;
        }

        .booking-area .rightgold {
          left: 20px !important;
          top: 4px;
        }

        .booking-area .rightgold .rightgoldchild {
          position: absolute !important;
        }

        .booking-area .rightplatinum {
          left: 68px;
          top: 29px;
        }

        .booking-area .leftarea {
          left: 0px;
        }

        .booking-area .leftarea .leftareachild {
          position: absolute !important;
        }

        .booking-area .rightelite {
          left: -23px;
          top: -36px;
        }

        .booking-area .rightelite .rightelitechild {
          position: absolute !important;
        }

        .booking-area .rightdiamond {
          left: 19px;
          top: 41px;
        }

        .booking-area .rightdiamond .rightdiamondchild {
          position: absolute !important;
        }

        .booking-area .rightplatinum2 .rightplatinum2child {
          position: absolute !important;
        }

        .booking-area .rightplatinum .rightplatinumchild {
          position: absolute !important;
        }

        @media only screen and (max-width: 1100px) {
          .booking-area .map {
            min-width: 1216px;
          }

          .booking-area section.schememap h2 {
            font-size: 40px;
          }
        }
      `}</style>
    </div>
  );
}