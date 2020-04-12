import React, { Component } from 'react'

export default class item extends Component {
  render() {
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="##" onClick={this.deleteComment}>删除</a>
        </div>
        <p className="user"><span>{username}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>
    )
  }
}
