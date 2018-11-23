import React from 'react';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'
const Tabs = ({ match }) => (
    <div>
        <h3>{match.params.otherId}</h3>
    </div>
)
const Other = ({ match }) => (
    <div>
        <h2>选项列表</h2>
        <ul>
            <li>
                <Link to={`${match.url}/状态`}>
                    状态
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/组件`}>
                    组件
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/生命周期`}>
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
export default Other
