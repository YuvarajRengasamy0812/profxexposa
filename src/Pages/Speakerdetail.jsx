import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Pagehelmet from '../Components/Pagehelmet'
import { Link } from 'react-router-dom'

function Speakerdetail() {
  return (
    <div>
        <Pagehelmet pageTitle="Speaker Detail" />
        <Breadcrumb title="Speaker Detail"/>

        {/*-- Speaker Detail section starts --*/}
        <section className="speaker-detail">
            <div className="container">
                <div className="inner-speaker-detail text-center text-md-start">
                    <div className="row gx-md-5 gy-5">
                        <div className="col-lg-7">
                            <div className="speaker-detail-left py-2">
                                <div className="biography">
                                <h5 className="mb-2">Biography</h5>
                                <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p className="mb-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <div className="speaker-skill-list mb-6">
                                    <div className="row gx-md-5">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="speaker-skill-left">
                                                <div className="speaker-skill mb-4">
                                                    <span className="fw-semibold black text-uppercase">Marketing Skill</span>
                                                    <div className="progress rounded bg-grey" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: '15px' }}>
                                                    <div className="progress-bar text-end pe-2 bg-pink" style={{ width: '94%' }}>94%</div>
                                                    </div>
                                                </div>
                                                <div className="speaker-skill mb-4">
                                                    <span className="fw-semibold black text-uppercase">Business Skill</span>
                                                    <div className="progress rounded bg-grey" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: '15px' }}>
                                                    <div className="progress-bar text-end pe-2 bg-pink" style={{ width: '87%' }}>87%</div>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="speaker-skill-right">
                                                <div className="speaker-skill mb-4">
                                                    <span className="fw-semibold black text-uppercase">Idealogy Skill</span>
                                                    <div className="progress rounded bg-grey" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: '15px' }}>
                                                    <div className="progress-bar text-end pe-2 bg-pink" style={{ width: '90%' }}>90%</div>
                                                    </div>
                                                </div>
                                                <div className="speaker-skill mb-4">
                                                    <span className="fw-semibold black text-uppercase">Marketing Skill</span>
                                                    <div className="progress rounded bg-grey" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: '15px' }}>
                                                    <div className="progress-bar text-end pe-2 bg-pink" style={{ width: '92%' }}>92%</div>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="personal-info">
                                    <h5 className="mb-2">Personal Info</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5"> 
                        <div className="speaker-detail-right box-shadow p-6 rounded">
                            <div className="speaker-img ">
                                <img src="assets/images/speakers/1.jpg" alt="speaker" className="rounded-circle border border-4 border-lightgrey object-fit-cover"/>
                            </div>
                            <div className="speaker-bio mb-4">
                                <h5 className="my-1">Gerardo Kels</h5>
                                <p><small>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</small></p>
                                <div className="social-links speaker-socials">
                                    <ul className="m-0 p-0 d-flex gap-2">
                                        {['facebook', 'twitter', 'google', 'instagram', 'youtube-play'].map((icon, i) => (
                                        <li key={i} className="d-inline">
                                            <a href="#" className="d-inline-block rounded-circle bg-white  bg-opacity-25">
                                            <i className={`fa fa-${icon}`}></i>
                                            </a>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="speaker-contact-info text-start">
                            <div className="contact-info-list d-flex align-items-center pb-4 mb-4 border-dashed-bottom-1">
                                <div className="contact-icon me-4">
                                <i className="fa fa-envelope-o pink" aria-hidden="true"></i>
                                </div>
                                <div className="contact-detail">
                                <span className="fw-semibold black text-uppercase my-1 lh-base">Email Address</span>
                                <a><p className="m-0">gerardo@eventen.com</p></a>
                                </div>  
                            </div>
                            <div className="contact-info-list d-flex align-items-center pb-4 mb-4 lh-base border-dashed-bottom-1">
                                <div className="contact-icon me-4">
                                <i className="fa fa-volume-control-phone pink" aria-hidden="true"></i>
                                </div>
                                <div className="contact-detail">
                                <span className="fw-semibold black text-uppercase my-1">Phone No.</span>
                                <a><p className="m-0">+01 234 567 890</p></a>
                                </div>  
                            </div>
                            <div className="contact-info-list d-flex align-items-center pb-4 lh-base border-0">
                                <div className="contact-icon me-4">
                                <i className="fa fa-map-marker pink" aria-hidden="true"></i>
                                </div>
                                <div className="contact-detail">
                                <span className="fw-semibold black text-uppercase my-1 lh-base">Address</span>
                                <a><p className="m-0">24 Callison Lane Boy, New Street, NY</p></a>
                                </div>  
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*-- Speaker Detail section ends --*/}

        {/*-- Event History section starts --*/}
        <section className="event-history p-0">
            <div className="container">
                <div className="event-history-inner text-center">
                    <div className="event-history-title w-lg-60 m-auto pb-4">
                        <h2 className="mb-1"><span className="pink">Event</span> History</h2>
                        <p className="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="event-history-list text-md-start pb-9">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                            <div className="event-list-box bg-lightgrey py-7 px-6 rounded mb-4">
                                <h5 className="mb-4"><Link to="/Eventdetail" className="black">Digital Marketing Session</Link></h5>
                                <p className="mb-4"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</small></p>
                                <div className="time-location">
                                <ul className="m-0 p-0 d-lg-flex list-unstyled">
                                    <li className="me-2 p-0 m-sm-0"><i className="fa fa-calendar pink me-2" aria-hidden="true"></i><small>April 21, 2019</small></li>
                                    <li><i className="fa fa-thumb-tack pink me-2" aria-hidden="true" ></i><small>Exploration Hall</small></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                            <div className="event-list-box bg-lightgrey py-7 px-6 rounded mb-4">
                                <h5 className="mb-4"><Link to="/Eventdetail" className="black">Designer Expo Meetup 2021</Link></h5>
                                <p className="mb-4"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</small></p>
                                <div className="time-location">
                                <ul className=" m-0 p-0 d-lg-flex list-unstyled">
                                    <li className="me-2 p-0 m-sm-0"><i className="fa fa-calendar pink me-2" aria-hidden="true"></i><small>March 10, 2020</small></li>
                                    <li><i className="fa fa-thumb-tack pink me-2" aria-hidden="true" ></i><small>Exploration Hall</small></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                            <div className="event-list-box bg-lightgrey py-7 px-6 rounded mb-4">
                                <h5 className="mb-4"><Link to="/Eventdetail" className="black">Spokesman in the world 2022</Link></h5>
                                <p className="mb-4"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</small></p>
                                <div className="time-location">
                                <ul className="m-0 p-0 d-lg-flex list-unstyled">
                                    <li className="me-2 p-0 m-sm-0"><i className="fa fa-calendar pink me-2" aria-hidden="true"></i><small>Jan 15, 2022</small></li>
                                    <li><i className="fa fa-thumb-tack pink me-2" aria-hidden="true" ></i><small>Exploration Hall</small></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
        {/*-- Event History section ends --*/}
    </div>
  )
}

export default Speakerdetail