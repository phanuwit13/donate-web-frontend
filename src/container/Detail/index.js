import React, { Component,Fragment } from 'react'
import DetailPage from './DetailPage'
export default class index extends Component {
    render() {
        return (
            <Fragment>
                <DetailPage {...this.props}/>
            </Fragment>
        )
    }
}
