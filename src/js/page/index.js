import React , {Component} from 'react'
import ReactDOM from 'react-dom';
import App from '../component/app';
import About from '../component/about';
import Other from '../component/other';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class PageTab  extends Component {
    constructor(props) {
        super(props);
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
    <PageTab/>,
    document.getElementById('root')
);