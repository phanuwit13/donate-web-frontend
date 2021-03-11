import React, { Component ,Fragment} from 'react'
import FormPage from './FormPage'
export default class index extends Component {
    render() {
        return (
            <Fragment>
                <FormPage {...this.props}/>
            </Fragment>
        )
    }
}
