import React from 'react'
import SideDrawer from '../components/Sidebar/SideDrawer'
import CoinsPage2 from '../components/CoinsPage'
function CoinsPage() {
    return (
        <>
            <SideDrawer>
                <CoinsPage2 />
            </SideDrawer>
        </>
    )
}

export default CoinsPage