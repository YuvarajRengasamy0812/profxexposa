import React from 'react'
import FloorPlanDubai from '../Components/FloorPlanDubai'
import PageHelmet from '../Components/Pagehelmet'
import Breadcrumb from '../Components/Breadcrumb'
import SVGComponent from '../Components/SVGComponent'

const Floorplan = () => {
    return (
        <>
            <div>
                <PageHelmet pageTitle="Floorplan" />
                <Breadcrumb title="Floorplan" />

                <FloorPlanDubai />
            </div>
        </>
    )
}

export default Floorplan