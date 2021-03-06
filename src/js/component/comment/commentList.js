import React, {Component} from 'react'
import {observer} from 'mobx-react';
import comment from '../../store/commentData'
import '../../../sass/commentList.scss'

@observer
class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applyContent:'',
            isApply:-1
        };
    }
    /**
     * @description 获取输入框的值
     */
    handleBlur(e){
        this.setState({
            applyContent: e.target.value,
        });
    }
    /**
     * @description 提交回复
     */
    submitApply(i){
        this.setState({
            applyContent: '',
            isApply:-1
        });
        let obj={
            con:this.state.applyContent,
            id:+new Date()
        }
        comment.addApply(i,obj);
    }
    /**
     * @description 切换回复框显示隐藏
     */
    switchApply(index) {
        this.setState({
            isApply: index,
            applyContent: ''
        });
    }
    render() {
        return (
            <div className="m-comment-list">
                {comment.commentList.length>0?<h3>评论列表</h3>:<p>暂无评论</p>}
                {comment.commentList.map((item, index) => <div key={item.id}
                                                               className="m-comment-item"><p>{index + 1}.{item.content}</p>
                    {item.apply.length>0?<h4 className='u-apply-tips'>{item.apply.length}条回复</h4>:''}
                    {item.apply.map(sub=><div key={sub.id}  className='m-apply-list'>{sub.con}</div>)}
                    {this.state.isApply===item.id?<div className="m-apply"><textarea placeholder="请输入回复内容" value={this.state.applyContent} onChange={this.handleBlur.bind(this)}/><a href="javascript:;" onClick={()=>{this.submitApply(index)}}>确定</a><a href="javascript:;" onClick={()=>{this.switchApply(-1)}}>取消</a></div>:<a href="javascript:;" className="u-btn-apply" onClick={()=>{this.switchApply(index)}} >回复</a>}
                    </div>)}
            </div>
        )
    }
}

export default CommentList
