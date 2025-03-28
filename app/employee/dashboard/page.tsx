import React from 'react'
import EmployeeDashboard from '@/components/Employee/Dashboard/Dashboard'
import { Attendance } from '@/components/Common/Attendance/Attendance'

function page() {
  return (
    <>
      {/* <div className='mb-6'>
        <Attendance />
      </div> */}
      <EmployeeDashboard />
    </>
  )
}

export default page