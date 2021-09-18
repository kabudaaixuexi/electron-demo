import { App } from "vue";
import createStore from 'xins.store.plugin'
import ChatModule from './chatModule'
import TestModule from './testModule'
export default (app:App) => {
    createStore(app,[TestModule, ChatModule])
}