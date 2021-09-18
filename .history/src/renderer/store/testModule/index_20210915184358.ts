export default {
    storeName: 'test',
    persistedState: false,
    state: {
        res: ['211241212']
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