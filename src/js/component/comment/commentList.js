import React, { Component } from 'react'
import {observer} from 'mobx-react';
import comment from '../../store/commentData'
import '../../../sass/commentList.scss'

@observer
class CommentList extends Component {
    render() {
        return (
            <div className="m-comment-list">
                <h3>评论列表</h3>
                {comment.commentList.map((item,index)=><div  key={item.id} className="m-comment-item">{index+1}.{item.content}</div>)}
            </div>
        )
    }
}

export default CommentList
