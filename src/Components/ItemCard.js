import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ItemCard(props) {
  return (
    <Card sx={{ width: 340 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width='200'
        //   image="https://5.imimg.com/data5/UG/LM/IN/SELLER-61231887/ultratech-cement-500x500.jpg"
          image={props.img}
          alt={props.title+ " image"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" align='center' component="div">
            {/* Ultratech Cement 5 kg */}
            {props.title}
          </Typography>

          <Typography gutterBottom variant="h6" align='center' color='red' component="div">
            {/* Rs.400 */}
            Rs.{props.price}
          </Typography>
          <Typography variant="body2" align='center' color="text.secondary">
          {/* UltraTech Cement Limited is an Indian cement company based in Mumbai, and a part of Aditya Birla Group. UltraTech is the largest manufacturer of grey cement, ready-mix concrete and white cement in India with an installed capacity of 116.75 million tonnes per annum. */}
          {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" color="primary"  variant='contained' sx={{ width: '50%', height: '3rem', fontWeight: '600' }}>
                    Buy
                </Button>
                
            </CardActions>
    </Card>
  );
}
