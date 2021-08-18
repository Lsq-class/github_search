import React, { Component, createRef } from 'react'
import axios from 'axios'
export default class Search extends Component {

  keywordContarin=React.createRef();

  search=()=>{
    const {value}=this.keywordContarin.current
    //检验是否为空
if(!value.trim()) return alert('输入不能为空')
//点击后页面状态isFirst变成false 
    this.props.updateState({isFirst:false, isLoading:true})
    axios.get(
      `https://api.github.com/search/users?q=${value}`
    ).then(response=>{
      const{items}=response.data
      //数据接收成功后 isLoading变为false
      this.props.updateState({isLoading:false,data:items})

      console.log('成功',items)
    },error=>{
      console.log(error)
      debugger
      //数据接收失败后 isLoading变为false 将error信息传递给父元素
      this.props.updateState({isLoading:false,errorMsg:error.message})
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
