import React, { Component, createRef } from 'react'
import axios from 'axios'
export default class Search extends Component {

  keywordContarin=React.createRef();

  search=()=>{
    const {value}=this.keywordContarin.current
    axios.get(
      `https://api.github.com/search/users?q=${value}`
    ).then(response=>{
      const{items}=response.data
      this.props.returnList(items)
      console.log('成功',items)
    },error=>{
      console.log('失败了',error)
    })
    
    console.log(value)
  }
    render() {
        return (
            <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
              <input type="text" ref={this.keywordContarin} placeholder="enter the name you search"/>&nbsp;<button onClick={this.search}>Search</button>
            </div>
          </section>
        )
    }
}
