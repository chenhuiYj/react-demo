import {observable, action} from 'mobx'
class Comment {
    @observable commentList = []
    /**
     * 回复评论
     **/
    @action addApply(index,con) {
        this.commentList[index].apply.push(con)
        console.log(this.commentList)
    }
    /**
    * 添加评论
    **/
    @action addComment(obj) {
        this.commentList.push(obj)
    }
}
const comment = new Comment()
export default comment;
