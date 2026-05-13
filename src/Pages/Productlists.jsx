import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import { Link } from 'react-router-dom'
import Pagehelmet from '../Components/Pagehelmet'

function Productlists() {
  return (
    <div>
        <Pagehelmet pageTitle="Product Lists" />
        <Breadcrumb title="Product Lists" />

        {/*--Product List Section start--*/}
        <section className="shop">
            <div className="container">
                <div className="shop-inner">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="product-list me-6 m-md-0 pb-6">
                                <div className="product-count-sort d-flex justify-content-between">
                                    <div className="product-count">
                                        <p>Showing all 6 results</p>
                                    </div>  
                                    <div className="sort-wrapper mb-4">
                                        <select name="sort" id="sort" className="px-2 py-1 sort border border-1 border-black border-opacity-50 rounded-2 fs-5">
                                            <option value="menu_order">Default sorting</option>
                                            <option value="popularity">Sort by popularity</option>
                                            <option value="rating">Sort by average rating</option>
                                            <option value="date">Sort by latest</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: high to low</option>
                                        </select>
                                    </div>  
                                </div>
                                <div className="product-left text-center">
                                    <div className="row gy-4">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-box p-3 pb-4 box-shadow rounded me-1 m-md-0">
                                                <div className="product-img mb-5">
                                                    <Link to="/Productdetail"><img src="assets/images/product/1.jpg" alt="Bamboo Bucket" className="w-100 rounded"/></Link>
                                                </div>
                                                <div className="product-info mb-3">
                                                    <h6 className="pb-2"><Link to="/Productsingle" className="black">Bamboo Bucket</Link></h6>
                                                    <span className="pink fw-semibold">$32.00</span>
                                                </div>   
                                                <div className="add-to-cart-btn">
                                                <a className="btn">Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-box p-3 pb-4 box-shadow rounded ms-1 m-md-0">
                                                <div className="product-img mb-5 position-relative">
                                                    <span className="position-absolute translate-middle sale bg-blue rounded text-white py-2 px-4 align-self-center">
                                                    <small>Sale!</small>
                                                    </span>
                                                    <Link to="/Productdetail"><img src="assets/images/product/2.jpg" alt="Bamboo Bucket" className="w-100 rounded"/></Link>
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
                                            <div className="product-box p-3 pb-4 box-shadow rounded me-1 m-md-0">
                                                <div className="product-img mb-5 position-relative">
                                                    <span className="position-absolute translate-middle sale bg-blue rounded text-white py-2 px-4 align-self-center">
                                                    <small>Sale!</small>
                                                    </span>
                                                    <Link to="/Productdetail"><img src="assets/images/product/3.jpg" alt="Bamboo Bucket" className="w-100 rounded"/></Link>
                                                </div>
                                                <div className="product-info mb-3">
                                                    <h6 className="pb-2"><Link to="/Productsingle" className="black">Leather Bag</Link></h6>
                                                    <p className="pink fw-semibold"><span className="text-decoration-line-through opacity-50">$45.00</span> <span className="text-decoration-underline">$40.00</span></p>
                                                </div>  
                                                <div className="add-to-cart-btn">
                                                <a className="btn">Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-box p-3 pb-4 box-shadow rounded ms-1 m-md-0">
                                                <div className="product-img mb-5">
                                                    <Link to="/Productdetail"><img src="assets/images/product/4.jpg" alt="Bamboo Bucket" className="w-100 rounded"/></Link>
                                                </div>
                                                <div className="product-info mb-3">
                                                    <h6 className="pb-2"><Link to="/Productsingle" className="black">Lewis Shirt</Link></h6>
                                                    <span className="pink fw-semibold">$29.00</span>
                                                </div>  
                                                <div className="add-to-cart-btn">
                                                <a className="btn">Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-box p-3 pb-4 box-shadow rounded me-1 m-md-0">
                                                <div className="product-img mb-5">
                                                    <Link to="/Productdetail"><img src="assets/images/product/5.jpg" alt="Bamboo Bucket" className="w-100 rounded"/></Link>
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
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-box p-3 pb-4 box-shadow rounded ms-1 m-md-0">
                                                <div className="product-img mb-5">
                                                    <Link to="/Productdetail"><img src="assets/images/product/6.jpg" alt="Bamboo Bucket" className="w-100 rounded"/></Link>
                                                </div>
                                                <div className="product-info mb-3">
                                                    <h6 className="pb-2"><Link to="/Productsingle" className="black">Yellow Sofa</Link></h6>
                                                    <span className="pink fw-semibold">$89.00</span>
                                                </div>  
                                                <div className="add-to-cart-btn">
                                                <a className="btn">Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                        <div className="col-lg-4">
                            <div className="product-right ms-6 m-md-0">
                                <div className="keyword-search p-6 box-shadow rounded mb-6">
                                    <h6 className="mb-2">Search Keywords</h6>
                                    <div className="sperator mb-5 w-20 border-bottom border-2 border-pink"></div>
                                    <div className="searchbar d-flex">
                                    <input type="search" id="form1" className="bg-lightgrey border-0 p-3 text-grey w-80 rounded-end-0 m-0" placeholder="Search..."/>
                                    <button type="button" className="btn rounded-start-0" data-mdb-ripple-init>
                                        <i className="fa fa-search"></i>
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className="product-gallery p-6 box-shadow rounded mb-6">
                                <h6 className="mb-2">Product Gallery</h6>
                                <div className="sperator m-0 mb-5 w-20 border-bottom border-2 border-pink"></div>

                                <div className="product-gallery-inner ">
                                    <div id="selector1" className="row g-3 ">
                                        <div className="item col-lg-6 col-md-6 position-relative" data-src="assets/images/product/6.jpg">
                                            <a >
                                                <div className="image-overlay rounded mx-1"></div>
                                                <img src="assets/images/product/6.jpg" className="w-100 rounded position-relative" alt="Yellow Sofa"/>
                                            </a>
                                        </div>
                                        <div className="item  col-lg-6 col-md-6 position-relative" data-src="assets/images/product/4.jpg">
                                            <a>
                                                <div className="image-overlay rounded mx-1 "></div>
                                                <img src="assets/images/product/4.jpg" className="w-100 rounded position-relative" alt="Lewis Shirt"/>
                                            </a>
                                        </div>
                                        <div className="item col-lg-6 col-md-6 position-relative" data-src="assets/images/product/5.jpg">
                                            <a>
                                                <div className="image-overlay rounded mx-1"></div>
                                                <img src="assets/images/product/5.jpg" className="w-100 rounded position-relative" alt="London T-Shirt"/>
                                            </a>
                                        </div>
                                        <div className="item  col-lg-6 col-md-6 position-relative" data-src="assets/images/product/3.jpg">
                                            <a>
                                                <div className="image-overlay rounded mx-1"></div>
                                                <img src="assets/images/product/3.jpg" className="w-100 rounded position-relative" alt="Leather Bag"/>
                                            </a>
                                        </div>
                                        <div className="item  col-lg-6 col-md-6 position-relative" data-src="assets/images/product/2.jpg">
                                            <a>
                                                <div className="image-overlay rounded mx-1"></div>
                                                <img src="assets/images/product/2.jpg" className="w-100 rounded position-relative" alt="Ladies Top"/>
                                            </a>
                                        </div>
                                        <div className="item  col-lg-6 col-md-6 position-relative" data-src="assets/images/product/1.jpg">
                                            <a>
                                                <div className="image-overlay rounded mx-1"></div>
                                                <img src="assets/images/product/1.jpg" className="w-100 rounded position-relative" alt="Bamboo Bucket"/>
                                            </a>
                                        </div>
                                    </div> 
                                </div>  
                            </div>  
                            <div className="recent-product-box p-6 pb-2 box-shadow rounded mb-6">
                                <h6 className="mb-2">Recent Products</h6>
                                <div className="sperator m-0 mb-5 w-20 border-bottom border-2 border-pink"></div>
                                <div className="recent-product-list">
                                    <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="recent-product d-flex align-items-center  mb-3">
                                            <div className="product-img">
                                            <Link to="/Productdetail"><img src="assets/images/product/6.jpg" alt="Yellow Sofa" className="rounded me-3"/></Link>
                                            </div>
                                            <div className="product-detail">
                                            <a href="product-single.html" className="black fw-semibold text-uppercase">Yellow Sofa</a>
                                            <p className="mb-0"><small>April 3, 2023</small></p>
                                            </div>  
                                        </div>
                                    </div>  
                                    <div className="col-lg-12 col-md-6">
                                        <div className="recent-product d-flex align-items-center mb-3">
                                            <div className="product-img">
                                            <Link to="/Productdetail"><img src="assets/images/product/3.jpg" alt="Leather Bag" className="rounded me-3"/></Link>
                                            </div>
                                            <div className="product-detail">
                                            <a href="product-single.html" className="black fw-semibold text-uppercase">Leather Bag</a>
                                            <p className="mb-0"><small>April 3, 2023</small></p>
                                            </div>  
                                        </div>
                                    </div>  
                                    <div className="col-lg-12 col-md-6">
                                        <div className="recent-product d-flex align-items-center mb-4">
                                            <div className="product-img">
                                            <Link to="/Productdetail"><img src="assets/images/product/1.jpg" alt="Bamboo Bucket" className="rounded me-3"/></Link>
                                            </div>
                                            <div className="product-detail">
                                                <a href="product-single.html" className="black fw-semibold text-uppercase">Bamboo Bucket</a>
                                            <p className="mb-0"><small>April 3, 2023</small></p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">  
                                        <div className="recent-product d-flex align-items-center mb-4">
                                            <div className="product-img">
                                            <Link to="/Productdetail"><img src="assets/images/product/4.jpg" alt="Lewis Shirt" className="rounded me-3"/></Link>
                                            </div>
                                            <div className="product-detail">
                                            <a href="product-single.html" className="black fw-semibold text-uppercase">Lewis Shirt</a>
                                            <p className="mb-0"><small>April 3, 2023</small></p>
                                            </div>    
                                        </div>
                                    </div>  
                                    </div>  
                                </div>
                            </div>
                            <div className="social-media-links">
                                <h6 className="mb-2">Social Media</h6>
                                <div className="sperator m-0 mb-5 w-20 border-bottom border-2 border-pink"></div>
                                <div className="social-media-inner">
                                    <div className="row g-3">
                                        <div className="col-6">
                                            <a className="btn rounded-3 p-2 text-capitalize w-100 text-start"><i className="fa fa-facebook-official rounded mx-2 me-3" aria-hidden="true"></i>Facebook</a>
                                        </div>
                                        <div className="col-6">
                                            <a className="btn rounded-3 p-2 text-capitalize w-100 text-start"><i className="fa fa-twitter rounded mx-2 me-3" aria-hidden="true"></i>Twitter</a>
                                        </div>
                                        <div className="col-6">
                                            <a className="btn rounded-3 p-2 text-capitalize w-100 text-start"><i className="fa fa-whatsapp rounded mx-2 me-3" aria-hidden="true"></i>WhatsApp</a>
                                        </div>
                                        <div className="col-6">
                                            <a className="btn rounded-3 p-2 text-capitalize w-100 text-start"><i className="fa fa-linkedin-square rounded mx-2 me-3" aria-hidden="true"></i>LinkedIn</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
        {/*--Product List Section end--*/}

    </div>
  )
}

export default Productlists