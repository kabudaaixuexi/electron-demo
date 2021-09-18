export default {
    storeName: 'test',
    persistedState: false,
    state: {
        res: []
    },
    setter:[
        {
            'pushRes':function(str){
                this.res.push(str)
            }
        }
    ]
}