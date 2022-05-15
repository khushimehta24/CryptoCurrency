import React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { useNavigate } from "react-router";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import '../../Assets/SideDrawer.css'
import NewspaperIcon from '@mui/icons-material/Newspaper';


function NarrowDrawer() {
    const navigate = useNavigate()
    return (
        <div style={{ overflowX: 'hidden' }}>
            <List>
                <ListItem button onClick={() => navigate('/')}>
                    <ListItemIcon>
                        <DashboardIcon sx={{ color: '#b0785e' }} />
                    </ListItemIcon>
                </ListItem>
            </List>
            <List>
                <ListItem button onClick={() => navigate('/coins')} >
                    <ListItemIcon>
                        <CurrencyBitcoinIcon sx={{ color: '#b0785e' }} />
                    </ListItemIcon>
                </ListItem>
            </List>
            <List>
                <ListItem button onClick={() => navigate('/news')} >
                    <ListItemIcon>
                        <NewspaperIcon sx={{ color: '#b0785e' }} />
                    </ListItemIcon>
                </ListItem>
            </List>
            <Divider />
        </div>
    )
}

export default NarrowDrawer