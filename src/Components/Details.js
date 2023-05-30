import React, { Component } from 'react'

export default class Details extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (    
      <div>
        <div className='ArrDiv'>
           {    
            
            this.props.Arr ? this.props.Arr.map((item) => {
              return <div className='objDiv'>Name:{item.name} | Department: {item.department} | Rating: {item.rating}</div>
            }) :""
           }
            </div>
            <button onClick={this.props.toggleBtn} style={{marginTop:"5em",width:"8em",height:"5em",fontSize:"1.5em"}}>Back</button>
   
      </div>
    )
  }
}
