
const fs = require('fs');

// read file 

let content =fs.readFileSync('f1.txt')

// console.log( "file is " +  content)

// console.log( content.toString())


// write inti a file 


fs.writeFileSync('f2.txt','this data will be written into f2.txt')

// unknow file 

fs.writeFileSync('f3.txt','i ama mandeep')


// append update add new data to new file

fs.appendFileSync('f3.txt',"this is updated data ")

// delete

fs.unlinkSync('f1.txt')

console.log('file deleted')

