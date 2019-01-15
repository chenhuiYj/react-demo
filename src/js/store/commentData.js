import {observable,action} from 'mobx'
class Comment {
    @observable commentList=[

    ]

    @action addComment(obj){
        this.commentList.push(obj)
    }
}
const comment=new Comment()
export default comment;
