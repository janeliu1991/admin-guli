
/*
 * @Descripttion: 
 * @Author: jane
 * @Date: 2022-04-21 17:30:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-22 15:53:57
 */
import React, { Component } from 'react'
import { Button, message } from 'antd'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '@/pages/login/login'
import Layout from '@/pages/layout/layout'

/* 应用的根组件 */
export default class App extends Component {
    handleClick = () => {
        message.success('success')
    }
    render () {
        return (
            <Router>
                {/* 只匹配其中一个 */}
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Layout}></Route>
                </Switch>

            </Router>
        )
    }

}