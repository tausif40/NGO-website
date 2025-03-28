import React from 'react'
import HRDashboard from '@/components/HR/Dashboard/Dashboard'
import { Attendance } from '@/components/Common/Attendance/Attendance'

function page() {
  return (
    <>
      {/* <div className='mb-6'>
        <Attendance />
      </div> */}
      <HRDashboard />
    </>
  )
}

export default page