import React, { Component } from 'react'
import Card from '../Card'

export default class List extends Component {
    render() {
        const {data,isFirst,
            isLoading,
            errorMsg}=this.props

       
            
        return (
            <div className="row">
                {
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
