import React,{Component}from'react'
import Movie from './Movie'
import './Movies.scss'
import Rating from './Rating'
import AddMovie from './AddMovie'
import BasicHOC from './BasicHOC'

class Movies extends Component{
    constructor(props){
        super(props)
        this.state={ 
            stars : 0,
            userText : '',
            themovies : [
                {
                    id : 1 ,
                    name : 'Super hero' ,
                    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXQLuhXTAIXNO8BoV0bRbIikLEZ5hQdbLrAdLP06MQVwsVgmhew',
                    rating : 2
            
                },
                {
                    id : 2,
                    name : 'Titanic' ,
                    image : 'data:image/jpeg;base64,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',
                    rating : 5
                },
                {
                    id : 3,
                    name : 'Harry potter' ,
                    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThB_LC9SHpC8Ds1uG8oP1V1MKa34inhXIHV-pCRFptccComC_ODg',
                    rating : 4 
                },
                {
                    id : 4 ,
                    name : 'Ghost' ,
                    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5JMGdljHrcaOopcTOtK01DetvTvnhwlJpFL9as3zmEIx5BSRBhA',
                    rating : 1 
                },
                {
                    id : 5 ,
                    name : 'Casablanca' ,
                    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyk4rBXOQM9R_s7pcHgjuDyx0W-WNr_i6yMz9hPdE4Qj3DM5lPMQ',
                    rating : 3 
                }
              
            ]}
            
        }
        removeFilm = (idToRemove) =>{
            this.setState({
                themovies: this.state.themovies.filter(
                  el => el.id !== idToRemove
                )
              })
            
        }
        AddFilm = (newMovie)=>{
            this.setState({
                themovies : this.state.themovies.concat(newMovie)
                    
                })
            
        }
        searchFilm = (event) =>{
            this.setState({userText : event.target.value})
        }
        changeRate = (n) => {
            this.setState({
              stars :n
            })
              }
       
    
    render(){
        return(
            <main>
                <div className='search'>  
                    <input type='text'
                        value={this.state.userText}
                        onChange={this.searchFilm}
                        placeholder="Search..."
                        className='input-search'
                    /> 
                    <span>
                        <Rating
                          RatingStars={this.changeRate}
                          rating = {this.state.stars}
                        />
                        
                    </span>

                </div>
                <div className='movies'>

                   {this.state.themovies.filter(el => el.name.toLowerCase().includes(this.state.userText.toLowerCase().trim()) && (this.state.stars <= el.rating))
                   .map((el)=>(

                        <Movie 
                        onDelete={ this.removeFilm}
                          id={el.id}
                        el={el}
                        

                       />
                    )

                    )}
                    <AddMovie
                    onAjoute={this.AddFilm}
                    
                    />
                    
                </div>
            </main>
        )
    }
}
export default BasicHOC(Movies);