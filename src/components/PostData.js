import React, { Component } from 'react'
import axios from 'axios'


class PostData extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: 'Test id',
            title: 'Test title'
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(data=>{
            console.log(data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <label>User Id</label>
                    <input type="text" name="userId" value={this.state.userId} onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}></input>
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        )
    }
}

export default PostData
