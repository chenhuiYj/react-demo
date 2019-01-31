import React , {Component} from 'react'
import ReactDOM from 'react-dom';
import './../../sass/reset.scss'
import './../../sass/todo.scss'

class TodoList  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddToDo:false,
            id:1,
            todoList:[],
            updateIndex:-1,
            updateInput:''
        };
    }
    /**
    * @description 添加todo
    */
    addTodo(e){
        //如果按得不是回车键，不做任何处理
        if(e.keyCode!==13){
            return;
        }
        this.state.id++;
        let _list=this.state.todoList;
        _list.push({
            id:this.state.id,
            content:e.target.value,
        });
        e.target.value="";
        this.setState({
            todoList:_list
        });
    }
    /**
    * @description 切换编辑状态
    */
    switchStatus(index){
        let _list=this.state.todoList;
        _list[index].status=!_list[index].status;
        this.setState({
            todoList:_list
        });
    }
    /**
    * @description 删除todo
    */
    deleteTodo(index){
        let _list=this.state.todoList;
        _list.splice(index,1);
        this.setState({
            todoList:_list
        });
    }
    /**
    * @description 编辑todo
    */
    updateTodo(index){
        this.setState({
            updateIndex:index,
            updateInput:this.state.todoList[index].content
        });
    }
    /**
    * @description 执行编辑todo
    */
    handleUpdateTodo(e){
        if(e.keyCode!==undefined&&e.keyCode!==13){
            return;
        }
        let _list=JSON.parse(JSON.stringify(this.state.todoList));
        _list[this.state.updateIndex].content=e.target.value;
        this.setState({
            todoList:_list,
            updateIndex:-1,
            updateInput:''
        });
        e.target.value="";
    }

    render(){
        return (
            <div className="m-todo">
                <input type="text" placeholder="输入 todo ,回车确定" onKeyUp={(e)=>{this.addTodo(e)}} className="u-todo-input"/>
                <ul>
                    {this.state.todoList.map((item,index)=> {
                        return (<li key={item.id}>
                            <span className={`u-icon-status ${item.status ? "yes" : "no"}`} onClick={()=>{this.switchStatus(index)}}/>
                            {this.state.updateIndex===index?<input className="u-input-update" defaultValue={this.state.updateInput} onKeyUp={(e)=>{this.handleUpdateTodo(e) }} onBlur={(e)=>{this.handleUpdateTodo(e) }} autoFocus/>:<span onClick={()=>{this.updateTodo(index)}}>{item.content}</span>}

                            <span className="u-icon-delete" onClick={()=>{this.deleteTodo(index)}}>删除</span>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}
ReactDOM.render(
    <TodoList/>,
    document.getElementById('root')
);
