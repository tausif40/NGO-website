import React from 'react'
import FinanceDashboard from '@/components/Finance/Dashboard/Dashboard'
import { Attendance } from '@/components/Common/Attendance/Attendance'

function page() {
  return (
    <>
      {/* <div className='mb-6'>
        <Attendance />
      </div> */}
      <FinanceDashboard />
    </>
  )
}

export default page