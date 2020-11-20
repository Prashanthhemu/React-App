import React,{Component} from 'react';

// function Greet() {
//     return <h1>Hello Prashanth</h1>
// }

// const Greet = props =>{
//     console.log(props)
// return <h1>Hello {props.name}</h1>
// } 

// class Greet extends Component{

// render(){
//     return(
//         <h1>Hello {this.props.name}</h1>
//     );
// }
// }


class Greet extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome'
        }
    }
    
    changeEvent(){
        const {value}=this.props
    this.setState({
        message:'Thank you for subscribing '+value
    })
    }
        
    render(){
        return(
            <div>
                <h1>Hello {this.state.message}</h1>
                <button onClick={()=>this.changeEvent()}>Subscribe</button>
            </div> 
            
        );
    }
    }
export default Greet