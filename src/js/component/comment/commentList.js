import React, {Component} from 'react'
import {observer} from 'mobx-react';
import comment from '../../store/commentData'
import '../../../sass/commentList.scss'

@observer
class CommentList extends Component {
    render() {
        return (
            <div className="m-comment-list">
                {comment.commentList.length>0?<h3>评论列表</h3>:<p>暂无评论</p>}
                {comment.commentList.map((item, index) => <div key={item.id}
                                                               className="m-comment-item"><p>{index + 1}.{item.content}</p>
                    <a href="javascript:;">回复</a></div>)}
            </div>
        )
    }
}

export default CommentList
