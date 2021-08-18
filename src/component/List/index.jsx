import React, { Component } from 'react'
import Card from '../Card'
import PubSub from 'pubsub-js'

export default class List extends Component {
    // 初始化状态
    state={
        data:[],//存储用户信息
        isFirst:true,//是否为初始显示
        isLoading:false,//标识是否为加载中
        errorMsg:''//存储错误
    }
componentDidMount(){
    /* 我订阅了一个名为search的消息  _为消息名，
     data为传来的数据，原理是浏览器开了一个监听事件*/ 
    this.msgid=PubSub.subscribe('search',(_,data)=>{
        this.setState(data)
    })
}
// 当组件将要卸载时订阅需要取消，为节约内存
componentWillUnmount(){
    PubSub.unsubscribe(this.msgid)
}

    render() {
        const {data,isFirst,
            isLoading,
            errorMsg}=this.state
       
        return (
            <div className="row">
                {
                    // 条件表达式连续写法
                    isFirst?<h1>欢迎使用</h1>:
                    isLoading?<h1>Loading...</h1>:
                    errorMsg?<h1>{errorMsg}</h1>:
                    data.map((data)=>{
                        return <Card key={data.id} avatar_url={data.avatar_url} login={data.login} html_url={data.html_url}/>
                    })
                }
            </div>
        )
    }
}
