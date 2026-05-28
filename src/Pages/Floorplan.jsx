import React, { useState } from 'react'
import FloorPlanAfrica from '../Components/FloorPlanAfrica'
import PageHelmet from '../Components/Pagehelmet'
import Breadcrumb from '../Components/Breadcrumb'
import FloorPlanImage from '../Components/FloorPlanImage'

const tabs = [
  { id: 'interactive', label: 'Interactive Floor Plan' },
  { id: 'image', label: '2D Floorplan' },
]

const Floorplan = () => {
  const [activeTab, setActiveTab] = useState('interactive')

  return (
    <>
      <div>
        <PageHelmet pageTitle="Floorplan" />
        <Breadcrumb title="Floorplan" />

        {/* Premium Toggle */}
        <div className="d-flex justify-content-center pt-4 pb-2">
          <div
            style={{
              display: 'inline-flex',
              background: '#f1f3f5',
              borderRadius: '50px',
              padding: '5px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '1px solid #e0e0e0',
              gap: '4px',
            }}
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '10px 28px',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '14px',
                    letterSpacing: '0.3px',
                    transition: 'all 0.25s ease',
                    background: isActive
                      ? 'linear-gradient(135deg, #c9a227 0%, #a07d1a 100%)'
                      : 'transparent',
                    color: isActive ? '#fff' : '#555',
                    boxShadow: isActive
                      ? '0 2px 12px rgba(160,125,26,0.4)'
                      : 'none',
                  }}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {activeTab === 'interactive' ? <FloorPlanAfrica /> : <FloorPlanImage />}
      </div>
    </>
  )
}

export default Floorplan
