import React, { Component } from 'react'

import Detail from '../container/Detail/index'
import Form from '../container/Form/index'

export default class form extends Component {
    render() {
        return (
            <div>
                <Detail/>
                <Form/>
            </div>
        )
    }
}
