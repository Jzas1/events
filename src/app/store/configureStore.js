import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootreducer from './rootreducer'

export function configureStore() {
    return createStore(rootreducer, devToolsEnhancer())
}