import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './item.css'

export default class item extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    delComment: PropTypes.func.isRequired
  }

  delComment = () => {
    this.props.delComment(this.props.index)
  }

  render() {
    const { userName, content } = this.props.comment
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="##" onClick={this.delComment}>删除</a>
        </div>
        <p className="user"><span>{userName}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>
    )
  }
}
