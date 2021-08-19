import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'
import { Button } from 'antd'
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export default class App extends Component {

    render() {
        return (
            <div className="container">
                <Search/>
                <List/>
                <Button type="primary" size='large'  >
          Primary
        </Button>
        <RangePicker />
            </div>
        )
    }
}
