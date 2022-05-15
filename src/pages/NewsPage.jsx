import React from 'react'
import SideDrawer from '../components/Sidebar/SideDrawer'
import NewsPage2 from '../components/NewsPage'
function NewsPage() {
    return (
        <>
            <SideDrawer>
                <NewsPage2 />
            </SideDrawer>
        </>
    )
}

export default NewsPage