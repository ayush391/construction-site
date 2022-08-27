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
        <Card variant='outlined' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    //   image="https://5.imimg.com/data5/UG/LM/IN/SELLER-61231887/ultratech-cement-500x500.jpg"
                    image={props.img}
                    alt={props.title + " image"}
                />
                <CardContent>
                    <Typography variant="h5" align='left' component="div">
                        {/* Ultratech Cement 5 kg */}
                        {props.title}
                    </Typography>

                    <Typography gutterBottom variant="body2" align='left' color="text.secondary">
                        {/* UltraTech Cement Limited is an Indian cement company based in Mumbai, and a part of Aditya Birla Group. UltraTech is the largest manufacturer of grey cement, ready-mix concrete and white cement in India with an installed capacity of 116.75 million tonnes per annum. */}
                        {props.description}
                    </Typography>
                    {/* <Grid display='flex' flexDirection='column' columns={2}> */}
                    <div sx={{ display: 'flex', flexDirection: 'row'}}>
                        <Typography variant="h6" color='text.secondary' sx={{alignSelf:'flex-end', fontSize: '1rem', marginTop: '1rem' }}>
                            {/* Rs.400 */}
                            Rating :<span> </span>
                            <Typography variant="h6" color='red'  display='inline-block'>
                                {/* Rs.400 */}
                                {props.rating}<StarIcon fontSize='1rem' color='yellow'></StarIcon>
                            </Typography>
                        </Typography>
                        <Typography variant="h6"  color='text.secondary' sx={{alignSelf:'flex-start', fontSize: '1rem', marginTop: '1rem' }}>
                            {/* Rs.400 */}
                            Starting at<span> </span>
                            <Typography variant="h6" color='red' display='inline-block'>
                                {/* Rs.400 */}
                                Rs.{props.price}
                            </Typography>
                        </Typography>
                    </div>
                    {/* </Grid> */}
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" color="primary" variant='contained' sx={{ width: '50%', fontWeight: '600' }}>
                    Hire
                </Button>
                <Button size="small" color="primary" variant='contained' sx={{ width: '50%', fontWeight: '600' }}>
                    Add to Wishlist
                </Button>
            </CardActions>
        </Card >
    );
}
