import React, { Component } from "react"

import Add from './components/add/add'
import List from './components/list/list'

export default class App extends Component {

  state= {
    comments: [
      {
        id: 1,
        userName: 'Tom',
        content: 'React is so easy!'
      },
      {
        id: 2,
        userName: 'Jery',
        content: 'React is so so!'
      }
    ]
  }

  addComment = (comment) => {
    const { comments } = this.state
    this.setState({
      comments: [comment, ...comments]
    })
  }

  delComment = (index) => {
    const { comments } = this.state
    this.setState({
      comments: comments.filter((c, i) => i !== index)
    })
  }

  render() {
    const { comments } = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment}/>
          <List comments={comments} delComment={this.delComment} />
        </div>
      </div>
    )
  }
}
