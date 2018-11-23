import React , {Component} from 'react'
import ReactDOM from 'react-dom';
import './../../sass/reset.scss'
import './../../sass/shoppingCart.scss'

class TodoList  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingList:[]
        };
    }

    render(){
        return (
            <div className="m-shopping-cart">

            </div>
        )
    }
}
ReactDOM.render(
    <TodoList/>,
    document.getElementById('root')
);
