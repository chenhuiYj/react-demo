import React, { Component } from 'react'
import {observer} from 'mobx-react';
import comment from '../../store/commentData'

@observer
class CommentList extends Component {
    render() {
        return (
            <div>
                {comment.commentList.map((item)=><p  key={item.id}>{item.content}</p>)}
            </div>
        )
    }
}

export default CommentList
