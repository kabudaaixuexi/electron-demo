import { App } from "vue";
import createStore from 'xins.store.plugin'
import TestModule from './chatModule'
export default (app:App) => {
    createStore(app,[TestModule])
}