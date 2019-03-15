import React, { Component } from 'react';
import { Form, Input, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import './Movies.scss';
const uuidv3 = require('uuid/v3');
class AddMovie extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          nestedModal: false,
          closeAll: false,
          name:'',
          image:'',
          rating:'',
       
        };
    
        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
      }
     
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }
  changeName=(event)=>{
      this.setState({
          name : event.target.value
      })
  }
  changeImage=(event)=>{
    this.setState({
        image : event.target.value
    })
}
changeRating=(event)=>{
    this.setState({
        rating : event.target.value
    })
}

  render() {
    return (
        <div className="movie add-movie">
            <div className="card ajouter">          
                <a  onClick={this.toggle}><img src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-128.png'></img></a>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add a film</ModalHeader>
                    <ModalBody>
                    <Form>
                        <Input placeholder="Name ..." bsSize="lg" onChange={this.changeName} />
                        <Input placeholder="Link ..." bsSize="lg" onChange={this.changeImage} />
                        <Input type="select" bsSize="lg" placeholder="Rating ..." onChange={this.changeRating}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                        
                    </Form>
                        <br />
                        <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                        <ModalHeader>Nested Modal title</ModalHeader>
                        <ModalBody>Stuff and things</ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
                            <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
                        </ModalFooter>
                        </Modal>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" 
                        onClick={()=>{this.props.onAjoute(
                            {
                                id : uuidv3('hello.example.com', uuidv3.DNS)  ,
                                name : this.state.name ,
                                image : this.state.image,
                                rating : this.state.rating 
                            }
                        );
                        this.toggle();
                        }}>Submit</Button>{' '}
                        <Button color="secondary" onClick={()=>{this.toggle();  } 
                        }>Cancel</Button>
                    </ModalFooter>
                </Modal> 
            
            </div>
      </div>
    );
  }
}

export default AddMovie;