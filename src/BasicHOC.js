import  React, {Component} from 'react'
import "./LoadingHOC.css";



const BasicHoc = (WarppedComponent) =>{
    return class BasicHoc extends Component {
        constructor(props){
            super(props)
            this.state={
                load : false
            }
        }
        componentDidMount(){
            setTimeout(()=>{
           this.setState({
               load : true
           })
            },2000)
        }
        render(){
           return  ( this.state.load=== false? <div class="loader"></div> : <WarppedComponent{...this.props}/>)
        }}}
        export default BasicHoc;