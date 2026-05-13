import React, { useState, useEffect, useRef } from "react";
import Breadcrumb from '../Components/Breadcrumb';
import { Link } from 'react-router-dom';
import Pagehelmet from '../Components/Pagehelmet'
import { getAllBlog } from "../api/blog";

function Bloglists() {

    const [blog, setBlog] = useState([]);


    useEffect(() => {
        getBlogList();
    }, []);

    const getBlogList = () => {
        getAllBlog()
            .then((res) => setBlog(res?.data?.items || []))
            .catch((err) => console.log(err));
    };

    const getSubheading = (customFields) => {
        const sub = customFields?.find(f => f.label === "subheading");
        return sub?.value || "";
    };
    return (
        <div>
            <Pagehelmet pageTitle="Blog Lists" />
            <Breadcrumb title="Blog Lists" />

            {/*--News Archive Section start*/}
            <section className="news-archive">
                <div className="container">
                    <div className="news-archive-inner">
                        <div className="row gy-5">
                            <div className="col-lg-8">
                                <div className="news-left me-4 m-md-0">
                                    <div className="row g-md-5 gy-5">
                                        {blog.map((blogs, i) => {
                                            const subheading = getSubheading(blogs.custom_fields);

                                            // Map custom fields for convenience
                                            const customFieldsMap = {};
                                            blogs.custom_fields?.forEach(f => {
                                                customFieldsMap[f.label] = f.value;
                                            });

                                            // Build query params
                                            const query = new URLSearchParams({
                                                id: blogs.id,
                                                title: blogs.title,
                                                subheading: customFieldsMap["subheading"] || '',
                                                author: customFieldsMap["Organizers"] || '',
                                                date: blogs.date,
                                                image: blogs.image,
                                                details: blogs.details,
                                                tags: (blogs.tags || []).join(',')
                                            });

                                            return (
                                                <div key={i} className="col-lg-6 col-md-6">
                                                    <div className="blog-box border border-1 rounded pb-2 text-center">
                                                        <div className="blog-img">
                                                            <Link to={`/Blogsingle?${query.toString()}`}>
                                                                <img
                                                                    className="blog-img rounded-top w-100 h-auto"
                                                                    src={blogs.image}
                                                                    alt="blog-img"
                                                                />
                                                            </Link>
                                                        </div>
                                                        <div className="blog-info p-4">
                                                            <h5 className="mb-2">
                                                                <Link to={`/Blogsingle?${query.toString()}`} className="black">
                                                                    {blogs.title}
                                                                </Link>
                                                            </h5>
                                                            <p className="mb-2">{subheading}</p>
                                                        </div>
                                                        <div className="pt-2 blog-data mt-auto border-top">
                                                            <span className="px-4 border-end"><small>{blogs.date}</small></span>
                                                            <span className="px-4"><small>No Comments</small></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}



                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="news-right">
                                    <div className="about-organizer p-6 box-shadow rounded text-center mb-6">
                                        <div className="organizer-title mb-3">
                                            <h6>About Organizers</h6>
                                        </div>
                                        <div className="sperator mb-6 w-20 border-bottom border-2 border-pink m-auto"></div>
                                        <div className="organizer-image">
                                            <img src="assets/images/blogs/organiser.jpeg" alt="Organizer" className=" rounded-circle mb-3" />
                                        </div>
                                        <div className="organizer-bio pb-5 mb-4 border-bottom border-2 border-grey border-opacity-25 border-bottom-dashed">
                                            <h6 className="mb-1">Hi, Dawood Sha</h6>
                                            <p className="mb-0 w-80 m-auto">
                                                <small>
                                                    Dawood Sha is a Forex enthusiast and organizer of the PROFX SUMMIT Dubai 2026,
                                                    dedicated to fostering innovation and collaboration in the Forex space.
                                                </small>
                                            </p>
                                        </div>
                                        <div className="organizer-socials pb-5">
                                            <ul className="m-0 p-0 d-flex gap-2 justify-content-center">
                                                {['facebook', 'twitter', 'google', 'instagram', 'youtube-play'].map((icon, i) => (
                                                    <li key={i} className="d-inline">
                                                        <a href="#" className="d-inline-block rounded-circle text-grey border border-1 border-grey">
                                                            <i className={`fa fa-${icon}`}></i>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="recent-post-box p-6 box-shadow rounded mb-6">
                                        <h6 className="mb-2">Recent Posts</h6>
                                        <div className="sperator w-20 border-bottom border-2 border-pink mb-5"></div>

                                        <div className="recent-post-list">
                                            <div className="row">

                                                {blog.slice(0, 3).map((post, index) => (

                                                    <div key={index} className="col-lg-12 col-md-6">
                                                        <div className="recent-post d-flex align-items-center mb-4">

                                                            <div className="post-img">
                                                                <Link to={`/Blogsingle/${post.id}`}>
                                                                    <img
                                                                        src={post.image}
                                                                        alt="Blog Image"
                                                                        className="me-3"
                                                                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                                                    />
                                                                </Link>
                                                            </div>

                                                            <div className="post-detail">
                                                                <Link
                                                                    to={`/Blogsingle/${post.id}`}
                                                                    className="black fw-bold text-uppercase"
                                                                >
                                                                    {post.title}
                                                                </Link>
                                                                <p className="mb-0">
                                                                    <small>{post.date}</small>
                                                                </p>
                                                            </div>

                                                        </div>
                                                    </div>

                                                ))}

                                            </div>
                                        </div>
                                    </div>

                                    <div className="social-media-links pb-5">
                                        <h6 className="mb-2">Social Media</h6>
                                        <div className="sperator w-20 border-bottom border-2 border-pink mb-5"></div>
                                        <div className="social-media-inner">
                                            <div className="row g-3">
                                                <div className="col-6">
                                                    <a href='https://www.facebook.com/share/qVva5zrCuYdkqGJJ/?mibextid=qi2Omg' className="btn rounded-3 p-2 text-capitalize w-100 text-start"><i className="fa fa-facebook-official rounded mx-2 me-3" aria-hidden="true"></i>Facebook</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href='https://x.com/profx_media' className="btn rounded-3 p-2 text-capitalize w-100 text-start"><i className="fa fa-twitter rounded mx-2 me-3" aria-hidden="true"></i>Twitter</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href='https://wa.me/+971588845033' className="btn rounded-3 p-2 text-capitalize w-100 text-start"><i className="fa fa-whatsapp rounded mx-2 me-3" aria-hidden="true"></i>WhatsApp</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href='https://www.linkedin.com/company/profxmedia/' className="btn rounded-3 p-2 text-capitalize w-100 text-start"><i className="fa fa-linkedin-square rounded mx-2 me-3" aria-hidden="true"></i>LinkedIn</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*--News Archive Section end*/}
        </div>
    )
}

export default Bloglists