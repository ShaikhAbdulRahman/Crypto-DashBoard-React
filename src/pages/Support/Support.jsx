import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <SupportCard/>
      <ContactCard/>
    </DashboardLayout>
  )
}

export default Support