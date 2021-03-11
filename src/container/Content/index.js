import React, { Component,Fragment } from 'react'
import ContentPage from './ContentPage'
export default class index extends Component {
    render() {
        return (
            <Fragment>
                <ContentPage {...this.props}/>
            </Fragment>
        )
    }
}
