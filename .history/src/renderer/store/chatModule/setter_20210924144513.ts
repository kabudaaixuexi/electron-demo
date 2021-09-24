export const acticleA = {
    'setUser': function (payload:[{uid: string,
        password: number}]) {
        this.user = payload
    },
    'removeUser': function () {
        this.user = null
    }
}
export default [acticleA]