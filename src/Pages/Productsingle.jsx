import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import { Link } from 'react-router-dom'
import Pagehelmet from '../Components/Pagehelmet'
import Thumbnailslider from '../Components/Thumbnailslider'

function Productsingle() {
  return (
    <div>
        <Pagehelmet pageTitle="Product Single" />
        <Breadcrumb title="Product Single" />

        {/*--Main product Section start--*/}
        <section className="main-product pb-0">
            <div className="container">
                <div className="main-product-inner ">
                    <div className="row gx-md-5">
                        <div className="col-lg-5">
                            <div className="main-product-left mb-4">
                                <Thumbnailslider />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="main-product-right text-center text-lg-start">
                                <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb mb-4 justify-content-lg-start justify-content-center">
                                    <li className="breadcrumb-item"><Link to="/" className="pink"><small>Home</small></Link></li>
                                    <li className="breadcrumb-item"><a href="#" className="pink"><small>Clothes</small></a></li>
                                    <li className="breadcrumb-item active" aria-current="page"><small>Lewis Shirt</small></li>
                                </ol>
                                </nav>
                                <div className="product-detail">
                                <h2 className="mb-2">Lewis Shirt</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                                <div className="price">
                                    <h6 className="pink mb-4">$29.00</h6>
                                    <input type="number" value="1" className="border border-1 border-grey rounded-4 p-3 text-grey bg-white pe-1" min="1"/>
                                    <a className="btn ms-2">Add to cart</a>
                                </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*--Main product Section end--*/}

        {/*--Related product Section start--*/}
        <section className="related-product pb-9">
        <div className="container">
            <div className="related-product-inner text-center text-lg-start">
            <div className="row gx-md-5">
                <div className="col-lg-6 order-2 order-lg-1">
                <div className="related-product-list text-center pb-5">
                    <h5 className="mb-4 text-lg-start">Releated Products</h5>
                    <div className="row gx-md-5 gy-5">
                    <div className="col-lg-6 col-md-6">
                        <div className="product-box p-4 pb-4 box-shadow rounded ms-1 m-md-0">
                        <div className="product-img mb-5 position-relative">
                            <small><span className="position-absolute translate-middle sale rounded text-white fw-bold">
                                Sale!
                                </span></small>
                            <Link to="/Productsingle"><img src="assets/images/product/2.jpg" alt="Bamboo Bucket" className="w-100 rounded"/></Link>
                        </div>
                        <div className="product-info mb-3">
                            <h6 className="pb-2"><Link to="/Productsingle" className="black">Ladies Top</Link></h6>
                            <p className="pink fw-semibold"><span className="text-decoration-line-through opacity-50">$21.00</span> <span className="text-decoration-underline">$18.00</span></p>
                        </div>   
                        <div className="add-to-cart-btn">
                        <a className="btn">Add To Cart</a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="product-box p-4 pb-4 box-shadow rounded me-1 m-md-0">
                        <div className="product-img mb-5">
                            <Link to="/Productsingle"><img src="assets/images/product/5.jpg" alt="Bamboo Bucket" className="w-100 rounded"/></Link>
                        </div>
                        <div className="product-info mb-3">
                            <h6 className="pb-2"><Link to="/Productsingle" className="black">London T-shirt</Link></h6>
                            <span className="pink fw-semibold">$25.00</span>
                        </div>  
                        <div className="add-to-cart-btn">
                        <a className="btn">Add To Cart</a>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>  
                <div className="col-lg-6 order-1 order-lg-2">
                <div className="related-product-info">  
                    <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active fw-semibold text-uppercase  py-2 px-4 ms-2 text-grey border border-1 border-grey border-opacity-75 bg-lightgrey" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Description</button>
                        <button className="nav-link fw-semibold text-uppercase py-2 px-4 text-grey border border-1 border-grey border-opacity-75 bg-lightgrey" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Reviews (0)</button>
                    </div>
                    </nav>
                    <div className="tab-content text-start" id="nav-tabContent">
                    <div className="tab-pane fade show active p-4 pb-5" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <p className="pink fw-semibold text-uppercase mt-1">Description</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                    </div>
                    <div className="tab-pane fade p-4 pb-5" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <p className="pink fw-semibold text-uppercase mt-1">Reviews</p>
                        <p>There are no reviews yet.</p>
                        <p>Be the first to review “Lewis Shirt” <br/> Your email address will not be published. Required fields are marked *</p>
                        <div className="review-form ">
                        <form>
                            <div className="star-rating mb-3">
                            <label className="mb-1">Your rating *</label> <br/>
                            <i className="fa fa-star me-1 pink" aria-hidden="true" id="rating"></i><i className="fa fa-star me-1 pink" aria-hidden="true"></i><i className="fa fa-star-o me-1 pink" aria-hidden="true"></i><i className="fa fa-star-o me-1 pink" aria-hidden="true"></i><i className="fa fa-star-o me-1 pink" aria-hidden="true"></i>
                            </div>  
                            <label for="review">Your review *</label>
                            <textarea  rows="2" className="mb-3" id="review" required></textarea>
                            <label for="full-name" className="mb-2">Name*</label>
                            <input type="text" id="full-name" className="mb-3" required/>
                            <label for="email" className="mb-2">Email*</label>
                            <input  type="email" id="email" className="mb-3" required/>
                            <input type="checkbox" id="cookie-concent" className=" mb-1"/>
                            <label for="cookie-concent" className="mb-2">Save my name, email, and website in this browser for the next time I comment.</label><br/>
                            <button className="btn">Submit</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/*--Related product Section end--*/}
     </div>
  )
}

export default Productsingle    
