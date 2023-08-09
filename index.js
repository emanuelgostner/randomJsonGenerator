var dream = require('dreamjs');
dream.customType('hobby', function(helper) {
    var hobbies = ['reading', 'writing', 'painting', 'dancing', 'cooking', 'traveling'];
    let result = [];
    let n = Math.floor(Math.random() * hobbies.length) + 1;
    for (let i = 0; i < n; i++) {
        let index = Math.floor(Math.random() * hobbies.length);
        result.push(hobbies[index]);
    }
    return result;
});
dream.schema('User', {
    name: 'name',
    phone: 'phone',
    address: 'address',
    age: 'age',
    country: 'country',
    hobby: 'hobby'
})
var data1 = dream
    .useSchema('User')
    .generateRnd(1)

var output = data1.output();
require('fs').writeFile('file.json', JSON.stringify(output), (error) => {
    if (error) {
        throw error;
    }
});
