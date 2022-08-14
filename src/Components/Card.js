
import React from 'react'
import freelance_img from '../Assets/freelance.jpg'
import online_img from '../Assets/online.jpg'
import Card from 'react-bootstrap/esm/Card'
import ListGroup from 'react-bootstrap/esm/ListGroup'

import 'bootstrap/dist/css/bootstrap.min.css';

const Card_layout = ()=>{
  
    return(
       <div>
        <Card style={{ width: '20%',float:'left',marginLeft:"5%",marginRight:"7%" ,padding:"1%"}}>
      <Card.Img variant="top" src={freelance_img} />
      <Card.Body>
        <Card.Title>Higher Personal Architect</Card.Title>
        <Card.Text>
          Here you can find best Architect for your work 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Lot of options</ListGroup.Item>
        <ListGroup.Item>Reasonable rates</ListGroup.Item>
        <ListGroup.Item>Guranteed results</ListGroup.Item>
      </ListGroup>
      
    </Card>
    <Card style={{ width: '20%' ,padding:"1%" ,marginLeft:"2s%"}}>
      <Card.Img variant="top" src={online_img} />
      <Card.Body>
        <Card.Title>Shop Online </Card.Title>
        <Card.Text>
         Buy your construction material from us
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Top Brands</ListGroup.Item>
        <ListGroup.Item>Genuine rates</ListGroup.Item>
        <ListGroup.Item>A one Quality</ListGroup.Item>
      </ListGroup>
      
    </Card>
       </div>
       
    )
}


export default Card_layout