import React , {Component} from 'react'
import ReactDOM from 'react-dom';
import App from './src/page/app';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const About = () => (
    <div>
        <h2>这是关于页面</h2>
    </div>
)

const Tabs = ({ match }) => (
    <div>
        <h3>{match.params.otherId}</h3>
    </div>
)

const Other = ({ match }) => (
    <div>
        <span>{JSON.stringify(match)}</span>
        <h2>选项列表</h2>
        <ul>
            <li>
                <Link to={`${match.url}/1`}>
                    状态
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/2`}>
                    组件
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/3`}>
                    生命周期
                </Link>
            </li>
        </ul>

        <Route path={`${match.path}/:otherId`} component={Tabs}/>
        <Route exact path={match.path} render={() => (
            <h3>请选择一个选项</h3>
        )}/>
    </div>
)

class BasicExample  extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
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
    <BasicExample/>,
    document.getElementById('root')
);