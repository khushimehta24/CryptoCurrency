import { Button, Card, CardContent, Divider, Grid, TextField } from '@mui/material'
import millify from 'millify'
import React, { useEffect, useState } from 'react'
import { useGetCryptoStatsQuery } from '../services/FetchApi'
import '../Assets/TextField.css'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import '../Assets/Link.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const tooltipStyle = {
    borderRadius: '0.25rem',
    background: 'white',
    color: 'black',
    padding: '1rem',
    boxShadow: '15px 15px 15px 5px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    textAlign: 'left'
}


function Coins() {
    const navigate = useNavigate()

    const { data, isFetching } = useGetCryptoStatsQuery()

    console.log(useGetCryptoStatsQuery());
    const [count, setCount] = useState(9)
    const [show, setShow] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [cryptos, setCryptos] = useState(data)
    console.log(cryptos)
    const handleCountFifty = () => {
        setCount(100)
        setShow(true)
    }

    const handleCountNine = () => {
        setCount(9)
        setShow(false)
    }

    useEffect(() => {
        const filteredData = data ? data.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase())) : '';
        setCryptos(filteredData)
    }, [data, searchTerm])



    return (
        <>
            <Grid container sx={{ display: 'flex', alignItems: 'center', marginTop: '4%', justifyContent: 'space-between' }}>
                <Grid item>
                    <h2 style={{ color: 'white' }}>Top 10 Crypto Coins</h2>
                </Grid>
                <Grid item>
                    {
                        show ? <Button onClick={handleCountNine} sx={{ color: '#b0785e' }}>Show Less</Button> : <Button onClick={handleCountFifty} sx={{ color: '#b0785e' }}>Show More</Button>
                    }
                </Grid>
            </Grid>
            {
                show ? <Grid container>
                    <Grid item>
                        <TextField onBlur={() => setSearchTerm('')} className='MuiFilledInput-input MuiInputBase-input css-1476h24' sx={{ backgroundColor: 'white', color: 'black', borderRadius: '5px', marginBottom: '10%' }} id="filled-basic" label="Search Coin" variant="filled" placeholder='search crypto currency' onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
                    </Grid>
                </Grid> : ''
            }
            {
                data ? <Grid container sx={{ marginBottom: '4%' }}>
                    <Grid item md={3.8} sx={{ padding: '20px 0px', width: { md: '300px', sm: '100%', xs: '97%' }, height: { md: '300px', sm: '40vh', xs: '30vh' }, backgroundColor: '#222430', borderRadius: '10px', marginBottom: { md: '0', sm: '10%', xs: '10%' } }}>
                        <ResponsiveContainer width="100%" >
                            <AreaChart
                                width={500}
                                height={400}
                                data={data}
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
                                <Area type="monotone" dataKey='current_price' stackId="1" stroke="#B0785E" fill='url(#color)' />
                            </AreaChart>
                        </ResponsiveContainer>

                    </Grid>
                    <Grid md={0.2}></Grid>
                    <Grid item md={3.8} sx={{ padding: '20px 0px', width: { md: '300px', sm: '100%', xs: '97%' }, height: { md: '300px', sm: '40vh', xs: '30vh' }, backgroundColor: '#222430', borderRadius: '10px', marginBottom: { md: '0', sm: '10%', xs: '10%' } }}>
                        <ResponsiveContainer width="100%" >
                            <AreaChart
                                width={500}
                                height={400}
                                data={data}
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
                                <Area type="monotone" dataKey='market_cap' stackId="1" stroke="#73b4e4" fill='url(#color3)' />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Grid>
                    <Grid md={0.2}></Grid>
                    <Grid item md={3.8} sx={{ padding: '20px 0px', width: { md: '300px', sm: '100%', xs: '97%' }, height: { md: '300px', sm: '40vh', xs: '30vh' }, backgroundColor: '#222430', borderRadius: '10px', marginBottom: { md: '0', sm: '10%', xs: '10%' } }}>
                        <ResponsiveContainer width="100%" >
                            <AreaChart
                                width={500}
                                height={400}
                                data={data}
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
                                <Area type="monotone" dataKey='price_change_percentage_24h' stackId="1" stroke="#07C597" fill='url(#color2)' />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Grid>
                </Grid> : ''
            }

            <Grid container sx={{ color: 'white' }} spacing={5}>

                {
                    cryptos ? cryptos.map((coin, index) => {
                        if (index < count) {

                            return <Grid key={index} item md={3} sm={6} xs={12} sx={{ width: '100%' }}>
                                <Card sx={{ backgroundColor: '#222430', color: 'white' }}>
                                    <CardContent>
                                        <Grid container sx={{ borderBottom: '1px solid #353535', paddingBottom: '10px' }}>
                                            <Grid item md={10} sm={10} xs={10}>
                                                <p style={{ margin: '0', padding: '0', fontSize: '12px', color: 'gray' }}>Name</p>
                                                <h4 style={{ margin: '0', padding: '0' }}>{coin.name}</h4>
                                            </Grid>
                                            <Grid item md={2} sm={2} xs={2} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                                <img src={coin.image} width={40} height={40} style={{ padding: '5px', backgroundColor: 'white', borderRadius: '50%' }} alt="" srcset="" />
                                            </Grid>
                                        </Grid>
                                        <Grid comtainer sx={{ display: 'flex', width: '100%', marginTop: '5%' }}>
                                            <Grid item md={6} sm={6} xs={6} sx={{ borderRight: '1px solid #353535' }}>
                                                <p style={{ margin: '0', padding: '0', fontSize: '12px' }}><span style={{ color: '#E6E6FD' }}>Price : </span>{millify(coin.current_price)}</p>
                                                <p style={{ margin: '0', padding: '0', fontSize: '12px' }}><span style={{ color: '#E6E6FD' }}>Market Cap : </span>{millify(coin.market_cap)}</p>
                                            </Grid>
                                            <Grid item md={6} sm={6} xs={6} sx={{ marginLeft: '5px' }}>
                                                <p style={{ margin: '0', padding: '0', fontSize: '12px', textAlign: 'right' }}><span style={{ color: '#E6E6FD' }}>Daily Change : </span>{millify(coin.price_change_percentage_24h)}%</p>
                                                <p style={{ margin: '0', padding: '0', fontSize: '12px', textAlign: 'right' }}><span style={{ color: '#E6E6FD' }}>Market Cap Rank : </span> {millify(coin.market_cap_rank)}</p>
                                            </Grid>
                                        </Grid>
                                        <Grid container md={12}>
                                            <Link to={"/details"} state={{ data: data, id: coin.id }} className='linkBtn'>Know More</Link>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        }
                    }) : ''
                }
            </Grid>

        </>
    )
}

export default Coins        