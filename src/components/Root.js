import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes, routes } from '../routes.js'

class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                { renderRoutes(routes) }
            </BrowserRouter>
        )
    }
}

export default Root
