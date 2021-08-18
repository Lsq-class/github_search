import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'

export default class App extends Component {
state={data:[]}
returnList=(data)=>{
    this.setState({data:data})

}
    render() {
        
        return (
            <div className="container">
    <Search returnList={this.returnList}/>
    <List data={this.state.data}/>
  </div>

        )
    }
}
