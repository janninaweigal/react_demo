import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './App.js'
import routerTest from './routerTest.js'
import AntdDesign from './antd.js'
function AppRouter() {
    return (
        <Router>
            <ul>
                <li> <Link to="/">首页</Link> </li>
                <li><Link to="/antd">Ant Design</Link></li>
                <li><Link to="/list/">路由一</Link> </li>
                <li><Link to="/list/123">路由二</Link> </li>
            </ul>
            {/* exact 精准匹配 */}
            <Route path="/" exact component={App} />
            <Route path="/antd" exact component={AntdDesign} />
            <Route path="/list" exact component={routerTest} />
            <Route path="/list/:id" exact component={routerTest} />
        </Router>
      );
}
export default AppRouter;