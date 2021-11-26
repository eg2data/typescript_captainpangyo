let arr = [
    {gender: 'male', name: 'park'},
    {gender: 'female', name: 'sarah'},
    {gender: 'male', name: 'lee'},
]

// let filtered = arr.filter(function(item) {
//     if (item.gender == 'female')
//             return item;
// });

let filtered = arr.filter(item => item.gender=='female')

console.log(filtered);