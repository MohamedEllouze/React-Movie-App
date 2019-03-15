import React from 'react'



const Ratingstars = ({star,changeRating = () => {}}) => {
    let arr = []
    for (let i = 0; i < 5; i++) {
      if(i<star){
        arr.push(<span className="star" onClick={()=>changeRating(i+1)}><i class="fas fa-star" style={{color : 'gold'}}> </i></span>)
      }
      else{
        arr.push(<span className="star" onClick={()=>changeRating(i + 1)}><i class="far fa-star"></i></span>)

      }
    }
    
    return <div>{arr}</div>
  }
class Rating extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

   


    render() {
        return (
            <div className="stars">
                <span ><Ratingstars star={this.props.stars} changeRating={this.props.changeRte}/></span>

            </div>
        )
    }
}
export default Rating