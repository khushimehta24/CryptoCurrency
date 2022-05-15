import React from 'react'
import SideDrawer from '../components/Sidebar/SideDrawer'
import Details from '../components/Details'
function DetailsPage() {
  return (
    <>
      <SideDrawer>
        <Details />
      </SideDrawer>
    </>
  )
}

export default DetailsPage