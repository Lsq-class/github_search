import React, { Component } from 'react'
import Card from '../Card'

export default class List extends Component {
    render() {
        if(this.props.data!==null){
            const {data}=this.props.data
        }
            
        return (
            <div className="row">
                {
                    this.props.data.map((data)=>{
                        return <Card key={data.id} avatar_url={data.avatar_url} login={data.login} html_url={data.html_url}/>
                    })
                }

            </div>
        )
    }
}
