import React,{Component} from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Movies.scss'
import Rating from './Rating';


const Movie = (props) => {

    return(
        <div className='movie'>
            

            <Card className='card'>
                <CardImg className='movie-image' top width="100%" src={props.el.image} alt="Card image cap" />
                <CardBody>
                <CardTitle> {props.el.name}</CardTitle>
                <CardSubtitle className='stars'>
                    <span>
                        <Rating
                          rating={props.el.rating}
                        />
                        
                    </span>
                </CardSubtitle>
               
                <Button onClick={() => {
                        props.onDelete(props.el.id)
                        }}
                        >
                        Supprimer
                    </Button>
                
                </CardBody>
            </Card>
        </div>
  );
};






export default Movie
