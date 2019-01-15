import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import CommentInput from '../component/comment/commentInput'
import CommentList from '../component/comment/commentList'
import '../../sass/comment.scss'
import '../../sass/reset.scss'

class Comment extends Component {
    render() {
        return (
            <div className="p-comment">
                <CommentInput />
                <CommentList />
            </div>
        )
    }
}
ReactDOM.render(
    <Comment/>,
    document.getElementById('root')
);
