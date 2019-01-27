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
            todoList:[]
        };
    }

    addTodo(e){
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
    switchStatus(index){
        let _list=this.state.todoList;
        _list[index].status=!_list[index].status;
        this.setState({
            todoList:_list
        });
    }
    deleteTodo(index){
        let _list=this.state.todoList;
        _list.splice(index,1);
        this.setState({
            todoList:_list
        });
    }

    render(){
        return (
            <div className="m-todo">
                <input type="text" onKeyUp={(e)=>{this.addTodo(e)}} className="u-todo-input"/>
                <ul>
                    {this.state.todoList.map((item,index)=> {
                        return (<li key={item.id}>
                            <span className={`u-icon-status ${item.status ? "yes" : "no"}`} onClick={()=>{this.switchStatus(index)}}/>
                            {item.content}
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
