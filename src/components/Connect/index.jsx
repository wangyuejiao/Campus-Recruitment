import React, { Component } from 'react'
import { Empty } from 'antd';
export default class index extends Component {
    render() {
        return (
            <div>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </div>
        )
    }
}
