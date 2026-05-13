import React, { useState, useEffect } from "react";
import Breadcrumb from '../Components/Breadcrumb';
import { Link, useLocation } from 'react-router-dom';
import Pagehelmet from '../Components/Pagehelmet';
import { BadgeCheck } from 'lucide-react';
import { getAllBlog } from "../api/blog";

function Blogsingle() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    getAllBlog()
      .then((res) => setBlogList(res?.data?.items || []))
      .catch((err) => console.log(err));
  }, []);

  // Parse blog data from query string
  const blogData = {
    id: params.get('id'),
    title: params.get('title'),
    subheading: params.get('subheading'),
    author: params.get('author'),
    date: params.get('date'),
    image: params.get('image'),
    details: params.get('details'),
    tags: params.get('tags') ? params.get('tags').split(',') : [],
  };

  // Filter recent posts excluding the current blog
  const recentPosts = blogList.filter(b => b.id.toString() !== blogData.id);

  return (
    <div>
      <Pagehelmet pageTitle={blogData.title || "Blog Single"} />
      <Breadcrumb title={blogData.title || "Blog Single"} />

      <section className="news-single">
        <div className="container">
          <div className="news-single-inner">
            <div className="row gx-lg-5 gy-5">
              <div className="col-lg-8">
                <div className="news-left">
                  <div className="news-img mb-4">
                    <img
                      src={blogData.image || 'assets/images/blogs/1.png'}
                      alt={blogData.title}
                      className="w-100 rounded"
                    />
                  </div>
                  <div className="news-description pb-4">
                    <h4 className="mb-4">{blogData.title}</h4>
                    <p>{blogData.subheading}</p>
                    <div dangerouslySetInnerHTML={{ __html: blogData.details }} />
                    {/* <p className="d-flex align-items-center mb-4 gap-3">
                      <BadgeCheck className="pink" /> <strong className="pink">Author: {blogData.author}</strong>
                    </p> */}
                  </div>

                  <div className="qoutation p-4 bg-lightgrey rounded d-flex align-items-center mb-4 text-center text-md-start">
                    <div className="qoutation-img">
                      <img src="assets/images/blogs/organiser.jpeg" alt="Organizer" className="rounded-circle" />
                    </div>
                    <div className="qoutation-info ms-4">
                      <h6 className="pink my-1">{blogData.author}</h6>
                      <p>
                        {blogData.author} is a Forex enthusiast and organizer, dedicated to fostering
                        innovation and collaboration in the Forex space.
                      </p>
                    </div>
                  </div>

                  <div className="comment-form mb-6">
                    <h2 className="mb-4 pink">Leave a reply</h2>
                    <form>
                      <p>Your email address will not be published. Required fields are marked *</p>
                      <label htmlFor="comment">Comment*</label>
                      <textarea id="comment" rows="8" className="mb-3"></textarea>
                      <label htmlFor="name">Name*</label>
                      <input type="text" id="name" className="mb-3" />
                      <label htmlFor="email">Email*</label>
                      <input type="email" id="email" className="mb-3" />
                      <label htmlFor="website">Website</label>
                      <input type="text" id="website" className="mb-3" />
                      <input type="checkbox" id="cookie-concent" className=" mb-1" />
                      <label htmlFor="cookie-concent" className="mb-2">
                        Save my name, email, and website in this browser for the next time I comment.
                      </label>
                      <br />
                      <button className="btn">
                        <small>Post Comment</small>
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="news-right">
                  <div className="about-organizer p-6 box-shadow rounded text-center mb-6">
                    <div className="organizer-title mb-3">
                      <h6>About Organizers</h6>
                    </div>
                    <div className="sperator mb-6 w-20 border-bottom border-2 border-pink m-auto"></div>
                    <div className="organizer-image">
                      <img src="assets/images/blogs/organiser.jpeg" alt="Organizer" className="rounded-circle mb-3" />
                    </div>
                    <div className="organizer-bio pb-5 mb-4 border-bottom border-2 border-grey border-opacity-25 border-bottom-dashed">
                      <h6 className="mb-1">{blogData.author}</h6>
                      <p className="mb-0 w-80 m-auto">
                        <small>
                          {blogData.author} is a Forex enthusiast and organizer of the PROFX
                          Summit 2026, dedicated to fostering innovation and collaboration in the Forex space.
                        </small>
                      </p>
                    </div>
                  </div>

                  {/* Recent Posts */}
                  <div className="recent-post-box p-6 box-shadow rounded mb-6">
                    <h6 className="mb-2">Recent Posts</h6>
                    <div className="sperator w-20 border-bottom border-2 border-pink mb-5"></div>
                    <div className="recent-post-list">
                      <div className="row">
                        {recentPosts.slice(0, 3).map(post => {
                          const subheadingField = post.custom_fields?.find(f => f.label === 'subheading')?.value || '';
                          return (
                            <div key={post.id} className="col-lg-12 col-md-6">
                              <div className="recent-post d-flex align-items-center mb-4">
                                <div className="post-img">
                                  <Link
                                    to={`/Blogsingle?id=${post.id}&title=${encodeURIComponent(post.title)}&subheading=${encodeURIComponent(subheadingField)}&author=${encodeURIComponent(post.custom_fields?.find(f => f.label === 'Organizers')?.value || '')}&date=${post.date}&image=${post.image}&details=${encodeURIComponent(post.details)}`}
                                  >
                                    <img
                                      src={post.image}
                                      alt={post.title}
                                      className="me-3"
                                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                    />
                                  </Link>
                                </div>
                                <div className="post-detail">
                                  <Link
                                    to={`/Blogsingle?id=${post.id}&title=${encodeURIComponent(post.title)}&subheading=${encodeURIComponent(subheadingField)}&author=${encodeURIComponent(post.custom_fields?.find(f => f.label === 'Organizers')?.value || '')}&date=${post.date}&image=${post.image}&details=${encodeURIComponent(post.details)}`}
                                    className="black fw-bold text-uppercase"
                                  >
                                    {post.title}
                                  </Link>
                                  <p className="mb-0"><small>{post.date}</small></p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="social-media-links pb-5">
                    <h6 className="mb-2">Social Media</h6>
                    <div className="sperator w-20 border-bottom border-2 border-pink mb-5"></div>
                    <div className="social-media-inner">
                      <div className="row g-3">
                        <div className="col-6">
                          <a
                            href="https://www.facebook.com/share/qVva5zrCuYdkqGJJ/?mibextid=qi2Omg"
                            className="btn rounded-3 p-2 text-capitalize w-100 text-start"
                          >
                            <i className="fa fa-facebook-official rounded mx-2 me-3" aria-hidden="true"></i>
                            Facebook
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="https://x.com/profx_media" className="btn rounded-3 p-2 text-capitalize w-100 text-start">
                            <i className="fa fa-twitter rounded mx-2 me-3" aria-hidden="true"></i>Twitter
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="https://wa.me/+971588845033" className="btn rounded-3 p-2 text-capitalize w-100 text-start">
                            <i className="fa fa-whatsapp rounded mx-2 me-3" aria-hidden="true"></i>WhatsApp
                          </a>
                        </div>
                        <div className="col-6">
                          <a
                            href="https://www.linkedin.com/company/profxmedia/"
                            className="btn rounded-3 p-2 text-capitalize w-100 text-start"
                          >
                            <i className="fa fa-linkedin-square rounded mx-2 me-3" aria-hidden="true"></i>LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar end */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogsingle;
