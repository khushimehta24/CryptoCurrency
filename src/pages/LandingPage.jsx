import React from 'react'
import StatsLanding from '../components/StatsLanding'
import SideDrawer from '../components/Sidebar/SideDrawer'

function LandingPage() {
    return (
        <>
            <SideDrawer>
                <StatsLanding />
            </SideDrawer>
        </>
    )
}

export default LandingPage