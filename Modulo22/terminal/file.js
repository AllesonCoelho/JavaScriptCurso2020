const fs = require('fs')
/*
fs.writeFile('test.txt', 'Ola node js', err =>{
    console.log(err)
})
*/
/*
fs.appendFile('test.txt', 'Ola node js\n', err =>{
    console.log(err)
})
*/

//fs.rename('test.txt', 'test2.txt', err => console.log(err))
fs.unlink('test2.txt', err => console.log(err))

console.log(__dirname)