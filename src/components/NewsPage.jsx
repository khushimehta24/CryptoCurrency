import React, { useState } from 'react'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/NewsApi'
import { Card, CardContent, Grid, Button, Avatar, TextField } from '@mui/material'
import { useNavigate } from 'react-router'
import { useGetCryptoStats2Query } from '../services/StatsFetch'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../Assets/TextField.css'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function NewsPage() {
    const { data: data2, isFetching2 } = useGetCryptoStats2Query()
    const navigate = useNavigate()
    const [count, setCount] = useState(20)
    const [show, setShow] = useState(false)


    const openUrl = (url) => {
        window.open(
            url, "_blank");
    }

    const [newsCa, setNewsCa] = useState('Cryptocurrency');
    const { data, isFetching } = useGetCryptoNewsQuery({ newsCategory: newsCa, count: count })

    const handleChange = (event) => {
        setNewsCa(event.target.value);
    };
    console.log(data);
    return (
        <>
            <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Grid item>
                    <h2 style={{ color: 'white' }}>Daily News</h2>
                </Grid>

            </Grid><Grid container>
                <Grid item>
                    <Box sx={{ minWidth: 120, backgroundColor: 'white', borderRadius: '5px', marginBottom: '10%' }}>
                        <FormControl fullWidth>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={newsCa}
                                label=""
                                onChange={handleChange}
                                MenuProps={MenuProps}
                            >

                                <MenuItem value='Cryptocurrency'>Crypto currency</MenuItem>
                                {
                                    data2?.data?.coins.map((coin) => <MenuItem value={coin.name}>{coin.name}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={5}>
                {
                    isFetching ? '' : <>
                        {
                            data.value.map((news, index) => {
                                return <Grid item md={3} sm={6} xs={12} sx={{ width: '100%' }} key={index} >
                                    <Card sx={{ backgroundColor: '#222430', height: '100%', color: 'white', cursor: 'pointer' }} onClick={() => openUrl(news.url)}>
                                        <CardContent >
                                            <Grid container sx={{ display: 'flex', alignItems: 'space-between' }}>
                                                <Grid item md={8}>
                                                    <p style={{ margin: '0', padding: '0', fontSize: '12px', color: 'gray' }}>Name</p>
                                                    <h5 style={{ margin: '0', padding: '0', marginBottom: '3%' }}>{news.name}</h5>
                                                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Grid item sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                            {(news.provider[0].image ? <Avatar alt={news.provider[0].name} src={news.provider[0].image.thumbnail.contentUrl} /> : <Avatar>{news.provider[0].name.charAt(0)}</Avatar>)}
                                                            <p style={{ margin: '0', padding: '0', fontSize: '12px', color: 'gray' }}>{news.provider[0].name}</p>
                                                        </Grid>
                                                        <Grid item>
                                                            <p style={{ margin: '0', padding: '0', fontSize: '12px', color: 'gray' }}>{moment(news.datePublished).startOf('ss').fromNow()}</p>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={4} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                    {
                                                        news.image ? <img src={news.image.thumbnail.contentUrl} style={{ padding: '4px', backgroundColor: 'white' }} alt="" srcset="" /> : ''
                                                    }
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            })
                        }
                    </>
                }
            </Grid>
        </>
    )
}

export default NewsPage