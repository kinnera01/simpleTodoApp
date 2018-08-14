import React, { Component } from "react";
import "./Form.css";
import {List} from '../../components/List';
import Jumbotron from "../../components/Jumbotron";
import {Button} from 'react-materialize'
class Form extends Component {
  // Setting the component's initial state
  constructor(){
    super();
  this.state = {
    items:"",
    listofitems:[]
  };
  this.delete = this.delete.bind(this);
  }
  delete(id){
    this.setState(prevState => ({
      listofitems: prevState.listofitems.filter(el => el !== id )
    }));
 }
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
     items: "",
     listofitems: [...this.state.listofitems, this.state.items]
    });
  };
  delete = item => {
    var array = [...this.state.listofitems]; // make a separate copy of the array
  var index = array.indexOf(item)
  array.splice(index, 1);
  this.setState({listofitems: array});
  };
  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
 <div>
      <Jumbotron>
       
        </Jumbotron>
        <div class="main">
    
            <form className="form">
                <div className="row">
                    <div className="input-field col m8">
                    <input
            value={this.state.items}
            name="items"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Add Items"/>  
                    </div>
                    <div className="input-field col m2">
                    <Button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleFormSubmit}>Submit
            </Button>
                    </div>
                </div>
            </form>
        </div>
        {this.state.listofitems.length ? (
            <ul>
              {this.state.listofitems.map((item, index) => (
              <List  key={index}>
                 {item} 
                    <Button id="delbtn" style={{ height: '45px',float: 'right' }}
                      onClick={() => this.delete(item)}><i className="material-icons right">delete</i></Button>
                </List>
              ))}
              </ul>
              ):(<p></p>)}
       
      </div>
    );
  } 
}

export default Form;
