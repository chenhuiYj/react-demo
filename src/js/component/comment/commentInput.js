import React, { Component } from 'react'
import comment from '../../store/commentData'
import '../../../sass/commentInput.scss'
class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            commentContent:''
        };
    }
    handleBlur(e){
        this.setState({
            commentContent:e.target.value,
        });
    }
    addComment(){
        comment.addComment({'content':this.state.commentContent,'id':this.state.id++});
        this.setState({
            commentContent:'',
        });
    }
    render() {
        return (
            <div className="m-comment-input">
                <textarea placeholder="请输入评论" value={this.state.commentContent} onChange={this.handleBlur.bind(this)}/>
                <button onClick={this.addComment.bind(this)}>提交评论</button>
            </div>
        )
    }
}

export default CommentInput
