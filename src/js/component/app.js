import React,{Component}from 'react';
import {observer} from 'mobx-react';
import store from '../store/testStore';
@observer
class App  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 2,
            isAddComment:false,
            comment:{
                id:'',
                count:0,
                title:''
            }
        };
    }
    showAddComment(){
        let _this=this;
        this.setState({
            isAddComment:!_this.state.isAddComment
        })
    }
    handleChange(e){
        let _this=this;
        store.todoAdd({
            id:_this.state.id++,
            count:0,
            title:e.target.value
        })
        this.setState({
            isAddComment:!_this.state.isAddComment
        });
    }
    render(){
        return [
            <div onClick={this.showAddComment.bind(this)} key={'btn-box'}>
                添加数据
            </div>,
            <div key={'comment-form'}>
                {this.state.isAddComment&&<input type="text" onBlur={this.handleChange.bind(this)} />}
            </div>
            ,
            <ul key={'comment-list'}>
                {store.todos.map((item,index)=><li key={item.id} onClick={()=>{store.addCount(index);}}>
                    {item.title}
                    <div>浏览人数：{item.count}</div>
                 </li>)}
            </ul>
            ]
    }
}
export default App
