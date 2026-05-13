import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import { Link } from 'react-router-dom'
import Pagehelmet from '../Components/Pagehelmet'

function Searchresult() {
  return (
    <div>
        <Pagehelmet pageTitle="Search Result" />
        <Breadcrumb title="Search Result" />


        {/*-- Search Result section start --*/}
    `    <section className="search-result pb-0">
        <div className="container">
            <div className="search-result-inner">
            <div className="results">
                <div className="row g-md-5 gy-4">
                <div className="col-lg-4 col-md-6">
                    <div className="blog-box border border-1 rounded pb-2 text-center">
                    <div className="blog-info border-bottom p-4">
                        <h5 className="mb-5"><Link to="/Blogsingle" className="black">THE TOP MUSIC FESTIVAL IN NEW YORK CITY</Link></h5>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        <a className="text-uppercase pink" href="news-single.html"><small>Continue reading</small></a>
                    </div>  
                    <div className="pt-2 blog-data">
                        <span className="px-4  border-end "><small>April 3, 2023 </small></span><span className="px-4"><small>No Comments</small> </span> 
                    </div>  
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blog-box border border-1 rounded pb-2 text-center ">
                    <div className="blog-info border-bottom p-4">
                        <h5 className="mb-5"><Link to="/Blogsingle" className="black">Live interviews from conference</Link></h5>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        <a className="text-uppercase pink" href="news-single.html"><small>Continue reading</small></a>
                    </div>  
                    <div className="pt-2 blog-data">
                        <span className="px-4  border-end "><small>April 3, 2023 </small></span><span className="px-4"><small>No Comments</small> </span> 
                    </div>  
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blog-box border border-1 rounded pb-2 text-center ">
                        <div className="blog-info border-bottom p-4">
                            <h5 className="mb-5"><Link to="/Blogsingle" className="black">Resistration for openging workforce</Link></h5>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        <a className="text-uppercase pink" href="news-single.html"><small>Continue reading</small></a>
                        </div>  
                        <div className="pt-2 blog-data">
                        <span className="px-4  border-end "><small>April 3, 2023 </small></span><span className="px-4"><small>No Comments</small> </span> 
                        </div>  
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blog-box border border-1 rounded pb-2 text-center ">
                    <div className="blog-info border-bottom p-4">
                        <h5 className="mb-5"><Link to="/Blogsingle" className="black">Connect with coperate party planners</Link></h5>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        <a className="text-uppercase pink" href="news-single.html"><small>Continue reading</small></a>
                    </div>  
                    <div className="pt-2 blog-data">
                        <span className="px-4  border-end "><small>April 3, 2023 </small></span><span className="px-4"><small>No Comments</small> </span> 
                    </div>  
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blog-box border border-1 rounded pb-2 text-center ">
                    <div className="blog-info border-bottom p-4">
                        <h5 className="mb-5"><Link to="/Blogsingle" className="black">Engaging in person virtual, & hybrid events.</Link></h5>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        <a className="text-uppercase pink" href="news-single.html"><small>Continue reading</small></a>
                    </div>  
                    <div className="pt-2 blog-data">
                        <span className="px-4  border-end "><small>April 3, 2023 </small></span><span className="px-4"><small>No Comments</small> </span> 
                    </div>  
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blog-box border border-1 rounded pb-2 text-center ">
                    <div className="blog-info border-bottom p-4">
                        <h5 className="mb-5"><Link to="/Blogsingle" className="black">"Good steps to make a best business" planners</Link></h5>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        <a className="text-uppercase pink" href="news-single.html"><small>Continue reading</small></a>
                    </div>  
                    <div className="pt-2 blog-data">
                        <span className="px-4  border-end "><small>April 3, 2023 </small></span><span className="px-4"><small>No Comments</small> </span> 
                    </div>  
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/*-- Search Result section end --*/}

        {/*-- Search again section start --*/}
        <section className="search-again">
        <div className="container">
            <div className="search-again-inner text-center">
            <div className="search-title">
                <h5 className="mb-2">Didn't Find what you were looking for?</h5>
                <h2 className="pink mb-2">Search Again!!</h2>
            </div>
            <div className="searchbar d-flex justify-content-center">
                <input type="search" id="form1" className=" mb-0 w-lg-50 rounded-end-0 " placeholder="Search..."/>
                <button type="button" className="btn rounded-start-0" data-mdb-ripple-init>
                    <i className="fa fa-search"></i>
                </button>
            </div> 
            </div>
        </div>
        </section>
        {/*-- Search again section start --*/}`
    </div>
  )
}

export default Searchresult