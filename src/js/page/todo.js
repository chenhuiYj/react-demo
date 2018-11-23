import React , {Component} from 'react'
import ReactDOM from 'react-dom';

class TodoList  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddToDo:false,
            todo:{
                id:'',
                count:0,
                title:''
            },
            todoList:[]
        };
    }
    render(){
        return (
            <div>

            </div>
        )
    }
}
ReactDOM.render(
    <TodoList/>,
    document.getElementById('root')
);
