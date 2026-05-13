import React from 'react'
import Countdown from '../Components/Countdown'
import Pagehelmet from '../Components/Pagehelmet'

function Comingsoon() {
  return (
    <div>
        <Pagehelmet pageTitle="Coming Soon" />
        <section className="text-center coming-soon position-relative vh-100 d-flex align-items-center">
            <div className="overlay"></div>
            <div className="container">
                <div className="coming-soon-inner w-lg-80 m-auto position-relative">
                    <div className="logo">
                        <img src="assets/images/logo/1.png" alt="Eventen logo" className="w-25 mb-6"/>
                    </div>
                    <div className="coming-soon-title">
                        <h1 className="text-white mb-6">Something Awesome is coming</h1>
                        <h4 className="text-white mb-2">Keep wating to get more awesome things</h4>
                    </div>
                    <div className="py-2 mb-2">
                        <div className="divider-pattern pt-3"></div>
                    </div> 
                    <div className="coming-countdown my-6">
                        <Countdown />  
                    </div> 
                    <div className="footer-socials pb-5">
                        <ul className="m-0 p-0 d-flex gap-2 justify-content-center">
                            {['facebook', 'twitter', 'google', 'instagram', 'youtube-play'].map((icon, i) => (
                            <li key={i} className="d-inline">
                                <a href="#" className="d-inline-block rounded-circle text-center  align-middle bg-white  bg-opacity-25">
                                    <i className={`fa fa-${icon}`}></i>
                                </a>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className="copyright pt-4">
                        <p className="text-white">Copyright {new Date().getFullYear()} Eventen. All Rights Reserved Copyright</p>
                    </div>
                </div>  
            </div>  
        </section>
    </div>
  )
}

export default Comingsoon