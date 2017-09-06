import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home, Game } from './pages'

export const routes = [
    { path: '/', exact: true, component: Home },
    { path: '/', component: Game },
]

export const renderRoutes = (routesList) => {
    const list = routesList ? (   
        <Switch>
            { routesList.map((route, index) => {
                return <Route key={index} path={route.path} component={route.component} exact={route.exact}/>
            })}
        </Switch>
    ) : null

    return list
}