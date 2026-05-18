import React from 'react'
// import FloorPlanDubai from '../Components/FloorPlanDubai'
import PageHelmet from '../Components/Pagehelmet'
import Breadcrumb from '../Components/Breadcrumb'
// import SVGComponent from '../Components/SVGComponent'
import FloorPlanImage from '../Components/FloorPlanImage'

const Floorplan = () => {
    return (
        <>
            <div>
                <PageHelmet pageTitle="Floorplan" />
                <Breadcrumb title="Floorplan" />

                {/* <FloorPlanDubai /> */}
                <FloorPlanImage />
            </div>
        </>
    )
}

export default Floorplan
