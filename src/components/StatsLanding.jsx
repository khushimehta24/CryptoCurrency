import { Grid } from '@mui/material';
import millify from 'millify';
import React from 'react'
import { useGetCryptoStats2Query } from '../services/StatsFetch';
import Coins from './Coins';
import News from './News';

function StatsLanding() {
    const { data, isFetching } = useGetCryptoStats2Query()
    console.log(data);

    return (
        <>
            {
                data ? <>
                    <Grid container sx={{ color: 'white', display: 'flex', gap: '10px' }} >
                        <Grid item md={2} sm={5.5} xs={12} sx={{ backgroundColor: '#222430', borderTop: '3px solid #b0785e5c', borderRadius: '5px', padding: '20px' }}>
                            <p style={{ margin: '0', padding: '0', fontSize: '12px', color: 'gray' }}>Total</p>
                            <h2 style={{ margin: '0', padding: '0' }}>{millify(data.data.stats.total)}</h2>
                        </Grid>
                        <Grid item md={2} sm={5.5} xs={12} sx={{ backgroundColor: '#222430', borderTop: '3px solid #b0785e5c', borderRadius: '5px', padding: '20px' }}>
                            <p style={{ margin: '0', padding: '0', fontSize: '12px', color: 'gray' }}>Total 24h Volume</p>
                            <h2 style={{ margin: '0', padding: '0' }}>{millify(data.data.stats.total24hVolume)}</h2>
                        </Grid>
                        <Grid item md={2} sm={5.5} xs={12} sx={{ backgroundColor: '#222430', borderTop: '3px solid #b0785e5c', borderRadius: '5px', padding: '20px' }}>
                            <p style={{ margin: '0', padding: '0', fontSize: '12px', color: 'gray' }}>Total Coins</p>
                            <h2 style={{ margin: '0', padding: '0' }}>{millify(data.data.stats.totalCoins)}</h2>
                        </Grid>
                        <Grid item md={2} sm={5.5} xs={12} sx={{ backgroundColor: '#222430', borderTop: '3px solid #b0785e5c', borderRadius: '5px', padding: '20px' }}>
                            <p style={{ margin: '0', padding: '0', fontSize: '12px', color: 'gray' }}>Total Exchanges</p>
                            <h2 style={{ margin: '0', padding: '0' }}>{millify(data.data.stats.totalExchanges)}</h2>
                        </Grid>
                        <Grid item md={2} sm={5.5} xs={12} sx={{ backgroundColor: '#222430', borderTop: '3px solid #b0785e5c', borderRadius: '5px', padding: '20px' }}>
                            <p style={{ margin: '0', padding: '0', fontSize: '12px', color: 'gray' }}>Total Market Cap</p>
                            <h2 style={{ margin: '0', padding: '0' }}>{millify(data.data.stats.totalMarketCap)}</h2>
                        </Grid>
                        <Grid item md={1.5} sm={5.5} xs={12} sx={{ backgroundColor: '#222430', borderTop: '3px solid #b0785e5c', borderRadius: '5px', padding: '20px' }}>
                            <p style={{ margin: '0', padding: '0', fontSize: '12px', color: 'gray' }}>Total Markets</p>
                            <h2 style={{ margin: '0', padding: '0' }}>{millify(data.data.stats.totalMarkets)}</h2>
                        </Grid>
                    </Grid>

                    <Coins />
                    <News />
                </> : ''
            }

        </>
    )
}

export default StatsLanding