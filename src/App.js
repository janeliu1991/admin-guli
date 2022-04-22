
/*
 * @Descripttion: 
 * @Author: jane
 * @Date: 2022-04-21 17:30:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-22 10:25:03
 */
import React, { Component } from 'react'
import { Button, message } from 'antd'

/* 应用的根组件 */
export default class App extends Component {
    handleClick = () => {
        message.success('success')
    }
    render () {
        return <div>
            <Button type="primary" onClick={this.handleClick}>Primary Button</Button>
        </div>
    }

}