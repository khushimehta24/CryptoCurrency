import React from 'react'
import { useGetDetsStatsQuery } from '../services/FetchApi'
import { styled } from '@mui/material/styles';
import '../Assets/ProgressBar.css'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import millify from 'millify';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 400 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#B0785E' : '#E8E8E8',
    },
}));

function CoinDets(props) {
    const id = props.id
    const { data, isFetching } = useGetDetsStatsQuery(id)
    console.log(useGetDetsStatsQuery(id))
    return (
        <>
            {
                data ? <Grid container sx={{ marginTop: '4%' }}>
                    <Grid item md={3.8} sm={12} xs={12}>
                        <Grid container>
                            <Card sx={{ width: '100%', backgroundColor: '#222430', marginBottom: '8%' }}>
                                <CardContent>
                                    <Grid container>
                                        <Grid item md={5} sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='p' sx={{ margin: '0px', color: '#F1F1F1', fontFamily: 'Poppins', fontWeight: 'bolder', padding: '0px', fontSize: { sm: '15px', xs: '18px' } }}>Total Supply</Typography>
                                            <Typography variant='p' sx={{ margin: '0px', color: '#838383', fontFamily: 'Poppins', fontSize: { md: '12px', sm: '10px', xs: '10px' }, padding: '0px' }}>{millify(data.market_data.total_supply)}</Typography>
                                        </Grid>
                                        <Grid item md={2} sx={{ padding: '2%', display: 'flex', justifyContent: 'center', }}>
                                            <Divider orientation='vertical' />
                                        </Grid>
                                        <Grid item md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <Typography variant='p' sx={{ margin: '0px', color: '#F1F1F1', fontFamily: 'Poppins', fontWeight: 'bolder', padding: '0px', fontSize: { sm: '15px', xs: '18px' } }}>Circulating Supply</Typography>
                                            <Typography variant='p' sx={{ margin: '0px', color: '#838383', fontFamily: 'Poppins', fontSize: { md: '12px', sm: '10px', xs: '10px' }, padding: '0px' }}>{millify(data.market_data.circulating_supply)}</Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Card sx={{ backgroundColor: '#222430', borderRadius: '10px', width: '100%' }}>
                            <CardContent>
                                <p style={{ margin: '0', padding: '0', fontSize: '12px', color: '#F1F1F1' }}>Sentiment Votes Down Percentage [{data.sentiment_votes_down_percentage}%]</p>
                                <BorderLinearProgress variant="determinate" value={data.sentiment_votes_down_percentage} />
                                <p style={{ margin: '0', marginTop: '8%', padding: '0', fontSize: '12px', color: '#F1F1F1' }}>Sentiment Votes Up Percentage [{data.sentiment_votes_up_percentage}%]</p>
                                <BorderLinearProgress variant="determinate" value={data.sentiment_votes_up_percentage} />
                            </CardContent>
                        </Card>
                        <Grid container spacing={2} sx={{ marginTop: '5%' }}>
                            <Grid item md={3} sm={6} xs={6}>
                                <Card sx={{ backgroundColor: '#222430', borderRadius: '10px', height: '100%' }}>
                                    <CardContent>
                                        <p style={{ margin: '0', padding: '0', color: '#A7A7A7', fontSize: '13px' }}>Coingecko Score</p>
                                        <h5 style={{ margin: '0', padding: '0', color: '#F1F1F1' }}>{data.coingecko_score}</h5>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item md={3} sm={6} xs={6}>
                                <Card sx={{ backgroundColor: '#222430', borderRadius: '10px', height: '100%' }}>
                                    <CardContent>
                                        <p style={{ margin: '0', padding: '0', color: '#A7A7A7', fontSize: '13px' }}>Developer Score</p>
                                        <h5 style={{ margin: '0', padding: '0', color: '#F1F1F1' }}>{data.developer_score}</h5>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item md={3} sm={6} xs={6}>
                                <Card sx={{ backgroundColor: '#222430', borderRadius: '10px', height: '100%' }}>
                                    <CardContent>
                                        <p style={{ margin: '0', padding: '0', color: '#A7A7A7', fontSize: '13px' }}>Community Score</p>
                                        <h5 style={{ margin: '0', padding: '0', color: '#F1F1F1' }}>{data.community_score}</h5>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item md={3} sm={6} xs={6}>
                                <Card sx={{ backgroundColor: '#222430', borderRadius: '10px', height: '100%' }}>
                                    <CardContent>
                                        <p style={{ margin: '0', padding: '0', color: '#A7A7A7', fontSize: '13px' }}>Liquidity Score</p>
                                        <h5 style={{ margin: '0', padding: '0', color: '#F1F1F1' }}>{data.liquidity_score}</h5>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ marginTop: '5%' }} spacing={2}>
                            <Grid item md={6} sm={6} xs={6}>
                                <Card sx={{ backgroundColor: '#222430', height: '100%', borderRadius: '10px', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <CardContent sx={{ padding: '20px 0' }}>
                                        <CircularProgressbar
                                            value={data.market_data.market_cap_change_percentage_24h}
                                            text={`${data.market_data.market_cap_change_percentage_24h}%`}
                                            strokeWidth={7}
                                        />
                                        <p style={{ margin: '0', marginTop: '10px', padding: '0', color: '#A7A7A7', fontSize: '13px' }}>Market Cap Change Percentage</p>

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item md={6} sm={6} xs={6}>
                                <Card sx={{ backgroundColor: '#222430', height: '100%', padding: '0', borderRadius: '10px', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <CardContent sx={{ padding: '20px 0' }}>
                                        <CircularProgressbar
                                            value={data.market_data.price_change_percentage_24h}
                                            text={`${data.market_data.price_change_percentage_24h}%`}
                                            strokeWidth={7}
                                        />
                                        <p style={{ margin: '0', marginTop: '10px', padding: '0', color: '#A7A7A7', fontSize: '13px' }}>Price Change Percentage</p>

                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={0.2}></Grid>
                    <Grid item md={7.8} sm={12} xs={12} sx={{ width: '70vw', marginTop: { md: '0', sm: '5%', xs: '5%' } }}>
                        <Card sx={{ backgroundColor: '#222430', height: '100%', borderRadius: '10px' }}>
                            <CardContent>
                                <h3 style={{ margin: '0', padding: '0', color: '#F1F1F1' }}>Description</h3>
                                <p style={{ margin: '0', padding: '0', color: '#A7A7A7', fontSize: '13px' }}>{data.description.en}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid> : ''
            }

        </>
    )
}

export default CoinDets