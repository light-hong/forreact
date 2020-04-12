import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class list extends Component {
  render() {
    const display = 'none'
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {/* {
            comments.map((comment, index) => {
              return <Item 
                        key={comment.id} 
                        comment={comment} 
                        deleteComment={deleteComment}
                        index={index}
                     />
            })
          } */}
        </ul>
      </div>
    )
  }
}
