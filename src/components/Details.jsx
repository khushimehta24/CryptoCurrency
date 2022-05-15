import { Box } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
import CoinDets from './CoinDets';
import Graphs from './Graphs';
import NameImgDets from './NameImgDets';

function Details(props) {
    const location = useLocation();
    const id = location.state.id;
    const dataArray = location.state.data;

    return (
        <>
            <NameImgDets id={id} />
            <Graphs id={id} />
            <CoinDets id={id} />
        </>
    )
}

export default Details