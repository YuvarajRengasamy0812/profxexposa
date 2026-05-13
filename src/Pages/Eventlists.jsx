import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Pagehelmet from '../Components/Pagehelmet'
import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'
import CalendarSection from '../Components/CalendarSection '
import TabbedDays from '../Components/TabbedDays'
import SchedulesSection from '../Components/SchedulesSection'

function Eventlists() {
  return (
    <div>
        <Pagehelmet pageTitle="Agenda" />
        <Breadcrumb title="Agenda" />
        
        {/* --Agenda Calendar start-- */}
        <CalendarSection />
        {/* --Agenda Calendar End-- */}

        <TabbedDays />

        {/*--Schedules Section start--*/}
        <SchedulesSection />
        {/*--Schedules Section end--*/}
    </div>
  )
}

export default Eventlists