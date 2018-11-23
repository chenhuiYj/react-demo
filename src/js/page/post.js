import React , {Component} from 'react'
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class Post  extends Component {
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
    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/about">关于</Link></li>
                        <li><Link to="/other">其他</Link></li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={App}/>
                    <Route path="/about" component={About}/>
                    <Route path="/other" component={Other}/>
                </div>
            </Router>
        )
    }
}
ReactDOM.render(
    <Post/>,
    document.getElementById('root')
);
