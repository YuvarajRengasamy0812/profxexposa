import React from 'react'
import { Link } from 'react-router-dom'

const BlogSection = () => {
    return (
        <>
            <section className="blog">
                <div className="container">
                    <div className="blog-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-6  ">
                                <div className="blog-title text-center text-lg-start p-2">
                                    <p className="mb-1 pink">Our Blogs</p>
                                    <h2 className="mb-1">
                                        READ Our <span className="pink">Blogs </span>TO KNOW MORE
                                    </h2>
                                    <p className="mb-0">
                                        Stay updated with exclusive articles, keynote highlights, speaker interviews, and behind-the-scenes stories from the PROFX SUMMIT.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6  p-2">
                                <div className="blog-button text-center text-lg-end">
                                    <Link to="/Bloglists" className="btn">
                                        VIEW MORE
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="blog-content">
                            <div className="row">
                                <div className=" col-lg-4 p-4 pb-0 d-flex">
                                    <div className="blog-box border border-1 rounded pb-2 text-center d-flex flex-column">
                                        <Link to="/Bloglists">
                                            <img
                                                className="blog-img rounded rounded-bottom-0 w-100 h-auto"
                                                src="assets/images/blogs/1.png"
                                                alt="blog-img"
                                            />
                                        </Link>
                                        <div className="blog-content-area flex-grow-1">
                                            <h5 className="p-4">
                                                <Link to="/Bloglists" className="black">
                                                    How Dubai Is Becoming the Next Global Hub for
                                                    Forex Innovation
                                                </Link>
                                            </h5>
                                            <p className="p-4 pt-0 m-0">
                                                <small>
                                                    Dubai Forex adoption is accelerating across finance, governance,
                                                    and emerging tech. Explore why Dubai is now positioned as a global Forex powerhouse.
                                                </small>
                                            </p>
                                        </div>
                                        <div className="pt-2 bottom-meta mt-auto border-top">
                                            <span className="px-4  border-end ">April 3, 2025 </span>
                                            <span className="px-4">No Comments </span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-lg-4  p-4 pb-0">
                                    <div className="blog-box border border-1 rounded pb-2 text-center">
                                        <Link to="/Bloglists">
                                            <img
                                                className="blog-img rounded w-100 rounded-bottom-0 h-auto"
                                                src="assets/images/blogs/2.png"
                                                alt="blog-img"
                                            />
                                        </Link>
                                        <div className="blog-content-area flex-grow-1">
                                            <h5 className="p-4">
                                                <Link to="/Bloglists" className="black">
                                                    Top Forex Use Cases Transforming Dubai in
                                                    2025
                                                </Link>
                                            </h5>
                                            <p className="p-4 pt-0 m-0">
                                                <small>
                                                    Explore real-use Forex applications transforming Dubai across
                                                    finance, healthcare, supply chain, elections, and business.
                                                </small>
                                            </p>
                                        </div>
                                        <div className="pt-2 bottom-meta mt-auto border-top">
                                            <span className="px-4  border-end ">May 1, 2025 </span>
                                            <span className="px-4">No Comments </span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-lg-4 p-4 pb-0 ">
                                    <div className="blog-box border border-1 rounded pb-2 text-center">
                                        <Link to="/Bloglists">
                                            <img
                                                className="blog-img rounded rounded-bottom-0 w-100 h-auto"
                                                src="assets/images/blogs/3.png"
                                                alt="blog-img"
                                            />
                                        </Link>
                                        <div className="blog-content-area flex-grow-1">
                                            <h5 className="p-4">
                                                <Link to="/Bloglists" className="black">
                                                    Why 2025 Is a Breakthrough Year for Blockchain
                                                    Adoption in Dubai
                                                </Link>
                                            </h5>
                                            <p className="p-4 pt-0 m-0">
                                                <small>
                                                    2025 marks a historic turning point for Dubai Forex industry. Learn
                                                    why this year is critical for investors, fintech, and Forex enterprises.
                                                </small>
                                            </p>
                                        </div>
                                        <div className="pt-2 bottom-meta mt-auto border-top">
                                            <span className="px-4  border-end ">June 5, 2025 </span>
                                            <span className="px-4">No Comments </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogSection