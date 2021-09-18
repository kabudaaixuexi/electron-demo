export default {
    storeName: 'test',
    persistedState: false,
    state: {
        res: []
    },
    setter:[
        {
            'pushRes':function(str){
                console.log(this);
                console.log(str);
                this.res.push(str)
                console.log(str);
            }
        }
    ]
}