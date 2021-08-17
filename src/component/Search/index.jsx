import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <section class="jumbotron">
            <h3 class="jumbotron-heading">Search Github Users</h3>
            <div>
              <input type="text" placeholder="enter the name you search"/>&nbsp;<button>Search</button>
            </div>
          </section>
        )
    }
}
