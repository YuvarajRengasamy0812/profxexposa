import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Pagehelmet from '../Components/Pagehelmet'
import { Link } from 'react-router-dom'

function Eventdetail() {
  return (
    <div>
        <Pagehelmet pageTitle="Event Detail" />
        <Breadcrumb title="Event Detail" />

        {/*--Event Detail Section start--*/}
        <section className="event-detail pb-9">
            <div className="container">
                <div className="event-detail-inner">
                <div className="row gx-md-5">
                    <div className="col-lg-8">
                    <div className="event-detail-left">
                        <div className="event-img mb-4">
                        <img src="assets/images/group/4.jpg" alt="event-image" className="w-100 rounded"/>
                        </div>
                        <div className="event-description pb-4">
                        <h4 className="mb-4">Event Description</h4>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="description-list pb-4">
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <ul className="p-0 m-0 list-unstyled">
                                <li className="pb-2 mb-1"><i className="fa fa-long-arrow-right pink pe-1"></i>Luctus nam per dis lacus</li>
                                <li className="pb-2 mb-1"><i className="fa fa-long-arrow-right pink pe-1"></i>Penatibus hac quis torquent molestie</li>
                                <li className="pb-2 mb-1"><i className="fa fa-long-arrow-right pink pe-1"></i>Velit rhoncus dolor adipiscing</li>
                                <li className="pb-2 mb-1"><i className="fa fa-long-arrow-right pink pe-1"></i>Aenean per Penatibus</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <ul className="p-0 m-0 list-unstyled">
                                <li className="pb-2 mb-1"><i className="fa fa-long-arrow-right pink pe-1"></i>Luctus nam per dis lacus</li>
                                <li className="pb-2 mb-1"><i className="fa fa-long-arrow-right pink pe-1"></i>Penatibus hac quis torquent molestie</li>
                                <li className="pb-2 mb-1"><i className="fa fa-long-arrow-right pink pe-1"></i>Velit rhoncus dolor adipiscing</li>
                                <li className="pb-2 mb-1"><i className="fa fa-long-arrow-right pink pe-1"></i>Aenean per Penatibus</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="qoutation p-4 bg-lightgrey rounded d-md-flex mb-4 text-center text-md-start">
                            <i className="fa fa-quote-left fa-2x text-white bg-pink p-5 rounded" aria-hidden="true"></i>
                            <p className="ms-4 mb-0"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet consectetur adipiscing elit dolor. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor.</small></p>
                        </div>
                        </div>
                        <div className="event-speaker mb-5">
                        <h4 className="mb-4">Event Speakers</h4>
                        <div className="event-speaker-inner text-center text-white">
                            <div className="row gy-3">
                            <div className="col-lg-4 col-md-4">
                                <div className="speaker-box  position-relative overflow-hidden text-white">
                                    <img className="speaker-image rounded w-100" src="assets/images/speakers/1.jpg" alt="speaker-image"/>
                                    <div className="box-content position-absolute bottom-0 z-1">
                                        <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail" >GERARDO AMBROSE</Link>
                                        </h6>
                                        <span className="speaker-post d-block pb-2">Marketing Expert</span>
                                        <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                            {['facebook', 'twitter', 'google', 'instagram'].map((icon, i) => (
                                            <li key={i} className="d-inline-block">
                                                <a href="#" className="rounded d-block">
                                                <i className={`fa fa-${icon}`}></i>
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="speaker-box position-relative overflow-hidden">
                                    <img className="speaker-image rounded w-100" src="assets/images/speakers/2.jpg" alt="speaker-image"/>
                                    <div className="box-content position-absolute bottom-0 z-1">
                                        <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail" >GERARDO AMBROSE</Link>
                                        </h6>
                                        <span className="speaker-post d-block pb-2">Marketing Expert</span>
                                        <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                            {['facebook', 'twitter', 'google', 'instagram'].map((icon, i) => (
                                            <li key={i} className="d-inline-block">
                                                <a href="#" className="rounded d-block">
                                                <i className={`fa fa-${icon}`}></i>
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="speaker-box position-relative overflow-hidden">
                                    <img className="speaker-image rounded w-100" src="assets/images/speakers/4.jpg" alt="speaker-image" />
                                    <div className="box-content position-absolute bottom-0 z-1">
                                        <h6 className="speaker-title d-block text-white pb-1"><Link to="/Speakerdetail" >GERARDO AMBROSE</Link>
                                        </h6>
                                        <span className="speaker-post d-block pb-2">Marketing Expert</span>
                                        <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                                            {['facebook', 'twitter', 'google', 'instagram'].map((icon, i) => (
                                            <li key={i} className="d-inline-block">
                                                <a href="#" className="rounded d-block">
                                                <i className={`fa fa-${icon}`}></i>
                                                </a>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>  
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="event-detail-right text-center">
                            <div className="event-ticket-price d-md-flex align-items-center justify-content-center justify-content-lg-start mb-5">
                                <Link className="btn me-4 m-sm-0" to="/book-now">Buy Ticket</Link>
                                <h6 className="pink py-2">$50.50</h6>
                            </div>
                            <div className="organizers-box p-6 box-shadow rounded mb-6">
                                <div className="organizer-header mb-5">
                                    <h6 className="pb-2">About Organizers</h6>
                                    <div className="sperator w-20 m-auto border-bottom border-2 border-pink"></div>
                                </div>
                                <div className="organizer-list">
                                    <div className="organizer d-md-flex text-md-start pb-4 mb-4 border-dashed-bottom-2">
                                    <div className="organizer-bio-image ">
                                        <Link to="/Speakerdetail"><img src="assets/images/team/1.jpg" alt="team-image" className="me-2 rounded-circle m-sm-0"/></Link>
                                    </div> 
                                    <div className="organizer-bio-info"> 
                                        <p className="mt-1 mb-0 fw-semibold black text-uppercase"><Link to="/Speakerdetail" className="black">Rickey Malone</Link></p>
                                        <small>Speaker</small>
                                    </div> 
                                    </div>
                                    <div className="organizer d-md-flex text-md-start border-0 pb-1">
                                    <div className="organizer-bio-image ">
                                        <Link to="/Speakerdetail"><img src="assets/images/team/2.jpg" alt="team-image" className="me-2 rounded-circle m-sm-0"/></Link>
                                    </div> 
                                    <div className="organizer-bio-info"> 
                                        <p className="mt-1 mb-0 fw-semibold black text-uppercase"><Link to="/Speakerdetail" className="black">JESUS HOLLAND</Link></p> 
                                        <small>Host & Speaker</small>
                                    </div> 
                                    </div>
                                </div>  
                            </div>
                            <div className="event-info-box p-6 box-shadow rounded mb-6">
                                <div className="info-header mb-5">
                                    <h6 className="pb-2">Event Info</h6>
                                    <div className="sperator w-20 m-auto border-bottom border-2 border-pink"></div>
                                </div>
                                <div className="event-info-list">
                                    <div className="event-info d-md-flex text-md-start align-items-center pb-3 mb-3 border-dashed-bottom-2">
                                    <div className="info-icon">
                                        <i className="fa fa-calendar pink me-2 m-sm-0" aria-hidden="true"></i>
                                    </div>
                                    <div className="event-info-detail ms-1 m-sm-0">
                                        <p className="my-1 fw-semibold black text-uppercase">Date</p>
                                        <p className="mb-0">27 September 2024</p>
                                    </div>
                                    </div>
                                    <div className="event-info d-md-flex text-md-start align-items-center pb-3 mb-3 border-dashed-bottom-2">
                                    <div className="info-icon">
                                        <i className="fa fa-clock-o pink me-2 m-sm-0" aria-hidden="true"></i>
                                    </div>
                                    <div className="event-info-detail ms-1 m-sm-0">
                                        <p className="my-1 fw-semibold black text-uppercase">Time</p>
                                        <p className="mb-0">9:00AM - 17:00PM</p>
                                    </div>
                                    </div>
                                    <div className="event-info d-md-flex text-md-start align-items-center mb-3 border-0">
                                    <div className="info-icon">
                                        <i className="fa fa-map-o pink me-2 m-sm-0" aria-hidden="true"></i>
                                    </div>
                                    <div className="event-info-detail ms-1 m-sm-0">
                                        <p className="my-1 fw-semibold black text-uppercase">Venue</p>
                                        <p className="mb-0">Jakarta Garden City Hall, Room</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="map">
                                    <iframe height="200" className="rounded w-100" src="https://maps.google.com/maps?width=100%25&amp;hl=en&amp;q=+(mangal%20bazar)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                </div>
                            </div> 
                            <div className="contact-us-outer position-relative rounded">
                                <div className="overlay"></div>
                                <div className="contact-us  px-6 py-8 position-relative text-white">
                                    <h4 className="mb-4 text-white">Need Help?</h4>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <div className="contact-btn">
                                    <Link className="btn btn3" to="/Contact">Contact Us<i className="fa fa-long-arrow-right ms-4"></i></Link>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        {/*--Event Detail Section end--*/}
        
    </div>
  )
}

export default Eventdetail