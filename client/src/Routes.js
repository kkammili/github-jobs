import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import Admin from './Admin'

class Routes extends React.Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/" exact>
                        <App />
                    </Route>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                </Switch>
            </Fragment>
        )
    }
}

export default Routes