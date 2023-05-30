import React, { Component } from 'react'
import './App.css'
import Details from './Components/Details';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      department:"",
      rating:"",
      data:[],
      clickable:true
    }
  }
  toggleFunc = () => {
    console.log("toggleFunc")
    this.setState({clickable:!this.state.clickable})
  }
  // console.log(this.state)
  submit = (e) => {
    e.preventDefault();
    const obj = {
      name:this.state.name,
      department:this.state.department,
      rating:this.state.rating,
    }
    this.state.data.push(obj);
    this.setState({data:this.state.data,name:"",department:"",rating:"",clickable:false});
    console.log(this.state)
    // console.log("handle submit")
    // const {name,department,rating,data} = this.state;
    // console.log(name,department,rating);
    // const newObj = {name,department,rating};
    // console.log(newObj);
    // let abc =[]
    // abc.push(newObj)
    // console.log(abc)
    // this.setState(prevState => ({
    //   data:[...prevState.data,newObj],
    //   name:"",
    //   department:"",
    //   rating:""
    // }))
    // console.log(this.state);
    // this.setState({
    //   name: "",
    //   department: "",
    //   rating: ""
    // })
  }
  render() {
    return (
      
      <div className='App'>
        <h1 className='h1'>Employee Feedback Form</h1>
        {this.state.clickable ? 
        <form onSubmit={this.submit}>
          <label htmlFor='name'>Name : </label>
          <input className="input" onChange={event => this.setState({name:event.target.value})} type='text' id='name' value= {this.state.name} htmlFor="name"></input>
          <br></br><br></br>
          <label htmlFor='department'>Department : </label>
          <input className='input' onChange={event => this.setState({department:event.target.value})} type='text' id='department' value={this.state.department} htmlFor="name"></input>
          <br></br><br></br>
          <label htmlFor='rating'>Rating : </label>
          <input className='input' onChange={event => this.setState({rating:event.target.value})} type='number' id='rating' value={this.state.rating}></input>
          <br></br><br></br>
          <button style={{width:"110px",height:"43px",borderRadius:"8px",backgroundColor:"skyblue",fontSize:"20px"}} id='btn' type='submit'>Submit</button>
        </form>  
        : <Details toggleBtn = {this.toggleFunc} Arr = {this.state.data} />
        }
          {/* <hr style={{backgroundColor:"black",marginTop:"200px",width:"70vw"}}></hr>
           <div className='ArrDiv'>
           {
            
            this.state.data ? this.state.data.map((item) => {
              return <div className='objDiv'>Name:{item.name} | Department: {item.department} | Rating: {item.rating}</div>
            }) :""
           }
            </div> */}
        
      </div>
    )
  }
}
