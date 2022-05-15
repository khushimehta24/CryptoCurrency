import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from "react-router";
// import '../../Assets/SideDrawer.css'
import NarrowDrawer from './NarrowDrawer'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import BroadDrawer from './BroadDrawer'
import { Grid } from '@mui/material'

const drawerWidth = 240;
const narrowDrawerWidth = 60;

const MuiPaper_root_MuiDrawer_paper = {

    display: { xs: 'none', sm: 'block' },
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box', backgroundColor: '#222430', color: ' #b0785e',
        width: narrowDrawerWidth, margin: '10px', borderRadius: '10px'
    },
    '& .MuiPaper-root': {
        border: '2px solid #b0785e5c !important',
        height: '97% !important',
    }
}

const MuiPaper_root_MuiDrawer_paper2 = {

    display: { xs: 'none', sm: 'block' },
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: drawerWidth, margin: '10px', borderRadius: '10px', backgroundColor: '#222430', color: ' #b0785e'
    },
    '& .MuiPaper-root': {
        border: '2px solid #b0785e5c !important',
        height: '97% !important',
    }
}



function ResponsiveDrawer(props) {
    let navigate = useNavigate()


    const { windows } = props
    const [mobileOpen, setMobileOpen] = useState(false)
    const { children } = props
    const [value, setValue] = useState(0)
    const [openDrawer, setOpenDrawer] = useState(true)

    const theme = useTheme()
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    }

    const [anchorEl, setAnchorEl] = React.useState(null)

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const narrowDrawer = (
        <NarrowDrawer />
    )

    const drawer = (
        <BroadDrawer />
    )

    const container =
        windows !== undefined ? () => windows().document.body : undefined

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ flexGrow: 1, display: { md: 'none', sm: 'none', xs: 'flex' }, backgroundColor: 'black', width: { xs: `100%` }, backgroundColor: '#F5F6F8', boxShadow: 'none', color: 'black' }}

            >
                <Toolbar sx={{ display: { md: 'none', sm: 'none', xs: 'flex' }, backgroundColor: 'black', color: ' #b0785e' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bolder' }}>
                        LOGO
                    </Typography>
                </Toolbar>
                {/* {children} */}
            </AppBar>
            <Box component="nav" sx={{ width: { sm: narrowDrawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth, backgroundColor: 'black', color: ' #b0785e'
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                {
                    openDrawer ? <Drawer
                        variant="permanent"
                        className='borderSidebar'
                        sx={MuiPaper_root_MuiDrawer_paper}
                        open
                    >
                        <Grid onClick={() => setOpenDrawer(!openDrawer)} sx={{ display: 'flex', justifyContent: 'center', padding: '20%', cursor: 'pointer' }}>
                            <ChevronRightIcon />
                        </Grid>
                        {narrowDrawer}
                    </Drawer> : <Drawer
                        variant="permanent"
                        className='borderSidebar'
                        sx={MuiPaper_root_MuiDrawer_paper2}
                        open
                    >
                        <Grid onClick={() => setOpenDrawer(!openDrawer)} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '2% 4%', cursor: 'pointer' }}>
                            <ChevronLeftIcon />
                            <p>Minimize</p>
                        </Grid>
                        {drawer}
                    </Drawer>
                }

            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${narrowDrawerWidth}px)` },
                }}
            >
                <Toolbar sx={{ display: { md: 'none', sm: 'none', xs: 'block' } }} />
                <Grid>
                    {children}
                </Grid>
            </Box>

        </Box>
    )
}

ResponsiveDrawer.propTypes = {
    windows: PropTypes.func,
}

export default ResponsiveDrawer