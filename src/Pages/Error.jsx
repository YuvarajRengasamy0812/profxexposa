import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Pagehelmet from '../Components/Pagehelmet'

function Error() {
  return (
    <div>
        <Pagehelmet pageTitle="404 Errors" />
        <Breadcrumb title="404 Error" />
        {/*--Error Section start--*/} 
        <section className="error position-relative">
        <div className="container">
            <div className="overlay"></div>
            <div className="inner-error text-center position-relative">
                <div className="error-heading mb-4">
                    <h1 className="mb-4 text-white">OOOPS.</h1>
                    <h4 className="pink">The page you were looking for couldn't be found.</h4>
                </div>  
                <div className='line-container py-4'>
                    <div className='line-icon text-blue align-items-center'><i className="fa fa-star-o" aria-hidden="true"></i></div>
                </div>
                <div className="search">
                    <p className="mb-4">You can navigate through our menu or use this search bar:</p>
                    <div className="searchbar d-flex justify-content-center">
                    <input type="search" id="form1" className=" mb-0 w-lg-50 rounded-end-0 " placeholder="Search..."/>
                        <button type="button" className="btn rounded-start-0" data-mdb-ripple-init>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>      
                </div>
            </div>
        </div>
        </section>
        {/*--Error Section end--*/} 
    </div>
  )
}

export default Error