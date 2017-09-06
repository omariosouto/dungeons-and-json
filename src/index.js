import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker'


function personagens(state= [], action) {
    switch(action.type) {
        case 'TESTE':
            console.log('Teste...')
            break; 

        default:
            return state
    }
}

const store = createStore(personagens)

ReactDOM.render(
    <Provider store={ store }>
        <Root />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
