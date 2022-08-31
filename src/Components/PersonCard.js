import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { fontWeight } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';

export default function Person(props) {
    return (
        <Card variant = 'elevation' sx={{ maxWidth: 340, minWidth: 300, backgroundColor: '#e6e6e970' }}>
            <CardActionArea>
                <CardMedia
                    align='center'
                    component="img"
                    height="330"
                    //   image="https://5.imimg.com/data5/UG/LM/IN/SELLER-61231887/ultratech-cement-500x500.jpg"
                    image={props.img}
                    alt={props.title + " image"}
                    sx={{
                        // width:300,
                        borderRadius: 100,
                        padding: 2,
                        paddingBottom: 1
                    }}
                />
                <CardContent>
                    <Typography variant="h5" align='center' component="div" sx={{ fontWeight: '700', fontSize:'1.8rem' }}>
                        {/* Ultratech Cement 5 kg */}
                        {props.title}
                    </Typography>

                    <Typography gutterBottom variant="body3" align='center' color="text.secondary">
                        {/* UltraTech Cement Limited is an Indian cement company based in Mumbai, and a part of Aditya Birla Group. UltraTech is the largest manufacturer of grey cement, ready-mix concrete and white cement in India with an installed capacity of 116.75 million tonnes per annum. */}
                        {props.description}
                    </Typography>
                    {/* <Grid display='flex' flexDirection='column' columns={2}> */}
                    
                    <Typography variant="h5" color='#e69500' align='center' margin={2} sx={{ fontWeight: '600' }}>
                        {props.rating}<StarIcon fontSize='1rem' color='yellow'></StarIcon>
                    </Typography>

                    <Typography variant="h6" color='red' align='center'sx={{ fontWeight: '600' }}>
                        Rs.{props.price}/hour
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" color="primary"  variant='contained' sx={{ width: '50%', height: '3rem', fontWeight: '600' }}>
                    Hire
                </Button>
                <Button size="small" color="primary" variant='contained' sx={{ width: '50%', height: '3rem', fontWeight: '600' }}>
                    Add to Wishlist
                </Button>
            </CardActions>
        </Card >
    );
}
