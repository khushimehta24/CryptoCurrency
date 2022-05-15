import { Button, Card, CardContent, Divider, Grid, TextField } from '@mui/material'
import millify from 'millify'
import React, { useEffect, useState } from 'react'
import { useGetCryptoStatsQuery } from '../services/FetchApi'
import '../Assets/TextField.css'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import '../Assets/Link.css'

function CoinsPage() {
    const navigate = useNavigate()

    const { data, isFetching } = useGetCryptoStatsQuery()
    console.log(useGetCryptoStatsQuery());
    const [count, setCount] = useState(100)
    const [show, setShow] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [cryptos, setCryptos] = useState(data)


    useEffect(() => {
        const filteredData = data ? data.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase())) : '';
        setCryptos(filteredData)
    }, [data, searchTerm])



    return (
        <>
            <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Grid item>
                    <h2 style={{ color: 'white' }}>Top 10 Crypto Coins</h2>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <TextField onBlur={() => setSearchTerm('')} className='MuiFilledInput-input MuiInputBase-input css-1476h24' sx={{ backgroundColor: 'white', color: 'black', borderRadius: '5px', marginBottom: '10%' }} id="filled-basic" label="Search Coin" variant="filled" placeholder='search crypto currency' onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
                </Grid>
            </Grid>
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

export default CoinsPage        