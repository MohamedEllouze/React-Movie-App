import React from 'react'

export default function Rating(props) {
    let arr=[]
for(let i=0;i<5;i++)
{
    if(i<props.rating)
    {
       arr.push(<span onClick={() => {props.RatingStars(i+1)}}><i class="fas fa-star" style={{color : 'gold'}} > </i></span>)
                       
    }
    else{
        arr.push(<span onClick={() => {props.RatingStars(i+1)}}><i class="far fa-star"  ></i></span>)
    }
}


  return (
    <div>
    {arr}
    </div>
  )
}

