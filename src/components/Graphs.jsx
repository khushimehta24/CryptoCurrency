import React from 'react'
import { useLocation } from 'react-router-dom';
import { useGetPriceStatsQuery } from '../services/FetchApi'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Grid } from '@mui/material';
import millify from 'millify';

const tooltipStyle = {
    borderRadius: '0.25rem',
    background: 'white',
    color: 'black',
    padding: '1rem',
    boxShadow: '15px 15px 15px 5px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    textAlign: 'left'
}



function Graphs(props) {
    const id = props.id;
    const { data, isFetching } = useGetPriceStatsQuery(id)

    const priceCreated = data ? data.prices.map((i) => ({
        'time': i[0],
        'price': i[1]
    })) : ''

    const marketcapCreated = data ? data.market_caps.map((i) => ({
        'marketcap': i[1]
    })) : ''

    const totalVolumesCreated = data ? data.total_volumes.map((i) => ({
        'total_volumes': i[1]
    })) : ''

    const obj = data ? priceCreated.map((price, i) => ({
        ...priceCreated[i], ...marketcapCreated[i], ...totalVolumesCreated[i]
    })) : ''

    console.log(obj);

    return (
        <>
            {
                obj ? <Grid container>
                    <Grid item md={3.8} sx={{ padding: '20px 0px', width: { md: '300px', sm: '100%', xs: '97%' }, height: { md: '300px', sm: '40vh', xs: '30vh' }, backgroundColor: '#222430', borderRadius: '10px', marginBottom: { md: '0', sm: '10%', xs: '10%' } }}>
                        <ResponsiveContainer width="100%" >
                            <AreaChart
                                width={500}
                                height={400}
                                data={obj}
                                margin={{
                                    top: 10,
                                    right: 20,
                                    left: 0,
                                    bottom: 0,
                                }}
                            ><defs>
                                    <linearGradient id='color' x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor='#B0785E' stopOpacity={0.5}></stop>
                                        <stop offset="65%" stopColor='#B0785E' stopOpacity={0.15}></stop>
                                        <stop offset="85%" stopColor='#B0785E' stopOpacity={0.05}></stop>
                                    </linearGradient>
                                </defs>
                                <YAxis axisLine={false} tickLine={false} tickFormatter={str => millify(str)} />
                                <Tooltip contentStyle={tooltipStyle} />
                                <Area type="monotone" dataKey='price' stackId="1" stroke="#B0785E" fill='url(#color)' />
                            </AreaChart>
                        </ResponsiveContainer>

                    </Grid>
                    <Grid md={0.2}></Grid>
                    <Grid item md={3.8} sx={{ padding: '20px 0px', width: { md: '300px', sm: '100%', xs: '97%' }, height: { md: '300px', sm: '40vh', xs: '30vh' }, backgroundColor: '#222430', borderRadius: '10px', marginBottom: { md: '0', sm: '10%', xs: '10%' } }}>
                        <ResponsiveContainer width="100%" >
                            <AreaChart
                                width={500}
                                height={400}
                                data={obj}
                                margin={{
                                    top: 10,
                                    right: 20,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <defs>
                                    <linearGradient id='color3' x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor='#73b4e4' stopOpacity={0.5}></stop>
                                        <stop offset="65%" stopColor='#73b4e4' stopOpacity={0.15}></stop>
                                        <stop offset="85%" stopColor='#73b4e4' stopOpacity={0.05}></stop>

                                    </linearGradient>
                                </defs>
                                <YAxis axisLine={false} tickLine={false} tickFormatter={str => millify(str)} />
                                <Tooltip contentStyle={tooltipStyle} />
                                <Area type="monotone" dataKey='total_volumes' stackId="1" stroke="#73b4e4" fill='url(#color3)' />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Grid>
                    <Grid md={0.2}></Grid>
                    <Grid item md={3.8} sx={{ padding: '20px 0px', width: { md: '300px', sm: '100%', xs: '97%' }, height: { md: '300px', sm: '40vh', xs: '30vh' }, backgroundColor: '#222430', borderRadius: '10px', marginBottom: { md: '0', sm: '10%', xs: '10%' } }}>
                        <ResponsiveContainer width="100%" >
                            <AreaChart
                                width={500}
                                height={400}
                                data={obj}
                                margin={{
                                    top: 10,
                                    right: 20,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <defs>
                                    <linearGradient id='color2' x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor='#07C597' stopOpacity={0.5}></stop>
                                        <stop offset="65%" stopColor='#07C597' stopOpacity={0.15}></stop>
                                        <stop offset="85%" stopColor='#07C597' stopOpacity={0.05}></stop>

                                    </linearGradient>
                                </defs>
                                <YAxis axisLine={false} tickLine={false} tickFormatter={str => millify(str)} />
                                <Tooltip contentStyle={tooltipStyle} />
                                <Area type="monotone" dataKey='marketcap' stackId="1" stroke="#07C597" fill='url(#color2)' />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Grid>
                </Grid> : ''
            }

        </>
    )
}

export default Graphs