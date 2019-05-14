import React, { Component } from 'react'

export class ToDoInputPanel extends Component {
    constructor( ){
        super();
        this.state={
            name:''
        }
    }

    onInputChangeFn = (event)=>{
        this.setState({
            name : event.target.value
        })
    }
  render() {
    return (
        <form onSubmit= {(event)=>{this.props.addlistfn(event,this.state.name);this.setState({
            name : ''
        })}}>
            <input name="firstname" placeholder="Provide list name" value={this.state.name} type="text" onChange = {this.onInputChangeFn}/>
            <button type="submit" >Add</button>

        </form>
        
    )
  }
}

export default ToDoInputPanel
