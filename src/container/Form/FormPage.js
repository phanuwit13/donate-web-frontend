import React, { Component,Fragment } from 'react'
import Form from '../../components/Form/Form'
export default class FormPage extends Component {
    render() {
        return (
            <Fragment>
                <Form {...this.props}/>
            </Fragment>
        )
    }
}
