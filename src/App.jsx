import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'

export default class App extends Component {
state={
    data:[],//存储用户信息
    isFirst:true,//是否为初始显示
    isLoading:false,//标识是否为加载中
    errorMsg:''//存储错误
}
updateState=(obj)=>{
//     const {data,isFirst,isLoading,error}=obj
//     this.setState({
//         data,
//         isFirst,
//         isLoading,
//         error
//     })
// 
this.setState(obj)
}

returnList=(data)=>{
    this.setState({data:data})

}
    render() {
        return (
            <div className="container">
                <Search updateState={this.updateState}/>
                <List {...this.state}/>
            </div>
        )
    }
}
