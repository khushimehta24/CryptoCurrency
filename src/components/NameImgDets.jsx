import React from 'react'
import { useGetDetsStatsQuery } from '../services/FetchApi'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Avatar, Card, CardContent, CardMedia, Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';


function NameImgDets(props) {
    const id = props.id
    const { data, isFetching } = useGetDetsStatsQuery(id)
    console.log(useGetDetsStatsQuery(id))

    const rank = data ? `${data.market_data.market_cap_rank} Market Cap Rank ` : ''
    return (
        <>
            {
                data ?
                    <Grid container sx={{ display: 'flex', alignItems: 'center', width: '100%', marginBottom: '2%' }}>
                        <Grid item md={4} sm={4} xs={4} container sx={{ display: 'flex', alignItems: 'center' }}>
                            <Grid item md={1} sx={4} xs={4} sm={{ backgroundColor: '#222430', marginRight: '1%', borderRadius: '50%', padding: '10px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={data.image.thumb} style={{ borderRadius: '50%' }} />
                            </Grid>
                            <Grid item md={11} sm={8} xs={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                <h4 style={{ fontFamily: 'Poppins', textTransform: 'capitalize', color: '#F1F1F1', margin: '0', padding: '0' }}>{data.name}</h4>
                            </Grid>
                        </Grid>
                        <Grid item md={8} sm={8} xs={8} container sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                            <Grid item md={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Chip
                                    sx={{ color: '#F1F1F1', backgroundColor: '#222430', fontSize: { md: '15px', xs: '10px' } }}
                                    avatar={<Avatar alt="Natacha" src="https://www.pngitem.com/pimgs/m/304-3046712_award-gold-golden-badge-prize-honor-ribbon-hd.png" />}
                                    label={rank}
                                    deleteIcon={<DeleteIcon />}
                                />
                            </Grid>
                        </Grid>

                    </Grid>
                    : ''
            }

        </>
    )
}

export default NameImgDets