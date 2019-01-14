import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import CommentInput from '../component/comment/commentInput'
import CommentList from '../component/comment/commentList'

class Comment extends Component {
    render() {
        return (
            <div>
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
